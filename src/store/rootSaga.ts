import apiCallsSaga from '@/helpers/watchRequest';
import { all } from '@redux-saga/core/effects';
import 'regenerator-runtime/runtime';

function* rootSaga() {
  yield all([apiCallsSaga()]);
}

export default rootSaga;
