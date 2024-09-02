import { all } from "redux-saga/effects";
import usersSaga from "./sagas/usersSaga";
import tasksSaga from "./sagas/tasksSaga";

export default function* rootSaga() {
  yield all([usersSaga(), tasksSaga()]);
}
