const express = require('express');
const router = express.Router();
const fetchGraphQL = require('../graphqlClient');

router.get('/stops', async (req, res) => {
  const { alcaldia } = req.query;

  if (!alcaldia) {
    return res.status(400).json({ error: 'alcaldia query parameter is required' });
  }

  const query = `
    query ($alcaldia: String!) {
      stops(alcaldia: $alcaldia) {
        stop_id
        stop_name
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query, { alcaldia });
    res.json(data.stops);
  } catch (error) {
    console.error('Error fetching stops:', error.message);
    res.status(500).json({ error: 'Failed to fetch stops' });
  }
});

module.exports = router;
