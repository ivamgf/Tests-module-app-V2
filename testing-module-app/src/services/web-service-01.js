import axios from "axios";

const api = axios.create({
    baseURL: "https://my-json-server.typicode.com/ivamgf/demo"
});

export default api;