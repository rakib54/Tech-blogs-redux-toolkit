import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://blogs-data-cs4r.onrender.com'
});

export default axiosInstance