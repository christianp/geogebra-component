const code = document.body.querySelector('script').textContent;

const display = document.createElement('pre');
display.textContent = code;
document.body.appendChild(display);
