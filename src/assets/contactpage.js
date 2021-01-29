import createSVGp from './createSvgPhone';

const contactPage = () => {
  let phone = '';
  const container = document.querySelector('#content');
  const contact = document.createElement('div');
  const title = document.createElement('h1');
  const containerPhone = document.createElement('div');
  const numberContact = document.createElement('div');
  const containerElements = document.createElement('div');
  phone = createSVGp();
  numberContact.textContent = '+381069789254';
  title.textContent = 'Contact Us';
  phone.classList.add('phone');
  containerElements.classList.add('contact');
  numberContact.classList.add('number-contact');
  title.classList.add('title-contact');
  containerPhone.classList.add('container-phone');
  contact.classList.add('container-contact');
  contact.id = 'mamatuya';
  containerPhone.append(phone);
  containerElements.append(title);
  containerElements.append(containerPhone);
  containerElements.append(numberContact);
  contact.append(containerElements);
  container.append(contact);
};

export { contactPage as default };