import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000", // Django backend URL
});

// Axios interceptor to attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`; // DRF TokenAuthentication
  }
  return config;
});

export default API;
