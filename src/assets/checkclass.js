class Checking{
  whichClass(element){
    element.addEventListener('click', (e) => {
      const h = document.querySelector("#mamamia")
    
      if (h.classList.contains('prueba')){
        h.classList.add('prueba2')
        h.classList.remove('prueba')
      }else{
        h.classList.add('prueba')
        h.classList.remove('prueba2')
      }
    });
  }
}


export { Checking }