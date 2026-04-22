import axios from "axios";
import NodeCache from "node-cache";
require("dotenv").config();

const cache = new NodeCache({ stdTTL: 23 * 60 * 60 });

export const getToken = async () => {
  let token = cache.get("tvdb_token");
  if (token) return token;

  try {
    const res = await axios.post(`${process.env.TVBD_API_URL}/login`, {
      apiKey: process.env.TVBD_API_KEY,
    });

    token = res.data.data.token;

    cache.set("tvdb_token", token);
    return token;
  } catch (error) {
    console.error("TVDB Login Error: ", error.response?.data || error.message);
    throw new Error("Failed to authenticate");
  }
};
