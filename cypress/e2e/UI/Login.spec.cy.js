///<reference types="cypress"/>
const jsonData = require ('../../fixtures/UserData.json')
 

describe("SauceLabs test suite", () => {

    let uniqueUsername;

    beforeEach(() => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        

    })

    it("Landing screen test", () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('.logo').should('be.visible')
        cy.get('#headerPanel').should('be.visible')
        cy.contains('Customer Login')
        cy.contains('Username')
        cy.contains('Password')
        
    })

    it("Register screen", () => {

        const baseUsername='rnair'
        const timeStamp= new Date().getTime();
        uniqueUsername = baseUsername+timeStamp;
        cy.contains('Register').click()
        cy.contains("Signing up is easy!")

        //Enter details
        cy.get('[name="customer.firstName"]').type("Roshan")
        cy.get('[name="customer.lastName"]').type("Nair")
        cy.get('[name="customer.address.street"]').type("Kansas")
        cy.get('[name="customer.address.city"]').type('Kansas')
        cy.get('[name="customer.address.state"]').type('Kansas')
        cy.get('[name="customer.address.zipCode"]').type("4123")
        cy.get('[name="customer.ssn"]').type("1234567")
        cy.get('[name="customer.phoneNumber"]').type("4031245412")
        cy.get('[name="customer.username"]').type(uniqueUsername)
        cy.get('[name="customer.password"]').type('rnair123')
        cy.get('[name="repeatedPassword"]').type('rnair123')
        cy.get('[colspan="2"] > .button').click()
        cy.contains('Welcome '+ uniqueUsername)
        cy.contains("Your account was created successfully. You are now logged in.")

        cy.contains('Log Out').click()
        cy.contains("Customer Login")

        
    })

    it("Login", ()=> {

        cy.get('[name="username"]').type(uniqueUsername)
        cy.get('[name="password"]').type('rnair123')
        cy.get(':nth-child(5) > .button').click()
        cy.contains("Accounts Overview") 


    })

})