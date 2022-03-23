import axios from "axios";
import https from "https";

const fileApi = axios.create({
  headers: {
    // "Access-Control-Allow-Headers":
    //   "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // "Content-Type": "image/png",
    Authorization: "Client-ID bceaf7a66e6b3a0",
  },
  // httpAgent: new https.Agent({
  //   rejectUnauthorized: false,
  // }),
  baseURL: "https://api.imgur.com",
});

export default fileApi;
