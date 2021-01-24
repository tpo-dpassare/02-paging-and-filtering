/* eslint-env mocha */
/* global */

'use strict'

const expect = window.chai.expect

// const T = ...

window.defineTestSuite = () => {
  describe('meets expectations', () => {
    context('when the page is first loaded', () => {
      describe('the list of students', () => {
        it('must have 9 entries', () => {
          const expected = 9
          const actual = document.querySelector('ul.student-list').children.length

          expect(actual).to.equal(expected)
        })
      })
    })
  })

  describe('exceeds expectations', () => {
  })
}
