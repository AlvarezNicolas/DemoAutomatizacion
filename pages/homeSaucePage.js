class homeSaucePage{

    //Esto es una variable/objeto
    //Seteamos los diferentes elementos de nuestro sitio web y lo mapeamos
    //Con elements logramos mapear cada objeto de nuestra web (POM = Page Object Model)
    elements = {
        usernameImput: () => cy.get('[data-test="username"]'),
        passwordImput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        messageLockedPutUser: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(username){
        this.elements.usernameImput().type(username)
    }

    typePassword(password){
        this.elements.passwordImput().type(password)
    }

    clickLogin (){
        this.elements.loginButton().click();
    }

}

//Luego del new va el nombre de la clase, con el fin de que cualquier otra
//clase o JS pueda ser capaz de imporarlo

module.exports = new homeSaucePage