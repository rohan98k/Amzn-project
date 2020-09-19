import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amzn-rohan98k.cloudfunctions.net/api",
  //http://localhost:5001/amzn-rohan98k/us-central1/api
});

export default instance;
