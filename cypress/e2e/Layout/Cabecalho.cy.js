describe('Validando Cabeçalho da página', () => {

  
    it('Validando Cabeçalho da página', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.get('.logo > a > img') //Validando a imagem "MFC STORE"
            .should('exist') // Verifica se a imagem existe
            .and('have.attr', 'src') // Verifica se tem o atributo 'src'
            .and('not.be.empty'); // Verifica se o 'src' não está vazio

        cy.get('.bem-vindo') //Validado mensagem de boas-vindas
            .should('contain','Bem-vindo, identifique-se para fazer pedidos')
            .and('be.visible'); //Validando que o texto está aparecendo
        
        cy.get(':nth-child(1) > .icon-list')
            .should('exist') //Validando a existencia do ícone
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.acoes-conta > :nth-child(1) > .cor-secundaria')
            .should('contain','Meus Pedidos')
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.span4 > .carrinho > a > .vazio-text')
            .should('contain','Carrinho vazio') //Validando texto "Carrinho vazio"
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#auto-complete') //Validando mensagem "Digite o que você procura" dentro do imput de pesquisa
            .should('have.attr', 'placeholder', 'Digite o que você procura')
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#form-buscar > .botao') 
            .should('exist') //Validar a existencia do botão
            .and('be.visible'); //Validando que o texto está aparecendo
  
    })
})