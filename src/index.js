import { CreateNavbar } from './assets/navbar';
import './style.scss';
import { menuPage } from './assets/menupage';
import { contactPage } from './assets/contactpage';
import { homePage } from './assets/homepage';



const navbar = new CreateNavbar;
navbar.creation();


homePage()


const containerNav = document.querySelector('#contet')
console.log(containerNav)

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

