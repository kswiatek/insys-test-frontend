import * as actionTypes from './actionTypes';

export const toggleCategory = (category) => {
    return {
        type: actionTypes.TOGGLE_CATEGORY,
        category: category
    }
};