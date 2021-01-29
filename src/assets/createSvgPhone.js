function createSVG() {
  const xmlns = 'http://www.w3.org/2000/svg';
  const boxWidth = 366;
  const boxHeight = 397;
  const coords = 'M243.345 381.038L8.43277 121.374C2.76216 115.106 0.108472 106.676 1.16617 98.2896L10.3 25.8711C12.1287 11.3728 24.459 0.5 39.0721 0.5H71.8946C79.9348 0.5 87.6142 3.83801 93.0991 9.71698L156.927 78.131C163.807 85.5053 166.361 95.9246 163.673 105.645L158.726 123.531C156.524 131.489 149.282 137 141.025 137C125.158 137 116.758 155.764 127.328 167.598L208.383 258.356C218.673 269.877 237.271 267.723 244.656 254.156C248.566 246.972 256.091 242.5 264.271 242.5H293.289C303.363 242.5 312.715 247.728 317.992 256.309L360.407 325.279C364.613 332.118 365.795 340.395 363.672 348.139L356.386 374.709C352.686 388.203 339.879 397.131 325.938 395.934L262.369 390.476C255.062 389.849 248.265 386.476 243.345 381.038Z';

  const svgElem = document.createElementNS(xmlns, 'svg');
  svgElem.setAttributeNS(null, 'viewBox', `0 0 ${boxWidth} ${boxHeight}`);
  svgElem.setAttributeNS(null, 'width', boxWidth);
  svgElem.setAttributeNS(null, 'height', boxHeight);

  const path = document.createElementNS(xmlns, 'path');
  path.setAttributeNS(null, 'd', coords);

  svgElem.append(path);
  return svgElem;
}
export { createSVG as default };