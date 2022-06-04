import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import '../css/responsive.css';
import '../css/custom.css';
import './views/templates/template';
import './data/sourceAPI';
import './utils/ajax';
import App from './views/App';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
