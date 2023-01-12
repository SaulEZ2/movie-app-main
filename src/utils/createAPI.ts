import axios from "axios";
import { API_BASE_URL } from "config"
import { REACT_APP_API_KEY } from "config"; 
//importamos la api key de config.js 

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-type': 'application/json'
  },
  params: {
    api_key: REACT_APP_API_KEY, // la exportamos y la almacenamos en la variable
  }
});