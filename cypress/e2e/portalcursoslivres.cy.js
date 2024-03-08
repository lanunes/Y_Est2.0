describe('Cadastro no portal de Cursos livres IBMEC', () => {

    it('Cadastro com sucesso ', () => {
        // acessar portal cursos livres da IBMEC
        cy.visit('https://cursos.ibmec.br/m/certificacoes-imersoes')
        cy.get('body > div.c-jABvLw.c-jABvLw-iTKOFX-flow-column.c-jABvLw-igCavXm-css > header > nav > div > div.c-jABvLw.c-jABvLw-ejCoEP-flow-row.c-jABvLw-ifidfuZ-css > div.c-jABvLw.c-jABvLw-ejCoEP-flow-row.c-jABvLw-ieJzvYw-css > div.c-jABvLw.c-jABvLw-iTKOFX-flow-column.c-jABvLw-hScUqS-flow-row.c-jABvLw-ikjZbfs-css > button.c-juIkCg.c-juIkCg-bXbKEY-size-lg.c-juIkCg-cRteGT-variant-secondary > span')
            .click({force: true});
  
   
        // preencher form de cadastro
        cy.get('#radix-\\:r0\\: > div > div > div:nth-child(2) > form > div > label:nth-child(1) > div > input')
            .should('be.visible')
            .type('Novo Usuario');
        cy.get('#radix-\\:r0\\: > div > div > div:nth-child(2) > form > div > label:nth-child(2) > div > input')
            .should('be.visible')
            .type('novousuario@gmail.com');
        cy.get('#radix-\\:r0\\: > div > div > div:nth-child(2) > form > div > label:nth-child(3) > div > input')
            .should('be.visible')
            .type('12345678');


        // cadastro com sucesso
        cy.contains('Olá,').should('exist');

    })
})