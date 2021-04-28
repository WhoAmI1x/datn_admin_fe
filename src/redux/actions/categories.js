import { message } from "antd";
import { getCategories, deleteCategory, updateCategory, createCategory } from "../../apis/category";
import { actSetLoading } from "./loading";

export const actGetCategories = (ecommerce, type, keyword) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getCategories(ecommerce, type, keyword);

        if (res.status === 200) {
            dispatch({
                type: "SET_CATEGORIES",
                payload: res.categories
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actDeleteCategory = (categoryId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await deleteCategory(categoryId);

        if (res.status === 200) {
            dispatch({
                type: "SET_CATEGORIES",
                payload: res.categories
            });
            message.success("Xóa danh mục thành công!");
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actUpdateCategory = (categoryId, data) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await updateCategory(categoryId, data);

        if (res.status === 200) {
            dispatch({
                type: "SET_CATEGORIES",
                payload: res.categories
            });
            message.success("Cập nhật danh mục thành công!");
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actCreateCategory = data => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await createCategory(data);

        if (res.status === 200) {
            dispatch({
                type: "SET_CATEGORIES",
                payload: res.categories
            });
            message.success("Thêm mới danh mục thành công!");
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}