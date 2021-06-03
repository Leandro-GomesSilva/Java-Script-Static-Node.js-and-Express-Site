
'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});


/** 
 * Extra-code for exceeds
 * Dinamically creating Toogle Button to change between original and alternative designs
 */

// Selecting the relevant DOM elements
const portfolioIntro = document.querySelector('.portfolio-intro');
const h1AtPortfolioIntro = portfolioIntro.querySelector('h1');
const pAtPortfolioIntro = portfolioIntro.querySelector('p');

// Creating new 'div' element
const divHeader = document.createElement('div');
divHeader.className = 'divHeader-js';

// Creating button
const toogleButton = document.createElement('button');
toogleButton.className = 'toogle-button';
toogleButton.textContent = "Switch to original design";
divHeader.appendChild(toogleButton);

// Appending new elements
portfolioIntro.insertBefore(divHeader, pAtPortfolioIntro);
divHeader.appendChild(h1AtPortfolioIntro);
divHeader.appendChild(toogleButton);

// Adding event listener
toogleButton.addEventListener('click', (e) => toogleCSS(e));

var toogle = 1;   // This variable controls if the alternative design is active of not (0 = "original design", 1 = "alternative design")


/***
 * function toogleCSS
 * This function adds functionality to the toogle buttom. According the value of the variable 'toogle', it will add or remove the link to the CSS file corresponding the alternative design and change the text of the toogle button.
 *
 * @param {object} e - The event object
 * @returns 
 * 
 */
function toogleCSS (e) {
  
  if (e.target.tagName === 'BUTTON') {

    if (toogle === 0) {
      const head = document.querySelector('head');
      const alternativeCSS = document.createElement('link');
      alternativeCSS.id = 'alternativeCSS';
      alternativeCSS.rel = 'stylesheet';
      alternativeCSS.href = '/static/css/alternativeStyle.css';
      head.appendChild(alternativeCSS);
      toogleButton.textContent = "Switch to original design";
      toogle = 1;

    } else if (toogle === 1) {
      const head = document.querySelector('head');
      const alternativeCSS = document.getElementById('alternativeCSS');
      head.removeChild(alternativeCSS);
      toogleButton.textContent = "Switch to alternative design";
      toogle = 0;
    }
  }
  return;
}
