const axios = require("axios");

const fetchNews = async (query = "") => {
  try {
    const response = await axios.get(
      "https://content.guardianapis.com/search",
      {
        params: {
          q: query,
          "api-key": process.env.GUARDIAN_API_KEY,
          "show-fields": "thumbnail,trailText",
          "page-size": 20,
          "order-by": "newest",
        },
      }
    );

    return response.data.response.results;
  } catch (error) {
    console.error("Guardian API Error");
    console.error(error.response?.data || error.message);
    throw error;
  }
};

module.exports = fetchNews;

