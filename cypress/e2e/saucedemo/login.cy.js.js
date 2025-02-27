/// <reference types="cypress" />

describe('Saucedemo - Login Test',()=>{


    it('Error Messages - Login page', ()=>{

        cy.visit('https://www.saucedemo.com/')//navigate to url
        cy.title().should('eq','Swag Labs')
        cy.get('.login_logo').should('eq',)
        cy.get('[data-test="login-button"]').click()
        cy.get('h3').should('contain.text','Epic sadface: Username is required')
        cy.url().should('eq','https://www.saucedemo.com/')//assert
 
    })


it('Standard user - Login page', ()=>{

    cy.visit('https://www.saucedemo.com/')//navigate to url
    cy.title().should('eq','Swag Labs')//assert
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('contain','/inventory.html')//assert
    cy.get('#react-burger-menu-btn').click()
    cy.contains('Logout').click()
    cy.url().should('eq','https://www.saucedemo.com/')//assert

})

it('Locked out user - Login page', ()=>{

    cy.visit('https://www.saucedemo.com/')//navigate to url
    cy.title().should('eq','Swag Labs')//assert
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('.submit-button').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Sorry, this user has been locked out.')//assert
    cy.url().should('eq','https://www.saucedemo.com/')//assert

})



})