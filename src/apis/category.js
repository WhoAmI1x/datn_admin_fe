import axiosClient from "./axiosClient";

export const getCategories = (ecommerce, type, keyword) => axiosClient.get("/category/get-categories", { params: { ecommerce, type, keyword } });

export const deleteCategory = categoryId => axiosClient.delete("/category/delete-category", { params: { categoryId } });

export const updateCategory = (categoryId, data) => axiosClient.patch("/category/update-category", data, { headers: { "Content-Type": "multipart/form-data" }, params: { categoryId } });

export const createCategory = (data) => axiosClient.post("/category/create-category", data);