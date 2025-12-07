import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000", // backend ka URL
});

// Add token to every request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`; // ya `Bearer ${token}` backend ke hisaab se
  }
  return config;
});

export default API;
