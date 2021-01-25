/* eslint-env mocha */

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
        const listItems = window.uiContainers.students.children

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

                describe('the span', () => {
                  const span = div.querySelector('span')

                  it('must have the correct CSS class', () => {
                    const expected = 'email'
                    const actual = span.attributes.class.value

                    expect(actual).to.equal(expected)
                  })

                  it('must have the student\'s email address', () => {
                    const pattern = /^[a-z]+\.[a-z]+@example\.com$/
                    const actual = span.textContent

                    expect(actual).to.match(pattern)
                  })
                })
              })

              describe('the second DIV', () => {
                const div = li.children[1]

                it('must have a CLASS attribute with the expected value', () => {
                  const expected = 'joined-details'
                  const actual = div.attributes.class.value

                  expect(actual).to.equal(expected)
                })

                it('must have the expected children elements', () => {
                  const expected = ['SPAN']
                  const actual = Array.from(div.children).map(elem => elem.tagName)

                  expect(actual).to.have.members(expected)
                })

                describe('the span', () => {
                  const span = div.querySelector('span')

                  it('must have the correct CSS class', () => {
                    const expected = 'date'
                    const actual = span.attributes.class.value

                    expect(actual).to.equal(expected)
                  })

                  it('must have the student\'s join date', () => {
                    const pattern = /^Joined \d{2}-\d{2}-\d{4}$/
                    const actual = span.textContent

                    expect(actual).to.match(pattern)
                  })
                })
              })
            })
          })
        })
      })

      describe('the page list', () => {
        /**
         * The collection of DOM elements that are direct descendents of the
         * "page button list" UL.
         * @type {HTMLCollection}
         */
        const listItems = window.uiContainers.pages.children

        it('must have the expected number of items', () => {
          const expected = 5
          const actual = listItems.length

          expect(actual).to.equal(expected)
        })

        describe('the first item', () => {
          const li = listItems[0]

          it('must contain the expected HTML', () => {
            const expected = '<button class="active">1</button>'
            const actual = li.innerHTML

            expect(actual).to.equal(expected)
          })
        })

        describe('all other items', () => {
          for (let i = 1; i < listItems.length; i++) {
            const li = listItems[i]

            it('must contain the expected HTML', () => {
              const expected = `<button>${i + 1}</button>`
              const actual = li.innerHTML

              expect(actual).to.equal(expected)
            })
          }
        })
      })
    })

    context('when the second page button is clicked', () => {
      let previousPageContents = null

      before((done) => {
        previousPageContents = window.uiContainers.students.innerHTML
        window.uiContainers.pages.children[1].children[0].click()

        window.setTimeout(done, 500)
      })

      describe('the list of students', () => {
        it('must have a different set of content than the first page', () => {
          const actual = window.uiContainers.students.innerHTML
          expect(actual).to.not.equal(previousPageContents)
        })
      })

      describe('the page list', () => {
        /**
         * The collection of DOM elements that are direct descendents of the
         * "page button list" UL.
         * @type {HTMLCollection}
         */
        let listItems = null

        before(() => {
          listItems = window.uiContainers.pages.children
        })

        it('must have the expected number of items', () => {
          const expected = 5
          const actual = listItems.length

          expect(actual).to.equal(expected)
        })

        describe('the second item', () => {
          it('must contain the expected HTML', () => {
            const expected = '<button class="active">2</button>'
            const actual = listItems[1].innerHTML

            expect(actual).to.equal(expected)
          })
        })

        describe('all other items', () => {
          it('must contain the expected HTML', () => {
            for (let i = 0; i < listItems.length; i++) {
              if (i === 1) continue // ignore the second button

              const pattern = /^<button( class="")?>\d<\/button>$/
              const actual = listItems[i].innerHTML

              expect(actual).to.match(pattern)
            }
          })
        })
      })
    })
  })

  describe('exceeds expectations', () => {
  })
}
