import { actSetLoading } from "./loading";
import {
    getSchedules,
    getFlashSaleProductSchedulesFromEcommerce,
    getTodaySaleProductSchedulesFromEcommerce
} from "../../apis/schedule";

export const actGetSchedules = () => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getSchedules();

        if (res.status === 200) {
            dispatch({
                type: "SET_SCHEDULES",
                payload: res.schedules
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actGetFlashSaleProductSchedulesFromEcommerce = () => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getFlashSaleProductSchedulesFromEcommerce();

        if (res.status === 200) {
            dispatch({
                type: "SET_FLASH_SALE_PRODUCT_SCHEDULES_FROM_ECOMMERCE",
                payload: res.schedules
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actGetTodaySaleProductSchedulesFromEcommerce = () => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getTodaySaleProductSchedulesFromEcommerce();

        if (res.status === 200) {
            dispatch({
                type: "SET_TODAY_SALE_PRODUCT_SCHEDULES_FROM_ECOMMERCE",
                payload: res.schedules
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}