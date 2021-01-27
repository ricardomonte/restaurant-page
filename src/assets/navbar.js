class CreateNavbar {
  creation(){
    const content = document.body
    const header = document.createElement('header');
    const container = document.createElement('div');
    const logo = document.createElement('h2');
    const ul = document.createElement('ul');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    logo.textContent = 'Balkan Pasion'; 
    menu.textContent = 'Our Menu';
    contact.textContent = "Contact Us";
    menu.id = 'menu';
    contact.id = 'contact';
    ul.append(menu);
    ul.append(contact);
    container.append(logo);
    container.append(ul);
    container.classList.add('trying');
    header.append(container);
    content.prepend(header);
  }  
}
  
export { CreateNavbar };