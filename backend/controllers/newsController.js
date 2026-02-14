const fetchNews = require("../services/guardianService");

const getNews = async (req, res) => {
  try {
    const { q } = req.query;

    const news = await fetchNews(q);

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch news" });
  }
};

module.exports = { getNews };
