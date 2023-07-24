import axios from "axios";

const PalmHrAPI = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  timeout: 3000,
  headers: {
    Accept: "application/json;charset=UTF-8",
    dataType: "json",
    "Content-Type": "json",
  },
});

export default PalmHrAPI;
