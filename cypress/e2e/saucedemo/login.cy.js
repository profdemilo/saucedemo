/// <reference types="cypress" />

let standardUser='standard_user'
let problemUser="problem_user"
let lockedOutUser="locked_out_user"
let password='secret_sauce'


describe('Saucedemo - Login Test',()=>{


    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')//navigate to url
        cy.title().should('eq','Swag Labs')
        cy.get('.login_logo').should('contain','Swag Labs')
      })

    it('Error Messages - Login page', ()=>{

        cy.get('[data-test="login-button"]').click()
        cy.get('h3').should('contain.text','Epic sadface: Username is required')
        cy.url().should('eq','https://www.saucedemo.com/')//assert
 
    })


it('Standard user - Login page', ()=>{
    cy.get('#user-name').type(standardUser)
    cy.get('#password').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('contain','/inventory.html')//assert
    cy.get('#react-burger-menu-btn').click()
    cy.contains('Logout').click()
    cy.url().should('eq','https://www.saucedemo.com/')//assert

})

it('Locked out user - Login page', ()=>{

    cy.get('#user-name').type(lockedOutUser)
    cy.get('#password').type(password)
    cy.get('.submit-button').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Sorry, this user has been locked out.')//assert
    cy.url().should('eq','https://www.saucedemo.com/')//assert

})

it('Problem user - Login page', ()=>{
    cy.get('#user-name').type(problemUser)
    cy.get('#password').type(password)
    cy.get('.submit-button').click()
    cy.get('[src="/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"]')
        .should('be.visible')//assert that the back pack is present
   

})


})