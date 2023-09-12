// 'use strict';

// using a config for 'Prettier - Code formatter' Extenstion

/* 
{
  "singleQuote": true,
  "arrowParens": "avoid"
}
*/

// you can use your own --> https://prettier.io/docs/en/options

let theEntry = document.querySelector('.guess');
let theResult = document.querySelector('.message');
const BGCOLOR = document.querySelector('body').style;
const scoreOnSite = document.querySelector('.score');
const checker = document.querySelector('.check');
const bgColorOfInfo = document.querySelector('.between');
const styleOfTheMid = document.querySelector('.number');

let theRealNumber = Math.trunc(Math.random() * 20);

const CHECK = checker.addEventListener('click', function () {
  let theEntryValue = theEntry.value;

  if (!theEntryValue) {
    theResult.textContent = 'Please, enter a number :(';
  } else if (scoreOnSite.textContent == 0) {
    theResult.textContent = 'Game Over🎯';
  } else if (theEntryValue > 20 || theEntryValue < 0) {
    theResult.textContent = 'Enter a VALID number';
    bgColorOfInfo.style['background-color'] = 'red';
  } else if (scoreOnSite.textContent == 0) {
    theResult.textContent = 'Game Over!';
  } else {
    if (theEntryValue == theRealNumber) {
      BGCOLOR.backgroundColor = 'green';
      theResult.textContent = 'Right, Homie!👍';
      styleOfTheMid.textContent = theRealNumber;
      styleOfTheMid.style['width'] = '25rem';
      styleOfTheMid.style['border'] = '2px solid grey';
    } else if (theEntryValue > theRealNumber) {
      theResult.textContent = 'Too High↗️';
      scoreOnSite.textContent--;
    } else if (theEntryValue < theRealNumber) {
      theResult.textContent = 'Tow Low↘️';
      scoreOnSite.textContent--;
    }
  }
});

const backToNormal = document
  .querySelector('.again')
  .addEventListener('click', function () {
    location.reload();
  });
