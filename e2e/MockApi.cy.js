//Vamos a simular la respuesta de una APi a través de l método INTERCEPT

describe('Demo mockear una API', () =>{

    it('Validación inicial', () =>{
        cy.visit('https://example.cypress.io/todo')
        cy.get('.todo-list li')
        .should('have.length', 2)
        .and('contain', 'Pay electric bill')
        .and('contain', 'Walk the dog')
    })

//Vamos a pasarle los datos de la respuesta mockeada a través del json creado en Intercept
    it('Mockear una respuesta de la API', () =>{
        //cy.intercept('GET', '/todos', {
        //   fixture: 'TodoListMock.json'
        //}).as('getTodos.Fixture')

        cy.intercept('GET', '/todos', {
            body: [
                {
                    "title": "Limpiar a jerry",
                    "completed": false,
                    "id": 1
                },
                {
                    "title": "Sacar la basura",
                    "completed": false,
                    "id": 2
                },
                {
                    "title": "Estudiar automatización",
                    "completed": false,
                    "id": 3
                }
            ]
        })
        cy.visit('https://example.cypress.io/todo')

        cy.get('.todo-list li')
        .should('have.length', 3)
        .and('contain', 'Limpiar a jerry')
        .and('contain', 'Sacar la basura')
        .and('contain', 'Estudiar automatización')
    })
});