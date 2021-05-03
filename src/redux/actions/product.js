import { getProductsByCategory, getProductsByCategoryFromEcommerce } from "../../apis/product";
import { actSetLoading } from "./loading";

export const actGetProductsByCategory = (categoryId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getProductsByCategory(categoryId);

        if (res.status === 200) {
            dispatch({
                type: "SET_PRODUCTS",
                payload: res.products
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actGetProductsByCategoryFromEcommerce = (ecommerce, categoryId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getProductsByCategoryFromEcommerce(ecommerce, categoryId);

        if (res.status === 200) {
            dispatch({
                type: "SET_PRODUCTS",
                payload: res.products
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actGetProductDetail = (productId, cb) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await actGetProductDetail(productId);

        if (res.status === 200) {
            if (cb) cb(res.productFullInfo);
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}