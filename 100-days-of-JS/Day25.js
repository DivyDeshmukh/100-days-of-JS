/*
html:-
<table class="table">
  <tr>
    <th>#</th>
    <th>First</th>
    <th>Last</th>
    <th>Handle</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Samuel</td>
    <td>Johnson</td>
    <td>@samjohnson</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Sally</td>
    <td>Simpson</td>
    <td>@ssimpson</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Leona</td>
    <td>Dixon</td>
    <td>@ldixon</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Rosa</td>
    <td>Reed</td>
    <td>@rreed</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Enrique</td>
    <td>Jimenez</td>
    <td>@ejimenez</td>
  </tr>
</table>
*/

/*
  Exercise 01
  -----------
  Add a new row to the table with the details: 'Sean Reyes' (@sreyes)
*/
const numOfRows = document.querySelectorAll('.table tr').length-1;
const table = document.querySelector('.table');
const newRow = document.createElement('tr');
newRow.innerHTML = `<td>${numOfRows+1}</td>
    <td>Sean</td>
    <td>Reyes</td>
    <td>@sreyes</td>`;

table.appendChild(newRow)

/*
  Exercise 02
  ------------
  Update Leona Dixon's handle to @dixonl
*/
document.querySelector(`table tr:nth-child(4) td:nth-child(4)`).innerHTML = '@dixonl';

/*
  Exercise 03
  -----------
  Move Rosa Reed to the top of the table and ensure all the number entries in the first column are updated accordingly.
*/
const temp = table.querySelector('tr:nth-child(2)').innerHTML;
table.querySelector('tr:nth-child(2)').innerHTML = table.querySelector('tr:nth-child(5)').innerHTML;
table.querySelector('tr:nth-child(5)').innerHTML = temp;

for(var i = 2;i <= document.querySelectorAll('.table tr').length-1; i++) {
  table.querySelector(`tr:nth-child(${i}) td:nth-child(1)`).innerHTML = i-1;
}
 
/* 
  Exercise 04
  -----------
  Move the handle column including all of it's rows of contents to be the second column in the table (after the # column)
*/
Array.from(document.querySelectorAll('table tr'))
.forEach(row => {
  const handleCol = row.querySelector('td:nth-child(4),th:nth-child(4)');
  const indexCol = row.querySelector('td:nth-child(1), th:nth-child(1)');
  indexCol.insertAdjacentElement('afterEnd', handleCol);
});
/*
The syntax with a comma (,) inside the querySelector is used to select multiple elements within a single query. 
This query will select the fourth child (:nth-child(4)) either if it's a td (table cell) or a th (table header) element. It combines the two selectors using a comma to express an "or" condition.
 think it as conditional like if this element is present than pick it if not look for second. so here, element after indexCol will replace handleCol and handleCol will come after indexCol.
*/
/*
  Exercise 05
  -----------
  To make the table easier to read, make every other row on the table to have a darker, shaded colour e.g. #f2f2f2
*/
const row = document.querySelectorAll('tr:nth-child(odd)').forEach(val => {
  val.style.backgroundColor= '#f2f2f2'
});
