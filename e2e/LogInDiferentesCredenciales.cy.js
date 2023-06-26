describe('Fixtures Demo', function(){

//Visitamos la URL indicada antes de cada it (los it son los test cases)
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');

//Indicamos de donde sacaremos los datos estaticos
        cy.fixture('sauceCredentials')
        .then(credentials =>{
            this.credentials = credentials;
        })
    });
    
//Validamos que el login sea exitoso
    it('Santdard UserName', function(){
        cy.get('[data-test="username"]').type(this.credentials.standardUser);
        cy.get('[data-test="password"]').type(this.credentials.password);
        cy.get('[data-test="login-button"]').click();

        cy.get('.title').should('contain.text', 'Products');
    })

//Validamos que el mensaje mostrado al ingresar un usuario incorrecto sea el esperado
    it('wrong UserName', function(){
        cy.get('[data-test="username"]').type(this.credentials.dummyUserName);
        cy.get('[data-test="password"]').type(this.credentials.password);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    })

//Validamos que el mensaje mostrado al ingresar una contraseña incorrecta sea el esperado
it('wrong UserName', function(){
    cy.get('[data-test="username"]').type(this.credentials.standardUser);
    cy.get('[data-test="password"]').type(this.credentials.dummyPassword);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
})

//Validamos que el mensaje mostrado al ingresar una usuario bloqueado sea el correcto
    it('locked user', function(){
        cy.get('[data-test="username"]').type(this.credentials.lockedUerName);
        cy.get('[data-test="password"]').type(this.credentials.password);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
    })
});