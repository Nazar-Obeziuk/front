import axios from "axios";

const instance = axios.create({
  baseURL: "https://prostopoo.com.ua/api/",
});

export default instance;
