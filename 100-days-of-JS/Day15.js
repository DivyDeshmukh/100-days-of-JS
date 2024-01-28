/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)

const p = document.querySelector('p');
const arr = p.textContent.split(' ');

p.innerHTML = arr.map ((val) => {
  if (val.length >= 8) {
    return `<span style="background-color: yellow;">${val}</span>`;
  }else {
    return val;
  }
}).join(' ');
*/

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)

const link = document.createElement('a');
link.setAttribute('href', 'https://forcemipsum.com/');
const textNode = document.createTextNode('Link');
link.appendChild(textNode);
document.querySelector('body').appendChild(link);
*/

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)

const p = document.querySelector('p');
const arr = p.textContent.split('.');
p.innerHTML = arr.map((val) => {
  return `<p>${val}</p>`;
}).join('');
*/

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
/*
const p = document.querySelector('p');
const length = p.textContent.split(' ').length;
const newheading = document.createElement('h3');
const textNode = document.createTextNode(`${length} words`);
newheading.appendChild(textNode);
document.body.insertBefore(newheading, p);          // insertBefore(elementToBeInserted, BeforeThisElement)
*/

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
/*
const p = document.querySelector('p');

const arr = p.textContent.split('').map((val) => {
  if(val === '?') {
    return `<span>🤔</span>`;
  }else if(val === '!'){
    return `<span>😲</span>`;
  }else{
    return val;
  }
});

p.innerHTML = arr.join('')
*/
