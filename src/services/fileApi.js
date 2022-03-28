import axios from "axios";

const fileApi = axios.create({
  headers: {
    Authorization: "Client-ID bceaf7a66e6b3a0",
  },
  baseURL: "https://api.imgur.com",
});

export default fileApi;
