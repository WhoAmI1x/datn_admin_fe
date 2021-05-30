import axiosClient from "./axiosClient";

export const getStatistic = () => axiosClient.get("/statistic");