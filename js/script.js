/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

'use strict'

const uiContainers = {
  students: document.querySelector('ul.student-list')
}

for (let i = 0; i < 9; i++) {
  uiContainers.students.insertAdjacentHTML('beforeend', `<li>${i}</li>`)
}
