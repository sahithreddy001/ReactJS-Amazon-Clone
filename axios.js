import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-d719e.cloudfunctions.net/api",
});

export default instance;
// http://localhost:5001/clone-d719e/us-central1/api

// https://us-central1-clone-d719e.cloudfunctions.net/api
