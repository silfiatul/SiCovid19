const express = require('express');
const {
  homePage,
  vaksinasiPage,
  discussionForumPage,
  loginPage,
  signinPage,
} = require('../controller/handlers');

const router = express.Router();

// * Home Page
router.get('/', homePage);
// * Vaksinasi Page
router.get('/vaksinasi', vaksinasiPage);
// * Forum Page
router.get('/forum', discussionForumPage);
// * Login Page
router.get('/login', loginPage);
// * SignIn Page
router.get('/signin', signinPage);

module.exports = router;
