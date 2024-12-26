const express = require('express');
const bodyParser = require('body-parser');
const alcaldiasRoutes = require('./routes/alcaldias');
const stopsRoutes = require('./routes/stops');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use('/api', alcaldiasRoutes);
app.use('/api', stopsRoutes);

app.listen(PORT, () => {
  console.log(`REST API running on http://localhost:${PORT}`);
});
