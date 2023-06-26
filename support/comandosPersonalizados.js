//Para utilizar estos comandos personalizados, este archivo (comandosPersonalizados.js)
//debe ser importado en el archivo e2e.js que se ubica dentro de la carpeta support

Cypress.Commands.add('loguearse', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

Cypress.Commands.add('desloguearse', () =>{
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
});