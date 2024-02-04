/*
html:-
<div class="container">
            <header>
                <div class="logo">
                    <h1>TEST PAGE</h1>
                </div>
                <div class="menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </header>
            <section id="hero">
                <p>Para 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque exercitationem ea necessitatibus fugit, cumque eveniet facere ratione repudiandae laudantium deserunt, maiores obcaecati voluptate ut autem deleniti. Repellat, sequi optio.</p>
                <p>Para 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in dignissimos ipsum sapiente deleniti doloribus temporibus consequatur doloremque a ipsa sit dolores, ex animi nostrum, dolorum, porro odit quaerat soluta!</p>
            </section>
        </div>
*/

/*
css:-
        body { 
            margin:0; 
            padding: 0;
            font-family: 'Heebo', sans-serif;
        }
        .container { 
            /* width: 1080px;
            margin: 10px auto; 
            // /* padding: 20px; 
        }

        header {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            box-shadow: 0px -1px 32px 8px rgba(white, 0.4);
            position: relative;
            overflow:visible;
        }
        .logo {
            flex: 2;
        }
        .menu {
            flex: 1;
            display: flex;
            align-items: center; 
        }
        ul {
            list-style-type: none;
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
          gap: 10px;
        }
        #hero {
            background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1568216651129-ed65d1d118dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80');
            background-size: cover;
            background-position: top;
            height: 800px;
            display: flex;
            justify-content: center;
        }
        #hero p {
            margin: 100px;
            font-size: 24px;
            color: white;
        }

        h1, ul { margin: 0; }

.hover-effect {
  color: orange;
  background-color: aqua
}
*/

/*
Exercise 1
--------------
Move the contents of the two paragraphs into one single <p> tag.  Ensure there are no empty <p> tags left on the page.
*/

const p = document.querySelectorAll('#hero p');
p[1].insertAdjacentHTML('afterBegin', p[0].textContent);
p[0].remove();

/*
Exercise 2
--------------
Reduce the font-size of the paragraph text to be half the size of the menu text.
*/
const element = document.querySelector('.menu ul li'); // Replace 'yourElementId' with the actual ID of your element
const computedStyle = window.getComputedStyle(element);
const fontSize = computedStyle.getPropertyValue('font-size');

// Remove 'px' and convert to a number
const fontSizeNumeric = parseFloat(fontSize);
document.querySelector('#hero p').style.fontSize = `${fontSizeNumeric}px`
/*
Exercise 3
--------------
Move the ‘Services’ menu item to be before the ‘About’ menu item (after Home).
*/
// const home = document.querySelector('.menu ul li:nth-child(1)');
// home.style.order = -2
// const service = document.querySelector('.menu ul li:nth-child(3)');
// service.style.order = -1
const home = document.querySelector('.menu ul li:nth-child(1)');
const service = document.querySelector('.menu ul li:nth-child(3)');
console.log(service)
home.insertAdjacentElement('afterEnd', service)
// home.insertAdjacentElement('afterEnd', service.cloneNode(true)) // cloneNode generates a copy of the element and the element is moved rather than the original element

/*
  Exercise 04
  -----------
  Create the following new entries in the menu: FAQs, Pricing
*/
const ul = document.querySelector('.menu ul')
const li1 = document.createElement('li')
li1.innerText =  'FAQs'
ul.appendChild(li1);
const li2 = document.createElement('li2')
li2.innerText =  'Pricing'
ul.appendChild(li2);
/*
Exercise 5
--------------
Add a hover effect to the menu items so when the user hovers over them the background and font-size change.  (Must be done with JavaScript!)
*/
const menu = document.querySelector('.menu')
menu.style.cursor = 'pointer';
const li = document.querySelectorAll ('.menu ul li');
li.forEach((val) => {
  val.addEventListener('mouseover', () => {
    val.classList.add('hover-effect');
  })
  
  val.addEventListener('mouseout', () => {
    val.classList.remove('hover-effect');
  })
})

// create hover-effect function and normal-effect function inside js only rather than declaring properties inside css.