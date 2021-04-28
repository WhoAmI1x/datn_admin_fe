import axiosClient from "./axiosClient";

export const logIn = account => axiosClient.post("/user/login-with-admin-role", account);

export const getUserInfo = () => axiosClient.get("/user/get-user-info");

export const logOut = () => axiosClient.get("/user/logout");

export const getAllUser = (keyword) => axiosClient.get("/user/get-all-user", { params: { keyword } });

export const deleteUser = (userId) => axiosClient.delete("/user/delete-user", { params: { userId } });