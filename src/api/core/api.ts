import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://asia-northeast3-heropy-api.cloudfunctions.net/api",
  headers: {
    "Content-type": "application/json",
    apiKey: import.meta.env.VITE_API_KEY,
    username: import.meta.env.VITE_API_USERNAME,
    masterKey: true,
  },
};
// const { accessToken } = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root") as string).auth,
// );
export const client = axios.create(axiosConfig);

// client.interceptors.request.use((config) => {
//   console.log(accessToken);
//   if (!config.headers) return config;

//   if (accessToken !== null) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }

//   return config;
// });
