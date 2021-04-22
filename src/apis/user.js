import axiosClient from "./axiosClient";

export const logIn = account => axiosClient.post("/user/login-with-admin-role", account);

export const getUserInfo = () => axiosClient.get("/user/get-user-info");

export const logOut = () => axiosClient.get("/user/logout");