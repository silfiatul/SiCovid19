const express = require('express');
const router = require('../routes/routes');
const CONFIG = require('../global/config');

const app = express();
const port = CONFIG.PORT;
const hostname = CONFIG.HOSTNAME;

// * Inisialisasi router
const routes = router;
app.use('/', routes);

app.listen(port, hostname, () => {
  console.log(`App running at http://localhost:${port}`);
});
