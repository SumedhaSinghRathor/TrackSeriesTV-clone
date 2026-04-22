import express from "express";
import { getSeriesById, searchSeries } from "../services/tvdb.service";

const router = express.Router();

// GET /api/tvdb/search?query=<series_name>
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const data = await searchSeries(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/tvdb/series/:id
router.get("/series/:id", async (req, res) => {
  try {
    const data = await getSeriesById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
