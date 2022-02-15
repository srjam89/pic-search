import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID d5O0zsa2A8Kg-dYNMx80IUxX8ul3nq7byZ-C_ZxdsHM",
  },
});
