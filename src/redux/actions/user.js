import { actSetLoading } from './loading';
import { logIn, logOut, getUserInfo } from "../../apis/user";
import { message } from "antd";
import { removeAccessToken } from "../../utils/common";

export const actLogIn = (history, account) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await logIn(account);

        if (res.status === 200) {
            localStorage.setItem("accessToken", res.token);
            history.push("/dashboard");
            dispatch({
                type: "SET_USER",
                payload: res.user
            });
            message.success("Đăng nhập thành công!");
        }
    } catch (e) {
        message.error(e.response?.data?.error?.message || "Lỗi server!");
    }
    dispatch(actSetLoading(false));
}

export const actGetUserInfo = history => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getUserInfo();

        if (res.status === 200) {
            dispatch({
                type: "SET_USER",
                payload: res.user
            })
            dispatch(actSetLoading(false));
        }
    } catch (e) {
        removeAccessToken("accessToken");
        message.error(e.response?.data.message || e.response?.data.error || "Lỗi đăng nhập!");
        history.push("/");
        dispatch(actSetLoading(false));

    }
}

export const actLogOut = history => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await logOut();

        if (res.status === 200) {
            dispatch({
                type: "SIGN_OUT"
            });
            localStorage.removeItem("accessToken");
            history.push("/");
            message.success(res.message);
        }
    } catch (e) {
        message.error(e.response.data.message || e.response.data.error);
    }
    dispatch(actSetLoading(false));
}


