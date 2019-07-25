import * as actionTypes from './actionTypes';

export const toggleCategory = (category) => {
    return {
        type: actionTypes.TOGGLE_CATEGORY,
        category: category
    }
};

export const fetchImages = () => {
    return {
        type: actionTypes.FETCH_IMAGES
    }
};

export const fetchImagesStart = () => {
    return {
        type: actionTypes.FETCH_IMAGES_START
    }
};

export const fetchImagesSuccess = (images) => {
    return {
        type: actionTypes.FETCH_IMAGES_SUCCESS,
        images: images
    }
};

export const fetchImagesFail = (error) => {
    return {
        type: actionTypes.FETCH_IMAGES_FAIL,
        error: error
    }
};