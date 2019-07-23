import * as actionTypes from '../actions/actionTypes';
import * as categories from '../../shared/categories';
const initialState = {
    category: categories.CATEGORY_DESCRIPTION
};

const reducer = (state = initialState, action) => {
    console.log('reducer: ', state, action);
    switch(action.type) {
        case actionTypes.TOGGLE_CATEGORY:
            return {
                ...state,
                category: action.category
            };
        default:
            return state;
    }
};

export default reducer;