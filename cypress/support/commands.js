// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

//Login personalizado
Cypress.Commands.add('login', (username, password) => {
 
  cy.visit('/');

  cy.wait(8000)

  cy.get('[title="Close"]')
    .click()

  cy.get('.acoes-conta > :nth-child(2) > .cor-secundaria')
    .click()

   cy.get('.controls > #id_email').type(username); //Campo login
   cy.get('#id_senha').type(password); //Campo senha
 
   // Clica no botão de login
   cy.get('.controls > .botao').click();

   cy.url().should('not.include', '/login'); // Verifica que saiu da página de login
 });
 


 import 'cypress-real-events/support';
