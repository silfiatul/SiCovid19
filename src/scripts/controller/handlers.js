const Handler = {
  homePage: (req, res) => {
    res.render('home', {
      title: 'SiCovid19 | Home',
      layout: 'layouts/AppLayout',
    });
  },
  vaksinasiPage: (req, res) => {
    res.render('vaksinasi', {
      title: 'SiCovid19 | Vaksinasi',
      layout: 'layouts/AppLayout',
    });
  },
  discussionForumPage: (req, res) => {
    res.render('forum', {
      title: 'SiCovid19 | Forum',
      layout: 'layouts/AppLayout',
    });
  },
  loginPage: (req, res) => {
    res.render('login', {
      title: 'SiCovid19 | Login',
      layout: 'layouts/AppLayout',
    });
  },
  signinPage: (req, res) => {
    res.render('signin', {
      title: 'SiCovid19 | SignIn',
      layout: 'layouts/AppLayout',
    });
  },
};

module.exports = Handler;
