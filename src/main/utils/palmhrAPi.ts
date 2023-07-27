import axios from "axios";

const PalmHrAPI = axios.create({
  baseURL:'https://www.books.googleapis.com/books/v1',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    Accept: "application/json;charset=UTF-8",
    dataType: "json",
    "Content-Type": "json",
  },
});

export default PalmHrAPI;
