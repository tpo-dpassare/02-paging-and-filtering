/* global data */

/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

'use strict'

for (let i = 0; i < 9; i++) {
  const listItemHtml = `<li class="student-item cf">
  <div class="student-details">
    <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture" />
    <h3>${data[i].name.title} ${data[i].name.first} ${data[i].name.last}</h3>
    <span class="email">${data[i].email}</span>
  </div>
  <div class="joined-details">
    <span class="date">Joined ${data[i].registered.date}</span>
  </div>
</li>`

  window.uiContainers.students.insertAdjacentHTML('beforeend', listItemHtml)
}

const totalPages = Math.ceil(data.length / window.uiOptions.pageSize)

window.uiContainers.pages.insertAdjacentHTML('beforeend', '<li><button class="active">1</button></li>')

for (let i = 1; i < totalPages; i++) {
  window.uiContainers.pages.insertAdjacentHTML('beforeend', `<li><button>${i + 1}</button></li>`)
}
