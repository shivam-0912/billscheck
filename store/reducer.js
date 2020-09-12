import * as actionTypes  from  './actions'

const initialState = {
    user_id: 0,
    item_id:0,

};

const reducer = ( state = initialState, action ) => {
    const newState = Object.assign({}, state);
    switch ( action.type ) {
        case actionTypes.UPDATE_USER:
            //all the below thing is done bcoz we need to update the state immutably
            
            newState.user_id = parseInt(action.id);
            return newState;
        case actionTypes.UPDATE_ITEM:
           
            newState.item_id = parseInt(action.id);
            return newState;
        
    }
    return state;
};

export default reducer;