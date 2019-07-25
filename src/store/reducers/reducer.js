import * as actionTypes from '../actions/actionTypes';
import * as categories from '../../shared/categories';

const initialState = {
    category: categories.CATEGORY_DESCRIPTION,
    images: null
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
                ...state//,
                // images: action.images
            }
        case actionTypes.FETCH_IMAGES_START:
            return {
                ...state
                //probably redundant
            }
        case actionTypes.FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.images
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