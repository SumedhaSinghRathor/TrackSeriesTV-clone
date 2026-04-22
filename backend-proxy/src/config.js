require("dotenv").config();

export const config = {
  port: process.env.PORT || 5000,
  apiKey: process.env.TVDB_API_KEY,
  apiUrl: process.env.TVDB_API_URL,
};
