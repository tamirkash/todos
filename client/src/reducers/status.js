import {GOT_STATUS_LIST,STATUS_OPEN_CHANGE} from "../actions/actions";

const status = (state = {statusList: [], isStatusOpen: false}, action) => {
    switch(action.type){
        case GOT_STATUS_LIST:
            return Object.assign({}, state, {statusList: action.payload});
        case STATUS_OPEN_CHANGE:
            return Object.assign({}, state, {isStatusOpen: action.payload})
        default:
            return state;
    }
};

export default status;