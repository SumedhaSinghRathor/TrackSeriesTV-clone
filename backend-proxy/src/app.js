import express from "express";
import cors from "cors";
import tvdbRoutes from "./routes/tvdb.routes.js";
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tvdb", tvdbRoutes);

app.get("/", (req, res) => {
  res.send("TVDB Proxy running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
