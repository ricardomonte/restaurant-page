function menu1(){
    const container = document.querySelector('#content');
    const menu = document.createElement("div")

    menu.classList.add('prueba');
    menu.id = 'mamamia'
    container.append(menu);
}

export { menu1 };