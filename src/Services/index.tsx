import axios from "axios";

export const api = axios.create({
  baseURL: "https://nextfilms-api-production.up.railway.app/",
});
