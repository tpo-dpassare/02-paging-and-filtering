/* global data */

/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

'use strict'

/**
 * Returns the necessary HTML to display a "page" of student information cards.
 *
 * @param  {Array}    sourceData   The list of students to select from.
 *
 * @param  {Number}   pageNumber   The page to display (1-based).
 *
 * @param  {Number}   pageSize     The total number of cards to include on this
 *                                 page.
 *
 * @return {Array}    An array of string values, each of which contains the
 *                    HTML needed to render a single card.
 */
function generateStudentCards (sourceData, pageNumber, pageSize) {
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
   * The returned value.
   * @type {Array}
   */
  const output = []

  for (let i = startIndex; i < endIndex; i++) {
    /**
     * Exit if there are no more students available to display.
     */
    if (i >= sourceData.length) {
      break
    }

    /**
     * The template for each card can be found at
     * https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
     * @type {String}
     */
    output.push(`<li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${sourceData[i].picture.large}" alt="Profile Picture" />
        <h3>${sourceData[i].name.title} ${sourceData[i].name.first} ${sourceData[i].name.last}</h3>
        <span class="email">${sourceData[i].email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${sourceData[i].registered.date}</span>
      </div>
    </li>`)
  }

  return output
}

/**
 * Returns the necessary HTML to display a set of pagination controls.
 *
 * @param  {Number}   totalCardCount   The total number of cards available to
 *                                     be displayed (across all pages).
 *
 * @param  {Number}   pageSize         The total number of cards to include on
 *                                     a single page.
 *
 * @return {Array}    An array of string values, each of which contains the
 *                    HTML needed to render a single card.
 */
function generatePaginationControls (totalCardCount, pageSize) {
  /**
   * The returned value.
   * @type {Array}
   */
  const output = []

  /**
   * The total number of pages necessary to display all the available cards.
   * @type {Number}
   */
  const totalPageCount = Math.ceil(totalCardCount / pageSize)

  /**
   * The template for each control can be found at
   * https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   * @type {String}
   */
  for (let i = 1; i <= totalPageCount; i++) {
    output.push(`<li><button>${i}</button></li>`)
  }

  return output
}

/**
 * Adds or removes the necessary CSS class to indicate which page control is
 * currently active.
 *
 * @param  {Array}    controls     The list of UI controls used to select the
 *                                 current page.
 *
 * @param  {Number}   pageNumber   The currently selected page number (1-based).
 *
 * @param  {String}   className    The CSS class used to indicate if the control
 *                                 is active.
 *
 * @return {undefined}
 */
function highlightActivePage (controls, pageNumber, className) {
  controls.forEach((ctrl) => {
    if (ctrl.textContent === pageNumber.toString()) {
      ctrl.className = className
    } else {
      ctrl.className = ''
    }
  })
}

window.uiContainers.pages.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    /**
     * If the clicked button is already active, then there is no need to do
     * anything else.
     */
    if (evt.target.className === window.uiOptions.activeButtonClassName) {
      return
    }

    /**
     * The next page number to display (as determined by the caption of the
     * button).
     * @type {Number}
     */
    const pageToDisplay = window.parseInt(evt.target.textContent, 10)

    /**
     * Remove any visible cards.
     */
    window.uiContainers.students.innerHTML = ''

    /**
     * Display student cards.
     */
    generateStudentCards(data, pageToDisplay, window.uiOptions.pageSize).forEach((card) => {
      window.uiContainers.students.insertAdjacentHTML('beforeend', card)
    })

    highlightActivePage(
      window.uiContainers.pages.querySelectorAll('button'),
      pageToDisplay,
      window.uiOptions.activeButtonClassName
    )
  }
})

/**
 * Initialize UI state.
 */
generatePaginationControls(data.length, window.uiOptions.pageSize).forEach((ctrl) => {
  window.uiContainers.pages.insertAdjacentHTML('beforeend', ctrl)
})

window.uiContainers.pages.querySelector('button').click()
