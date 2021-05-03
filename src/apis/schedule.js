import axiosClient from "./axiosClient";

export const getSchedules = () => axiosClient.get("/schedule/get-schedules");

export const getFlashSaleProductSchedulesFromEcommerce = () => axiosClient.get("/shopee/get-flash-sale-product-schedules-from-ecommerce");

export const getTodaySaleProductSchedulesFromEcommerce = () => axiosClient.get("/tiki/get-today-sale-product-schedules-from-ecommerce");