const toggle = document.querySelector('#toggle');
const holder = document.querySelector('.holder');
const header= document.querySelector('.header')

// Set default mode to dark
let mode = 'light';

// Listen for a click event on toggle switch
toggle.addEventListener('click', function () {
  // If mode is light, apply dark background
  if (mode === 'light') {
    mode = 'dark';
    holder.setAttribute('class', 'dark');
    
  }
  // If mode is dark, apply light background
  else {
    mode = 'light';
    holder.setAttribute('class', 'light');
  }
});
