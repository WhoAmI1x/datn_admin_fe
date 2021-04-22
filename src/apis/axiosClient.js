import axios from "axios";
import queryString from "query-string";
import constants from "../utils/constants";
import { getAccessToken } from "../utils/common";

const axiosClient = axios.create({
    baseURL: constants.BASE_API_URL,
    headers: {
        "content-type": "application/json"
    },
    paramsSerializer: params => queryString.stringify(params),
    timeout: 20000
});

axiosClient.interceptors.request.use(
    async config => {
        config.headers = { ...config.headers, "Authorization": `Bearer ${getAccessToken()}` };
        return config;
    },
    err => Promise.reject(err)
);

axiosClient.interceptors.response.use(
    response => {
        if (response && response.data) {
            return { ...response.data, status: response.status };
        }
        return response;
    },
    err => Promise.reject(err)
);

export default axiosClient;