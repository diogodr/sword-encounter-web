import axios from "axios";
import https from "https";

const api = axios.create({
  headers: {
    "Access-Control-Allow-Headers":
      "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  httpAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  baseURL: "https://sword-encounter-service.herokuapp.com/api",
});

export default api;
