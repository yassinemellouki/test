import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  usersRequest,
  getUsersSuccess,
  getUsersFailure,
  UserType,
  userRequest,
  getUserSuccess,
  getUserFailure,
} from "../slices/usersSlice";
import { initializeUserData } from "../../utils/userInit";

const api_url = process.env.REACT_APP_API;

function* fetchUsersSaga() {
  try {
    const response: AxiosResponse = yield call(axios.get, `${api_url}/users`);
    const formatedUsers = response.data.map((user: UserType) => {
      return initializeUserData(user);
    });
    yield put(getUsersSuccess(formatedUsers));
  } catch (error) {
    yield put(getUsersFailure((error as Error).message));
  }
}

function* fetchUserSaga(action: { payload: { id: string } }) {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      `${api_url}/users/${action.payload.id}`
    );
    const formatedUsers = initializeUserData(response.data, true);
    yield put(getUserSuccess(formatedUsers));
  } catch (error) {
    yield put(getUserFailure((error as Error).message));
  }
}

export default function* usersSaga() {
  yield takeLatest(usersRequest, fetchUsersSaga);
  yield takeLatest(userRequest, fetchUserSaga);
}
