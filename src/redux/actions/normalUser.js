import { actSetLoading } from './loading';
import { getAllUser, deleteUser } from "../../apis/user";
import { message } from "antd";

export const actGetAllUser = (keyword) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getAllUser(keyword);

        if (res.status === 200) {
            dispatch({
                type: "SET_NORMAL_USER",
                payload: res.allUser
            });
        }
    } catch (e) {
        message.error(e.response.data.message);
    }
    dispatch(actSetLoading(false));
}

export const actDeleteUser = (userId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await deleteUser(userId);

        if (res.status === 200) {
            dispatch({
                type: "SET_NORMAL_USER",
                payload: res.allUser
            });
            message.success("Xóa người dùng thành công!");
        }
    } catch (e) {
        message.error(e.response.data.message);
    }
    dispatch(actSetLoading(false));
};