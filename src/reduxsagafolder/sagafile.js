import { call, put, takeEvery } from "redux-saga/effects";
import { datafetched } from "./slice";
function* getdata() {
  const cats = yield call(() => {
    return fetch("https://api.thecatapi.com/v1/breeds");
  });
  const converteddata = yield cats.json();
  const smalldata = converteddata.slice(0, 10);
  yield put(datafetched(smalldata));
}
function* catsaga() {
  yield takeEvery("cat/fetchdata", getdata);
}

export default catsaga;
