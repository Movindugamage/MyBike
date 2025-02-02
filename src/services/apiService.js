import axios from "axios";
import { useNavigate } from "react-router-dom";

export const apiService = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

apiService.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 403) {
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);
