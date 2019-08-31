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
    

    it('Search an iphone', function(){
        cy.visit('http://localhost:4200/')
        cy.pause()
        cy.contains('Estefany')
        cy.get('input')
        .type('iphone 8 plus 64gb')
        .should('have.value','iphone 8 plus 64gb')
        cy.get('button')
        .click()
        cy.contains('iPhone')

        cy.get('input')
        .clear()
        .type('Nikon D750')
        .should('have.value','Nikon D750')
        cy.get('button')
        .click()
        cy.contains('Nikon D750')
        
    })
    
})