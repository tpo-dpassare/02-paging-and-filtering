/* global data */

/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

'use strict'

const uiContainers = {
  students: document.querySelector('ul.student-list')
}

for (let i = 0; i < 9; i++) {
  const listItemHtml = `<li class="student-item cf">
  <div class="student-details">
    <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture" />
    <h3></h3>
    <span></span>
  </div>
  <div></div>
</li>`

  uiContainers.students.insertAdjacentHTML('beforeend', listItemHtml)
}
