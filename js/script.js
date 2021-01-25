/* global data */

/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

'use strict'

/**
 * Updates the UI to display a "page" of students.
 *
 * @param  {Array}    students     The complete list of students to select from.
 *
 * @param  {Number}   pageNumber   The page to display (1-based).
 *
 * @param  {Number}   pageSize     The total number of students to include on
 *                                 this page.
 *
 * @return {undefined}
 */
function showPageOfStudents (students, pageNumber, pageSize) {
  /**
   * The index of the first student to include on this "page".
   * @type {Number}
   */
  const startIndex = (pageNumber - 1) * pageSize

  /**
   * The index of the last student to include on this "page".
   * @type {Number}
   */
  const endIndex = pageNumber * pageSize

  /**
   * Clear any students already visible.
   */
  window.uiContainers.students.innerHTML = ''

  /**
   * STEP 1
   * For each item to display on this "page", create the necessary HTML and
   * add as a child of the parent container.
   */
  for (let i = startIndex; i < endIndex; i++) {
    /**
     * Exit if there are no more students left to display.
     */
    if (i >= students.length) {
      break
    }

    const listItemHtml = `<li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src="${students[i].picture.large}" alt="Profile Picture" />
      <h3>${students[i].name.title} ${students[i].name.first} ${students[i].name.last}</h3>
      <span class="email">${students[i].email}</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined ${students[i].registered.date}</span>
    </div>
  </li>`

    window.uiContainers.students.insertAdjacentHTML('beforeend', listItemHtml)
  }

  /**
   * STEP 2
   * Update the pagination controls based on the total number of students.
   */
  const totalPageCount = Math.ceil(students.length / pageSize)

  /**
   * Clear any controls already visible.
   */
  window.uiContainers.pages.innerHTML = ''

  for (let i = 1; i <= totalPageCount; i++) {
    window.uiContainers.pages.insertAdjacentHTML('beforeend', `<li><button${(i === pageNumber ? ' class="active"' : '')}>${i}</button></li>`)
  }
}

window.uiContainers.pages.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    /**
     * If the clicked button is already active, then there is no need to do
     * anything else.
     */
    if (evt.target.className === 'active') {
      return
    }

    /**
     * Remove the current button highlight.
     */
    window.uiContainers.pages.querySelector('button.active').className = ''

    /**
     * The next page number to display (as determined by the caption of the
     * button).
     * @type {Number}
     */
    const pageToDisplay = window.parseInt(evt.target.textContent, 10)

    showPageOfStudents(data, pageToDisplay, window.uiOptions.pageSize)
  }
})

/**
 * Initialize UI state.
 */
showPageOfStudents(data, 1, window.uiOptions.pageSize)
