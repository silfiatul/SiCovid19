const express = require('express');
const router = require('./src/scripts/routes/routes');
const { HOSTNAME, PORT } = require('./src/scripts/global/config');

const app = express();

// * Inisialisasi router
app.use('/', router);

app.listen(PORT, HOSTNAME, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
