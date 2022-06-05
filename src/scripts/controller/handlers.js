const Handler = {
  homePage: async (req, res) => {
    res.render('home', {
      layout: '../layout/main-layout',
    });
  },
  forumPage: (req, res) => {
    res.render('forum', {
      layout: '../layout/main-layout',
    });
  },
  loginPage: (req, res) => {
    res.render('login', {
      layout: '../layout/main-layout',
    });
  },
  signinPage: (req, res) => {
    res.render('signin', {
      layout: '../layout/main-layout',
    });
  },
};

module.exports = Handler;
