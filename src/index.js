import { init } from './assets/initailizer';
import './style.scss';
import { menuPage } from './assets/menupage';
import { contactPage } from './assets/contactpage';
import { homePage } from './assets/homepage';



init();


const containerNav = document.querySelector('#contet')


containerNav.addEventListener('click', (e) => {
  const content = document.querySelector('#content')
  const first = content.firstElementChild
  
  if(e.target.id === 'menu'){
    first.remove()
    menuPage()
  }
  if(e.target.id === 'contact'){
    first.remove()
    contactPage()
  }
  if(e.target.id === 'home'){
    first.remove()
    homePage()
  }
})
