import axios from "axios";

export const apiService = axios.create({
    baseURL: "",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})