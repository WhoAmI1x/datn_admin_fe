import axiosClient from "./axiosClient";

export const signIn = account => axiosClient.post("/users/sign-in", account);

export const signUp = account => axiosClient.post("/users/sign-up", account);

export const signOut = () => axiosClient.get("/users/sign-out");

export const getUserInfo = () => axiosClient.get("/users");

export const getAllUser = () => axiosClient.get("/users/get-all-user");

export const addFriend = friendId => axiosClient.post(`/users/add-friend/${friendId}`)
