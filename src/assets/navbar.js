import { createSVG } from './createSvgTabs'

class CreateNavbar {
  creation(){
    const menuText = "Menu";
    const contactText = "Contact"
    let svg1 = '';
    let svg2 = '';
    const content = document.body
    const header = document.createElement('header');
    const container = document.createElement('div');
    const logo = document.createElement('h2');
    const ul = document.createElement('ul');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    logo.textContent = 'Balkan Pasion'; 
    svg1 = createSVG(menuText)
    svg2 = createSVG(contactText)
    logo.id = 'home'
    container.id = 'contet'
    svg1.classList.add('tab');
    svg2.classList.add('tab2')
    menu.append(svg1)
    contact.append(svg2)
    ul.append(menu);
    ul.append(contact);
    container.append(logo);
    container.append(ul);
    logo.classList.add('logo')
    container.classList.add('nav');
    header.append(container);
    content.prepend(header);
  }  
}
  
export { CreateNavbar };