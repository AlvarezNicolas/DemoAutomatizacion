describe('Demo login', () =>{
    beforeEach(function(){

 //Visitamos la URL antes de la ejecución de cada it
        cy.visit('https://www.saucedemo.com/');

//Indicamos de donde utlizaremos las variables estaticas
        cy.fixture('sauceCredentials')
        .then(credentials =>{
            this.credentials = credentials;
     });
});

//Nos logueamos en la página indicando usuario y contraseña sacando el valor de el fixture
    it('Login exitoso', function(){
        cy.loguearse(this.credentials.standardUser, this.credentials.password)
        cy.get('.title').should('contain.text', 'Products')
        cy.desloguearse();
        cy.url().should('eq', 'https://www.saucedemo.com/')
    });       

//Validamos que el mensaje de error al ingresar una contrsaña incorrecta sea el esperado
    it('Login fallido', function(){
        cy.loguearse(this.credentials.standardUser, this.credentials.dummyPassword)
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    });
});