import axios from "axios";
import { getToken } from "../utils/tokenManager";
require("dotenv").config();

const createClient = async () => {
  const token = await getToken();

  return axios.create({
    baseURL: process.env.TVBD_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const searchSeries = async (query) => {
  const client = await createClient();
  const res = await client.get(`/search`, {
    params: { query, type: "series" },
  });
  return res.data;
};

export const getSeriesById = async (id) => {
  const client = await createClient();
  const res = await client.get(`/series/${id}`);
  return res.data;
};
