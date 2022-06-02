const express = require('express');
const { loginPage, signinPage } = require('../controller/handlers');

const router = express.Router();

// * Login Page
router.post('/login', loginPage);
// * SignIn Page
router.post('/signin', signinPage);

module.exports = router;
