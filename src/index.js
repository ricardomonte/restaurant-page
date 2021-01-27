import { CreateNavbar } from './assets/navbar';
import './style.scss';
import { menuPage } from './assets/menu';
import { Checking } from './assets/checkclass';


const navbar = new CreateNavbar;
navbar.creation();

const menu = document.querySelector('#menu');
menuPage()
const classMenu = new Checking
classMenu.whichClass(menu)


// a.addEventListener('click', (e) => {
//   const h = document.querySelector("#mamamia")

//   if (h.classList.contains('prueba')){
//     h.classList.add('prueba2')
//     h.classList.remove('prueba')
//   }else{
//     h.classList.add('prueba')
//     h.classList.remove('prueba2')
//   }
// });

