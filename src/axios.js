import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/amzn-rohan98k/us-central1/api",
});

export default instance;