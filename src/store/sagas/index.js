import { takeEvery } from 'redux-saga/effects';
import { fetchImagesSaga } from './saga';
import * as actionTypes from '../actions/actionTypes';

export function* watchSaga() {
    yield takeEvery(actionTypes.FETCH_IMAGES, fetchImagesSaga);
}