function createSVG(element) {
  const xmlns = "http://www.w3.org/2000/svg";
  const boxWidth = 153;
  const boxHeight = 55;
  const coords = "M0.5 54L25.6165 16.1484C32.1015 6.37517 43.0509 0.5 54.7801 0.5H100.31C112.536 0.5 123.875 6.87951 130.223 17.3285L152.5 54";

  const svgElem = document.createElementNS(xmlns, "svg");
  svgElem.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
  svgElem.setAttributeNS(null, "width", boxWidth);
  svgElem.setAttributeNS(null, "height", boxHeight);

  const text = document.createElementNS(xmlns, "text");
  text.textContent = element

  if(element == "Menu"){
    text.classList.add('textmenu');
    text.id = 'menu'
  } else{
    text.classList.add('textcontact')
    text.id = 'contact'
  }

  const path = document.createElementNS(xmlns, "path");
  path.setAttributeNS(null, 'd', coords);

  svgElem.append(path)
  svgElem.append(text)
  return svgElem
}
export { createSVG }