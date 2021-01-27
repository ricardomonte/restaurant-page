function contactPage(){
  const container = document.querySelector('#content');
  const contact = document.createElement("div")

  contact.classList.add('prueba2');
  contact.id = 'mamatuya'
  container.append(contact);
}

export { contactPage };