describe('Validando imagens centrais da página', () => {

  
    it('Validando imagens centrais da página', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.get('.flex-active-slide > img')
            .should('exist') // Verifica se a imagem existe
            .and('have.attr', 'src') // Verifica se tem o atributo 'src'
            .and('not.be.empty'); // Verifica se o 'src' não está vazio

        cy.get(':nth-child(1) > .flexslider > .slides > .flex-active-slide > a > img')
            .should('exist') // Verifica se a imagem existe
            .and('have.attr', 'src') // Verifica se tem o atributo 'src'
            .and('not.be.empty'); // Verifica se o 'src' não está vazio

        cy.get(':nth-child(2) > .flexslider > .slides > .flex-active-slide > a > img')
            .should('exist') // Verifica se a imagem existe
            .and('have.attr', 'src') // Verifica se tem o atributo 'src'
            .and('not.be.empty'); // Verifica se o 'src' não está vazio

        cy.get(':nth-child(3) > .flexslider > .slides > .flex-active-slide > a > img')
            .should('exist') // Verifica se a imagem existe
            .and('have.attr', 'src') // Verifica se tem o atributo 'src'
            .and('not.be.empty'); // Verifica se o 'src' não está vazio
        

        
  
    })
})