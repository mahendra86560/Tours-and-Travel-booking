import axios from "axios";

const API = axios.create({
  baseURL: "https://tours-and-travel-booking.onrender.com/api",
});

export default API;