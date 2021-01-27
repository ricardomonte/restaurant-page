function homePage(){
  const container = document.querySelector('#content');
  const contact = document.createElement("div")

  contact.classList.add('prueba3');
  container.append(contact);
}

export { homePage };