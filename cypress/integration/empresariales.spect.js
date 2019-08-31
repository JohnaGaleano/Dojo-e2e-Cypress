describe('My first e2e testing', function (params) {
    it('Check website', function(){
        //array
        // - visit some place
        cy.visit('https://example.cypress.io') 

        //act
        // Search a element & click
        cy.contains('type').click()

        // Assert
        // - Check URL
        cy.url()
        .should('include', '/commands/action')
        
        /* cy.get('.action-email')
            .type('john.galeanoc@gmail.com')
            .should('have.value', 'john.galeanoc@gmail.com') */

        cy.get('#email1')
        .type('john.galeanoc@gmail.com')
        .should('have.value', 'john.galeanoc@gmail.com')
    })

    it('MELI Test', function(){
        cy.visit('https://mercado-estefa.herokuapp.com/')
    })
    
})