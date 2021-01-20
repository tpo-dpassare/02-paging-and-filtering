/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const students = [{ name: 'June1' }, { name: 'June2' }, { name: 'June3' }, { name: 'June4' }, { name: 'June5' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }, { name: 'June' }]

/**
 * Find "page" in array. Function should accept an array and a page number.
 * Return the items only on that "page".
 */
function getPageFromArray (array, pageNumber) {
  const pageSize = 5
  const result = []

  // inputs  outputs
  // 1       1, 2, 3, 4, 5
  // 2       6, 7, 8, 9, 10
  // 3       11, 12, 13, 14, 15
  // 4       16, 17, 18, 19, 20

  // for page 1, 0 -> 5
  // for page 2, 5 -> 10
  //          3, 10 -> 15
  //          4, 15 -> 20

  // (pageNumber - 1) * pageSize = 0
  //  1                   5      = 0
  //  2               *   5      = 5
  //  3               *   5      = 10

  // ((pageNumber - 1) * pageSize) + pageSize
  // (pageNumber * pageSize) - (1 * pageSize) + pageSize
  // (pageNumber * pageSize) - pageSize + pageSize
  // (pageNumber * pageSize)

  const startIndex = (pageNumber - 1) * pageSize
  const endIndex = (pageNumber * pageSize)

  for (let i = startIndex; i < endIndex; i++) {
    result.push(array[i])
  }

  return result

  // return array.slice(startIndex, endIndex)

  // return array.filter((item, index) => {
  //   return index >= startIndex && index < endIndex
  // })
}

const a = getPageFromArray(students, 1)
console.log(a)

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
