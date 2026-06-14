const express = require("express");
const router = express.Router();

const {
  shortenUrl,
  getUrls,
  deleteUrl,
} = require("../controllers/urlController");

router.post("/shorten", shortenUrl);

router.get("/all", getUrls);

router.delete("/:id", deleteUrl);

module.exports = router;