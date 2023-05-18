

describe('simple test', () => {

    beforeEach(() => {

        cy.visit('http://localhost:8080/')
    })

    it('has a title', () => {

        cy.contains('Rick and Morty'.toLocaleUpperCase())
    })

    it('click update button', () => {

        cy.get('#test-loader')

        cy.contains('Update').click()
        cy.get('#test-loader')
    })

    it('go to characters list', () => {

        cy.contains('Characters list').click()
    })

    it('visit next page', () => {

        cy.contains('Characters list').click()
        cy.contains('Next page').click()
        cy.contains('Prev page')
    })

    it('random card click', () => {

        cy.get('#test-loader')

        cy.get('#test-random-card').click()
    })
})
