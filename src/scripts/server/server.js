const express = require('express');
const router = require('../routes/server-routes');
const { HOSTNAME, PORT } = require('../global/config');

const app = express();

// * Inisialisasi router
app.use('/', router);

app.listen(PORT, HOSTNAME, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
