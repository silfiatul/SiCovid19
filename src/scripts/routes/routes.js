import Home from '../views/pages/home';
import Forum from '../views/pages/forum';
import Login from '../views/pages/login';
import Signin from '../views/pages/signin';
import Vaksinasi from '../views/pages/vaksinasi';

const routes = {
  '/': Home,
  '/home': Home,
  '/forum': Forum,
  '/vaksinasi': Vaksinasi,
  '/login': Login,
  '/signin': Signin,
};

export default routes;
