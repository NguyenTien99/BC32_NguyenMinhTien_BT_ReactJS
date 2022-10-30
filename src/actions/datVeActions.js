import { CALC_TOTAL, PAYMENT, REMOVE_SEAT, SELECT_SEAT } from "../constans/datVeConstans";

export const selectSeat = (ghe) => {
    return {
        type: SELECT_SEAT,
        payload: ghe,
    }
}

export const removeSeat = (ghe) => {
    return {
        type: REMOVE_SEAT,
        payload: ghe,
    }
}

export const calcTotal = () => {
    return {
        type: CALC_TOTAL,
    }
}

export const payment = () => {
    return {
        type: PAYMENT,
    }
}