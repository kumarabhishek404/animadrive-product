import { LOG_IN, LOG_OUT } from './Type';

const initialState = {
    login: false,
    message: 'User Can login'
}

const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                login: true,
                message: "LogIN Successfully"
            }
        case LOG_OUT:
            return {
                login: false,
                message: "LogOUT Successfully"
            }
        default: return state
    }
}

export default logReducer