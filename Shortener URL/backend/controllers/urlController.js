const Url = require("../models/url");

const shortenUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;

    const shortCode = Math.random()
      .toString(36)
      .substring(2, 8);

    const shortUrl = `http://localhost:5000/${shortCode}`;

    const url = await Url.create({
      longUrl,
      shortCode,
      shortUrl,
    });

    res.status(201).json(url);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getUrls = async (req, res) => {
  try {
    const urls = await Url.find();

    res.json(urls);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;

    await Url.findByIdAndDelete(id);

    res.json({
      message: "URL Deleted Successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { code } = req.params;

    const url = await Url.findOne({
      shortCode: code,
    });

    if (!url) {
      return res.status(404).json({
        message: "URL not found",
      });
    }

    // Analytics Tracking
    url.clicks += 1;

    url.lastVisited = new Date();

    url.visitHistory.push({
      visitedAt: new Date(),
    });

    await url.save();

    res.redirect(url.longUrl);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  shortenUrl,
  getUrls,
  deleteUrl,
  redirectUrl,
};