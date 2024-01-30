/*
html:-
<h1>Heading</h1>
<p>Hey, you're not permitted in there. It's restricted. You'll be deactivated for sure.. Don't call me a mindless philosopher, you overweight glob of grease! Now come out before somebody sees you. Secret mission? What plans? What are you talking about? I'm not getting in there! I'm going to regret this. There goes another one. Hold your fire. There are no life forms. It must have been short-circuited. That's funny, the damage doesn't look as bad from out here. Are you sure this things safe?

Close up formation. You'd better let her loose. Almost there! I can't hold them! It's away! It's a hit! Negative. Negative! It didn't go in. It just impacted on the surface. Red Leader, we're right above you. Turn to point... oh-five, we'll cover for you. Stay there... I just lost my starboard engine. Get set to make your attack run.

The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship. Were on a diplomatic mission. If this is a consular ship...were is the Ambassador? Commander, tear this ship apart until you've found those plans and bring me the Ambassador. I want her alive! There she is! Set for stun! She'll be all right. Inform Lord Vader we have a prisoner.

What a piece of junk. She'll make point five beyond the speed of light. She may not look like much, but she's got it where it counts, kid. I've added some special modifications myself. We're a little rushed, so if you'll hurry aboard we'll get out of here. Hello, sir. Which way? All right, men. Load your weapons! Stop that ship! Blast 'em! Chewie, get us out of here! Oh, my. I'd forgotten how much I hate space travel.

Run, Luke! Run!</p>
*/

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
