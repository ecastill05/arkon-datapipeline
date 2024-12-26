const express = require('express');
const router = express.Router();
const fetchGraphQL = require('../graphqlClient');

router.get('/alcaldias', async (req, res) => {
  const query = `
    query {
      alcaldias {
        alcaldia_id
        alcaldia_name
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);
    res.json(data.alcaldias);
  } catch (error) {
    console.error('Error fetching alcaldias:', error.message);
    res.status(500).json({ error: 'Failed to fetch alcaldias' });
  }
});

module.exports = router;