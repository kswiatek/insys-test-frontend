import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/actions';

export function* fetchImagesSaga(action) {
    yield put(actions.fetchImagesStart());
    try {
        const response = yield axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://flickr.com/services/feeds/photos_public.gne?tags=Marilyn Monroe&format=json&jsoncallback=?`);
            const trimmedResponse = response.data.slice(1, response.data.length - 1);
            const jsonResponse = JSON.parse(trimmedResponse);
            const imagesLinks = jsonResponse.items.slice(0, 9).map(obj => {
                return {
                    thumbLink: obj.media.m,
                    fullLink: obj.link
                };
            });
        yield put(actions.fetchImagesSuccess(imagesLinks));
    } catch (error) {
        yield put(actions.fetchImagesFail(error));
    }
}

