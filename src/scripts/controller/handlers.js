const Home = require('../views/pages/home');
const Forum = require('../views/pages/forum');
const Login = require('../views/pages/login');
const Signin = require('../views/pages/signin');

const Handler = {
  homePage: (req, res) => {
    res.send(Home.render());
  },
  forumPage: (req, res) => {
    res.send(Forum.render());
  },
  loginPage: (req, res) => {
    res.send(Login.render());
  },
  signinPage: (req, res) => {
    res.send(Signin.render());
  },
};

module.exports = Handler;
