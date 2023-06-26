import homeSaucePage from "../../pages/inventoryHome";
import inventoryHome from "../../pages/inventoryHome";

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

        inventoryHome.elements.titleSpan().should('have.text', 'Products')
    })
})