import { actSetLoading } from './loading';
import { signIn, signOut, signUp, getUserInfo, getAllUser, addFriend } from "../../apis/user";
import { message } from "antd";
import { removeAccessToken } from "../../utils/common";

export const actSignUp = (history, account) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await signUp(account);

        if (res.status === 201) {
            localStorage.setItem("accessToken", res.token);
            dispatch({
                type: "SET_USER",
                payload: res.newUser
            });
            history.push("/home/empty");
            message.success(res.message);
        }
    } catch (e) {
        message.error(e.response?.data.error.message);
    }
    dispatch(actSetLoading(false));
}

export const actSignIn = (history, account) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await signIn(account);

        if (res.status === 200) {
            localStorage.setItem("accessToken", res.token);
            history.push(`/home/${res.user.friends?.length > 0 ? res.user.friends[0]?._id : "friend-list-empty"}`);
            dispatch({
                type: "SET_USER",
                payload: res.user
            });
            message.success(res.message);
        }
    } catch (e) {
        message.error(e.response?.data.error || "Server error!");
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
        message.error(e.response?.data.error);
        history.push("/");
        dispatch(actSetLoading(false));

    }
}

export const actSignOut = history => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await signOut();

        if (res.status === 200) {
            localStorage.removeItem("accessToken");
            history.push("/");
            message.success(res.message);
        }
    } catch (e) {
        message.error(e.response?.data.error);
    }
    dispatch(actSetLoading(false));
}

export const actGetAllUser = () => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getAllUser();

        if (res.status === 200) {
            dispatch({
                type: "SET_NEW_USER_LIST",
                payload: res.users
            })
        }
    } catch (e) {
        message.error(e.response?.data.error);
    }
    dispatch(actSetLoading(false));
};

export const actAddFriend = friendId => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await addFriend(friendId);


        console.log({ res });
    } catch (e) {
        message.error(e.response?.data.error);
    }
    dispatch(actSetLoading(false));
};