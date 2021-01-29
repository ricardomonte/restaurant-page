import sarma from './images/sarma.jpg';
import plieska from './images/plieska.jpg';
import ceva from './images/cevapi.jpg';
import meso from './images/mesano.jpg';
import pre from './images/prebranac.jpg';

function menuPage(){
    const container = document.querySelector('#content');
    const containerMenu = document.createElement("div");
    const menu = document.createElement("div");
    const title = document.createElement("h1");
    const image1 = document.createElement("IMG");
    const image2 = document.createElement("IMG");
    const image3 = document.createElement("IMG");
    const image4 = document.createElement("IMG");
    const image5 = document.createElement("IMG");
    const plieText = document.createElement("p");
    const cevaText = document.createElement("p");
    const sarmaText = document.createElement("p");
    const prebraText = document.createElement("p");
    const mesoText = document.createElement("p");
    image1.setAttribute('src', sarma)
    image2.setAttribute('src', plieska)
    image3.setAttribute('src', ceva)
    image4.setAttribute('src', meso)
    image5.setAttribute('src', pre)
    title.classList.add('tmenu')
    image1.classList.add('sarma')
    image2.classList.add('plieska')
    image3.classList.add('ceva')
    image4.classList.add('meso')
    image5.classList.add('pre')
    plieText.classList.add('pliet')
    cevaText.classList.add('cevat')
    sarmaText.classList.add('sarmat')
    prebraText.classList.add('prebrat')
    mesoText.classList.add('mesot')
    title.textContent = 'Our menu'
    plieText.textContent = 'Pljeskavica -3$'
    cevaText.textContent = 'Cevapi -4$'
    sarmaText.textContent = 'Sarma -6$'
    prebraText.textContent = 'Prebranac -2$'
    mesoText.textContent = 'Mesano -9$'
    menu.append(title)
    menu.append(image2)
    menu.append(image1)
    menu.append(image3)
    menu.append(image5)
    menu.append(image4)
    menu.append(plieText)
    menu.append(cevaText)
    menu.append(sarmaText)
    menu.append(prebraText)
    menu.append(mesoText)
    menu.classList.add('menu');
    containerMenu.classList.add('container-menu');
    containerMenu.id = 'mamamia'
    containerMenu.append(menu);
    container.append(containerMenu);
}

export { menuPage };