import CreateNavbar from './navbar';
import homePage from './homepage';

function init() {
  const navbar = new CreateNavbar();
  navbar.creation();


  homePage();
}

export { init as default };