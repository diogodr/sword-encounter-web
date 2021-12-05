import axios from "axios";

const api = axios.create({
  headers: {
    "Access-Control-Allow-Headers":
      "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  baseURL: "http://diogoddr-001-site1.ctempurl.com/api",
});

export default api;
