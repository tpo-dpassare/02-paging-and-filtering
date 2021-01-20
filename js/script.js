/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function getPageOfNumbers (items, pageNumber) {
  const pageSize = 5

  console.log('page size', pageSize)

  // for page 1, start with 0 until 4
  // for page 2, start with 5 until 9
  // for page 3, start with 10 until 14
  // for page 4, start with 15 until 19

  // input 1 output 0 (pageNumber - 1) * pageSize = (1 - 1) * 5 = 0 * 5 = 0
  // input 2 output 5 (2 - 1) * 5 = 1 * 5 = 5
  // input 3 output 10 (3 -1) * 5 = 10
  // input 4 output 15 (4 - 1) * 5 = 15

  for (let i = (pageNumber - 1) * pageSize; i < pageNumber * pageSize; i++) {
    console.log(items[i])
  }
}

// (pageNumber - 1) * pageSize) + pageSize
// (pageNumber * pageSize) - (1 * pageSize) + pageSize
// (pageNumber * pageSize) - pageSize + pageSize
// (pageNumber * pageSize)

getPageOfNumbers(items, 1)
getPageOfNumbers(items, 2)
getPageOfNumbers(items, 3)
getPageOfNumbers(items, 4)

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
