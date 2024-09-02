import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  tasksRequest,
  getTasksSuccess,
  getTasksFailure,
  updateTaskRequest,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskFailure,
  TaskType,
  addTaskSuccess,
  addTaskFailure,
  addTaskRequest,
} from "../slices/tasksSlice";

const api_url = process.env.REACT_APP_API;

function* fetchTasksSaga() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      `${api_url}/todos?_start=0&_limit=10`
    );
    yield put(getTasksSuccess(response.data));
  } catch (error) {
    yield put(getTasksFailure((error as Error).message));
  }
}

function* updateTaskSaga(action: { payload: { id: string } }) {
  try {
    yield put(updateTaskSuccess(action.payload));
  } catch (error) {
    yield put(updateTaskFailure((error as Error).message));
  }
}

function* deleteTaskSaga(action: { payload: { id: string } }) {
  try {
    yield put(deleteTaskSuccess(action.payload));
  } catch (error) {
    yield put(deleteTaskFailure((error as Error).message));
  }
}

function* addTaskSaga(action: { payload: TaskType }) {
  try {
    yield put(addTaskSuccess(action.payload));
  } catch (error) {
    yield put(addTaskFailure((error as Error).message));
  }
}

export default function* usersSaga() {
  yield takeLatest(tasksRequest, fetchTasksSaga);
  yield takeLatest(updateTaskRequest, updateTaskSaga);
  yield takeLatest(deleteTaskRequest, deleteTaskSaga);
  yield takeLatest(addTaskRequest, addTaskSaga);
}
