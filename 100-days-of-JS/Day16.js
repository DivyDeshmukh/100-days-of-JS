/*
html:- 
<div class="container mt-2">
  <h1>Registration Form</h1>
  <form id="registrationForm">
    <div class="form-group row">
      <div class="col">
        <input id="username" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <div class="col">
        <input id="password" type="password" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <div class="col">
        <input id="confirmPassword" type="password" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col">
          <button class="btn btn-primary btn-block" disabled>
            Register
        </button>
      </div>
    </div>
  </form>
</div>
*/

/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/qQy5K-pE8Fo */
/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

// const input = document.querySelectorAll ('.col');
// input.forEach((val) => {
//  let label = document.createElement('label');
//  const textNode = document.createTextNode (`${val.querySelector('input').id}:`);
//   label.setAttribute('for', `${val.querySelector('input').id}`);
//   label.appendChild(textNode);
//   val.insertBefore(label, val.querySelector('input'))
// }); 


// another method
document.getElementById('username')
.insertAdjacentHTML('beforeBegin', '<label for="username">Username:</label>');
 
document.getElementById('password')
.insertAdjacentHTML('beforeBegin', '<label for="password">Password:</label>');

document.getElementById('confirmPassword')
.insertAdjacentHTML('beforeBegin', '<label for="confirmPassword">Confirm Password:</label>');


/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/

document.querySelectorAll('input')
  .forEach((val) =>
  val.setAttribute('required', '')) 

// const checkInput = (event) => {
//   const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'));
//   if(event.target.value === '' && !errorElement.length) {
//     event.target.insertAdjacentHTML('afterEnd', `<span style='color: red;'>Required</span>`);
//   }
  
//   if(errorElement && event.target.value !== '') {
//     errorElement.forEach(elem => elem.remove());
//   }
// };

// document.getElementByID('username')
//  .addEventListener('blur', checkInput);

// document.getElementByID('password')
//  .addEventListener('blur', checkInput);

// document.getElementByID('confirmPassword')
//  .addEventListener('blur', checkInput);
/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/
// document.querySelector('.col button').addEventListener('click', (e)=> {
//   if(!(document.querySelector('#password').value === document.querySelector('#confirmPassword').value)) {
//     e.preventDefault();
//     document.querySelector('#password').insertAdjacentHTML('afterEnd', '<span style="color: red;">Incorrect Password</span>'); 
//      document.querySelector('#confirmPassword').insertAdjacentHTML('afterEnd', '<span style="color: red;">Incorrect Password</span>'); 
// }
// })


/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

 document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('#registrationForm').addEventListener('input', function() {
          if ((document.querySelector('#password').value === document.querySelector('#confirmPassword').value) && (document.querySelector('#username').value.length !== 0)) {
            document.querySelector('.col button').removeAttribute('disabled');
          } else {
            document.querySelector('.col button').setAttribute('disabled', 'disabled');
          }
        });
      });
    
// const btn = document.querySelector('button');
// btn.setAttribute('disabled', 'disabled');
// document.getElementById('registrationForm')
//    .addEventListener('input', (event) => {
//   const formIsFilled = Array.from(document.querySelectorAll('input')).every(input => input.value);
  
//   if (formIsFilled) {
//     btn.removeAttribute('disabled')
//   }else {
//     btn.setAttribute('disabled', 'disabled');
//   }
// })
/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/

const form = document.getElementById('registrationForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const alert = document.createElement('div');
  alert.style.backgroundColor = 'aqua'
  alert.style.color = '#fff';
  alert.style.padding = '10px'
  alert.innerText = 'User registered Successfully';
  form.prepend(alert);
})




