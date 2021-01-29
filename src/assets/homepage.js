function homePage() {
  const container = document.querySelector('#content');
  const home = document.createElement('div');
  const containerText = document.createElement('div');
  const text = document.createElement('h1');
  const blockQoute = document.createElement('blockquote');
  const quote = document.createElement('p');
  text.textContent = 'Traditional Balkan food, in your table';
  quote.textContent = '"The best restaurant, excellent attention and service and ofcourse excellent food"';
  containerText.classList.add('container-text');
  blockQoute.append(quote);
  containerText.append(text);
  containerText.append(blockQoute);
  home.classList.add('home');
  home.append(containerText);
  container.append(home);
}

export { homePage as default };