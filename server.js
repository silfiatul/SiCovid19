const express = require('express');
const router = require('./src/scripts/routes/routes');
const { HOSTNAME, PORT } = require('./src/scripts/global/config');
const path = require('path');
const expressLayout = require('express-ejs-layouts');

const app = express();

/* * Use view Engine */
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('views', path.join(__dirname, './src/scripts/views/pages'));

// * Static File
app.use(express.static('public'));
app.use('/', [
  express.static(path.join(__dirname, './node_modules/jquery/dist')),
  express.static(path.join(__dirname, './node_modules/ejs')),
  express.static(path.join(__dirname, './src/public')),
]);

// * Inisialisasi router
app.use('/', router);

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
