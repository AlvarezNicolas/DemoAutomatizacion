class inventoryPage {

    //Con elements logramos mapear cada objeto de nuestra web (POM = Page Object Model)
    elements = {
        titleSpan: () => cy.get('.title')
    }
}

//Luego del new va el nombre de la clase, con el fin de que cualquier otra
//clase o JS pueda ser capaz de imporarlo
module.exports = new inventoryPage();