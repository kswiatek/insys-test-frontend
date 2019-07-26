import * as actionTypes from '../actions/actionTypes';

const initialState = {
    category: null,
    images: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_CATEGORY:
            return {
                ...state,
                category: action.category
            };
        case actionTypes.FETCH_IMAGES:
            return {
                ...state
            }
        case actionTypes.FETCH_IMAGES_START:
            return {
                ...state
            }
        case actionTypes.FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.images,
                error: null
            }
        case actionTypes.FETCH_IMAGES_FAIL:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
};

export default reducer;