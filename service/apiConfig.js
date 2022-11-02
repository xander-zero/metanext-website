import axios from "axios";

const API = axios.create({ baseURL: "https://behsod.com/api" });

export const requestContact = (data) =>
  API.post("/Landing/Contact-us/Store", data);
