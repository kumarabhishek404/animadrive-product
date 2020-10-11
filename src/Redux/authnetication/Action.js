import { LOG_IN, LOG_OUT } from './Type';

export const logAction = authentication => {
    if (authentication) {
        return {
            type: LOG_IN
        }
    } else {
        return {
            type: LOG_OUT
        }
    }
}