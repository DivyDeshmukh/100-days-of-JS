/*
html:-
<div class="container"></div>

<div class="hero">
  <header>
    <div class="logo">
      <h1>Job Board</h1>
      <p>Find your dream job.</p>
    </div>
    <div class="menu">
      <ul>
        <li><button id="show-all">All jobs</button></li>
        <li><input id="search" type="text" placeholder="Search"></li>
      </ul>
    </div>

  </header>

  <h2 id="jobs-listed"><span>300</span> Jobs Listed</h2>
</div>
  
  <div class="jobs">
    <div class="job-card">
        <h3>Software Engineer</h3>
        <h4>$50,0000</h4>
        <ul>
          <li>Node.js</li>
          <li>Git</li>
          <li>AWS</li>
      </ul>
    </div>
    
  </div>
*/

/*
  Exercise 01
  -----------
  Add 3 additional jobs to the 'Jobs' section of the page by copying the template in the initial 'job-card'.
*/
const jobs = document.querySelector ('.jobs');
const jobCardHTML = document.querySelector ('.job-card').innerHTML;
for(var i = 1; i <= 3; i++) {
  const card = document.createElement('div');
  card.setAttribute('class', 'job-card');
  card.innerHTML = jobCardHTML;
  jobs.appendChild(card);
}
/*
  Exercise 02
  -----------
  Update the job titles of the new jobs to be: JavaScript Developer, Java Developer, Python Developer
*/
let allCards = document.querySelectorAll('.job-card');
let jobTitles = ['Javascript Developer', 'Java Developer', 'Python Developer', 'React JS Developer'];

allCards.forEach((val, i) => {
  val.querySelector('h3').innerHTML = jobTitles[i];
})

/*
  Exercise 03
  -----------
  Update the number of jobs listed in the hero section to indicate how many jobs you have listed in the 'Jobs section'.
*/ 
const numOfJobs = document.querySelector ('#jobs-listed');
numOfJobs.innerHTML = `${allCards.length} jobs listed`;
/*
  Exercise 04
  -----------
  Configure the search input box to filter jobs listed to only match the text that has been provided in the search. Check for the search text in the job title heading.
*/
document.querySelector('#search').addEventListener('keyup', (e) => {
  const elem = e.target;
  Array.from(document.querySelectorAll('.jobs .job-card')).forEach(job => {
    const jobTitle = job.querySelector('h3').innerText;
    if (!jobTitle.toLowerCase().includes(elem.value.toLowerCase())) {
      job.style.display = 'none'; 
    } else {
      job.style.display = 'block';
    }
  });
})
/*
  Exercise 05
  -----------
  Configure the 'All jobs' button to reset the search and show all jobs available on the page
*/
const btn = document.querySelector('#show-all');

btn.addEventListener('click', function () {
  document.querySelector('#search').value = '';
  document.querySelectorAll('.jobs .job-card').forEach(val => {
    val.style.display = 'block';
  })
});   