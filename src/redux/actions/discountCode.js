import { message } from "antd";
import { deleteDiscountCodeById, getDiscountCodeByCategory, getDiscountCodesByCategoryFromEcommerce } from "../../apis/discountCode";
import { actSetLoading } from "./loading";

export const actGetDiscountCodeByCategory = (categoryId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getDiscountCodeByCategory(categoryId);

        if (res.status === 200) {
            dispatch({
                type: "SET_DISCOUNT_CODES",
                payload: res.discountCodes
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actGetDiscountCodesByCategoryFromEcommerce = (ecommerce, categoryId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getDiscountCodesByCategoryFromEcommerce(ecommerce, categoryId);

        if (res.status === 200) {
            dispatch({
                type: "SET_DISCOUNT_CODES",
                payload: res.discountCodes
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actDeleteDiscountCodeById = (discountCodeId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await deleteDiscountCodeById(discountCodeId);

        if (res.status === 200) {
            dispatch({
                type: "SET_DISCOUNT_CODES",
                payload: res.discountCodes
            });
            message.success("Xóa mã thành công!");
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

