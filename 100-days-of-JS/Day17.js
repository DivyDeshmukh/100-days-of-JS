/*
html:-
<div class="container">
  <div class="card-deck text-center">
        <div id="pro-plan" class="card mb-4 shadow-sm">
      <div class="card-header">
        <h3 class="my-0 font-weight-normal">Pro</h3>
      </div>
      <div class="card-body">
        <h4 class="card-title pricing-card-title">$<span class="pricing">30 / month</span></h4>
        <ul class="list-unstyled mt-3 mb-4">
          <li>100 users included</li>
          <li><span class="storage-amount">20</span> GB of storage</li>
          <li>Priority email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Get Started</button>
      </div>
    </div> 
    <div id="basic-plan" class="card mb-4 shadow-sm">
      <div class="card-header">
        <h3 class="my-0 font-weight-normal">Basic</h3>
      </div>
      <div class="card-body">
        <h4 class="card-title pricing-card-title">$<span class="pricing">10 / month</span></h4>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li><span class="storage-amount">2</span> GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Get Started</button>
      </div>
    </div>
  </div>
</div>
*/

/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/Ky1rr9hEoLM */
/* 
  Exercise 01
  -----------
  A new feature has been added to the Pro plan: '24/7 Phone support'.
  Add this using JavaScript to the list features of the Pro plan.
*/
const featuresPro = document.querySelector("#pro-plan .card-body ul");
const newFeaturePro = document.createElement("li");
const textNode = document.createTextNode("24/7 Phone Support");
newFeaturePro.appendChild(textNode);
featuresPro.appendChild(newFeaturePro);

/* 
  Exercise 02
  -----------
  To make the ordering of the plans more logical, using JavaScript, move the basic plan to be before (to the left) of the pro plan.
*/
const basic = document.querySelector("#basic-plan");
const pro = document.querySelector("#pro-plan");
document.querySelector(".card-deck").insertBefore(basic, pro);

/* 
  Exercise 03
  -----------
  To make the Pro plan have a stronger call to action, update the current 'Get started' button to be blue (#007bff) with white text and have the text 'Buy Now' 
*/
pro.querySelector(".btn").style.backgroundColor = "#007bff";
pro.querySelector(".btn").style.color = "#fff";
pro.querySelector(".btn").innerText = "Buy Now";
/* 
  Exercise 04
  -----------
  There is a special offer on at the moment offering 50% more storage on the Basic plan and 25% more on the Pro plan.
  Update the basic and pro plan cards to reflect the new storage amount being offered. 
*/
const featuresBasic = document.querySelector("#basic-plan .card-body ul");
featuresPro.querySelector("li:nth-child(2)").innerHTML = "30 GB storage";
featuresBasic.querySelector("li:nth-child(2)").innerHTML = "3 GB storage";

/* reattempt
  Exercise 05
  -----------
  You have been asked to add a toggle / radio box for annual and monthly payments for the basic and pro plans.
  Add a radio button to toggle between monthly and annual payment options and adjust the prices shown for both plans if the annual option is selected (give two months free if customers pay annually).
*/

const pricing = {
  monthly: {
    basic: "10 / month",
    pro: "30 / month"
  },

  annually: {
    basic: "100 / year",
    pro: "300 / year"
  }
};

const basicPrice = document.querySelector("#basic-plan .card-body .pricing");
const proPrice = document.querySelector("#pro-plan .card-body .pricing");
const container = document.querySelector(".container");

const inputDiv = document.createElement("div");
inputDiv.id = "input";
const radio1 = document.createElement("input");
const label1 = document.createElement("label");
label1.textContent = "Monthly";
label1.id = "radio1";

radio1.setAttribute("type", "checkbox");
radio1.id = "radio1";
label1.for = "radio1";
radio1.style.margin = "10px";
const radio2 = document.createElement("input");
radio2.setAttribute("type", "checkbox");
radio2.id = "radio2";

const label2 = document.createElement("label");
label2.textContent = "Annually";
label2.id = "radio2";
label2.for = "radio2";
radio2.style.margin = "10px"; 
inputDiv.style.display = "flex";
inputDiv.style.gap = "15px";

container.insertBefore(inputDiv, document.querySelector(".card-deck"));

inputDiv.appendChild(label1);
inputDiv.appendChild(label2);
inputDiv.querySelector("#radio1").appendChild(radio1);
inputDiv.querySelector("#radio2").appendChild(radio2);

radio1.addEventListener('change', (e) => {
  if(e.target.checked) {
    basicPrice.innerHTML = `${pricing.monthly.basic}`;
    proPrice.innerHTML = `${pricing.monthly.pro}`;
  }
});

radio2.addEventListener('change', (e) => {
  if(e.target.checked) {
    basicPrice.innerHTML = `${pricing.annually.basic}`;
    proPrice.innerHTML = `${pricing.annually.pro}`;
  }else {
    basicPrice.innerHTML = `${pricing.monthly.basic}`;
    proPrice.innerHTML = `${pricing.monthly.pro}`;
  }
});