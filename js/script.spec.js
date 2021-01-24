/* eslint-env mocha */
/* global */

'use strict'

const expect = window.chai.expect

// const T = ...

window.defineTestSuite = () => {
  describe('meets expectations', () => {
    context('when the page is first loaded', () => {
      describe('the list of students', () => {
        /**
         * The collection of DOM elements that are direct descendents of the
         * "student list" UL.
         * @type {HTMLCollection}
         */
        const listItems = document.querySelector('ul.student-list').children

        it('must have 9 entries', () => {
          const expected = 9
          const actual = listItems.length

          expect(actual).to.equal(expected)
        })

        describe('each entry', () => {
          listItems.forEach((li) => {
            it('must be a LI lient', () => {
              const expected = 'LI'
              const actual = li.tagName

              expect(actual).to.equal(expected)
            })

            describe('the list item', () => {
              it('must have a CLASS attribute with the expected value', () => {
                const expected = 'student-item cf'
                const actual = li.attributes.class.value

                expect(actual).to.equal(expected)
              })

              it('must have 2 child DIV elements', () => {
                const expected = ['DIV', 'DIV']
                const actual = Array.from(li.children).map(elem => elem.tagName)

                expect(actual).to.have.members(expected)
              })

              describe('the first DIV', () => {
                const div = li.children[0]

                it('must have a CLASS attribute with the expected value', () => {
                  const expected = 'student-details'
                  const actual = div.attributes.class.value

                  expect(actual).to.equal(expected)
                })

                it('must have the expected children elements', () => {
                  const expected = ['IMG', 'H3', 'SPAN']
                  const actual = Array.from(div.children).map(elem => elem.tagName)

                  expect(actual).to.have.members(expected)
                })

                describe('the image', () => {
                  const img = div.querySelector('img')

                  it('must have the correct CSS class', () => {
                    const expected = 'avatar'
                    const actual = img.attributes.class.value

                    expect(actual).to.equal(expected)
                  })

                  it('must have an SRC attribute matching the expected pattern', () => {
                    const pattern = /^https:\/\/randomuser\.me\/api\/portraits\/(men|women)\/\d+\.jpg$/
                    const actual = img.attributes.src.value

                    expect(actual).to.match(pattern)
                  })

                  it('must have an ALT attribute with the expected value', () => {
                    const expected = 'Profile Picture'
                    const actual = img.attributes.alt.value

                    expect(actual).to.equal(expected)
                  })
                })

                describe('the heading', () => {
                  const h3 = div.querySelector('h3')

                  it('must have a student\'s name', () => {
                    const pattern = /^[A-Z]{1}[a-z]+( [A-Z]{1}[a-z]+){1,2}$/
                    const actual = h3.textContent

                    expect(actual).to.match(pattern)
                  })
                })
              })

              describe('the second DIV', () => {

              })
            })
          })
        })
      })
    })
  })

  describe('exceeds expectations', () => {
  })
}
