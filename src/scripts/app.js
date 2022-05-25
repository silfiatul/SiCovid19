const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const router = require('./routes/routes');
const CONFIG = require('./global/config');

const app = express();
const port = CONFIG.PORT;
const hostname = CONFIG.HOSTNAME;

// * Mendefinisikan view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(expressLayout);

// * Inisialisasi router
app.use('/', router);

app.listen(port, hostname, () => {
  console.log(`App running at http://localhost:${port}`);
});
