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
  <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture" />
</li>`

  uiContainers.students.insertAdjacentHTML('beforeend', listItemHtml)
}
