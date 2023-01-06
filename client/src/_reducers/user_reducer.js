import {
    RESERVE_USER
} from '../_actions/types'

export default function(state = {}, action) {
    switch (action.type) {
        case RESERVE_USER:
            return {...state, reserve: action.payload}
            break;
        default:
            return state;
    }
}