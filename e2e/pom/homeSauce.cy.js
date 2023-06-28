import homeSaucePage from "../../pages/homeSaucePage";
import inventoryPage from "../../pages/inventoryPage";

describe('POM implementations', () =>{

    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Debería loguearse correctamente', ()=>{

        //Utilizamos la clase homeSaucePage para acceder y llamar a los metodos, utilizarlos, pasandole
        //los valores entre parentesis
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin()

        //Validamos que hayamos podido loguearmos buscando un elemento que aparezca en la pagina /inventory
        //mediante la utilización de la clase inventoryHome

        inventoryPage.elements.titleSpan().should('have.text', 'Products')
    })

    it('Validamos el mensaje de error de usuario bloqueado', ()=>{

        homeSaucePage.typeUsername('locked_out_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin()

        //Validamos que el mensaje de usuario bloqueado sea mostrado en pantalla
        //al ingresar un user locked out (bloquedao)

        homeSaucePage.elements.messageLockedPutUser().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('No es posible loguearse por usuario incorrecto', ()=>{

        homeSaucePage.typeUsername('dummyUser')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin()

        homeSaucePage.elements.messageLockedPutUser().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Validar mensaje de contraseña incorrecta', ()=>{

        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('dummyPassword')
        homeSaucePage.clickLogin()

        homeSaucePage.elements.messageLockedPutUser().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})