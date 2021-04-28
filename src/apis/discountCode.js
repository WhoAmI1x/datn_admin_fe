import axiosClient from "./axiosClient";

export const getDiscountCodeByCategory = (categoryId) => axiosClient.get("/discount-code/get-discount-codes-by-category", { params: { categoryId } });

export const getDiscountCodesByCategoryFromEcommerce = (ecommerce, categoryId) => axiosClient.get(`/${ecommerce}/get-discount-codes-by-category-from-ecommerce`, { params: { categoryId } });

export const deleteDiscountCodeById = discountCodeId => axiosClient.delete("/discount-code/delete-discount-code-by-id", { params: { discountCodeId } });