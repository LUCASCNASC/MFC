describe('Validando Ícones das redes sociais do cabeçalho', () => {

  
    it('Validando ícone do Facebook', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.wait(2000)

        cy.get('a[href="https://facebook.com/MaringaFCOficial"]') //Validando ícone do Facebook
            .should('have.attr', 'target', '_blank')
            .invoke('removeAttr', 'target')
            .should('be.visible'); //Validando que o ícone está aparecendo

        cy.wait(2000)
            
        cy.get('.row-fluid > .lista-redes > ul > :nth-child(1) > a > .icon-facebook')
            .click() //Clicando no ícone do facebook, para ir até a página
            //.wait(1500)
            //.location('pathname')
            //.should('equal','https://www.facebook.com/MaringaFCOficial')

        //cy.url().should('equal', 'https://www.facebook.com/MaringaFCOficial')
  
    })

    it.skip('Validando ícone do Twitter', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.wait(2000)


        cy.get('a[href="https://twitter.com/maringafc"]') //Validando ícone do Twitter
            .should('have.attr', 'target', '_blank')
            .invoke('removeAttr', 'target')
            .should('be.visible'); //Validando que o ícone está aparecendo

        cy.wait(2000)
            
        cy.get('.row-fluid > .lista-redes > ul > :nth-child(2) > a > .icon-twitter')
            .click() //Clicando no ícone do Twitter, para ir até a página
  
    })

    it.skip('Validando ícone do Youtube', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.wait(2000)


        cy.get('a[href="https://youtube.com.br/mfctvoficial"]') //Validando ícone do Youtube
            .should('have.attr', 'target', '_blank')
            .invoke('removeAttr', 'target')
            .should('be.visible'); //Validando que o ícone está aparecendo

        cy.wait(2000)
            
        cy.get('.row-fluid > .lista-redes > ul > :nth-child(3) > a > .icon-youtube')
            .click() //Clicando no ícone do Youtube, para ir até a página
  
    })

    it.skip('Validando ícone do Instagram', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.wait(2000)


        cy.get('a[href="https://instagram.com/maringafc"]') //Validando ícone do Instagram
            .should('have.attr', 'target', '_blank')
            .invoke('removeAttr', 'target')
            .should('be.visible'); //Validando que o ícone está aparecendo

        cy.wait(2000)
            
        cy.get('.row-fluid > .lista-redes > ul > :nth-child(3) > a > .icon-youtube')
            .click() //Clicando no ícone do Instagram, para ir até a página
  
    })

    it.skip('Validando ícone do site de notícias do Maringá FC', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.wait(2000)


        cy.get('a[href="https://maringafc.com/noticia/"]') //Validando ícone do site de notícias do Maringá FC
            .should('have.attr', 'target', '_blank')
            .invoke('removeAttr', 'target')
            .should('be.visible'); //Validando que o ícone está aparecendo

        cy.wait(2000)
            
        cy.get('.row-fluid > .lista-redes > ul > :nth-child(5) > a > .icon-bold')
            .click() //Clicando no ícone do site de notícias do Maringá FC, para ir até a página
  
    })

    it.skip('Validando o restante da faixa preta superior do site', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.wait(2000)

        cy.get('.hidden-phone > a')
            .should('contain','Fale Conosco') //Validando o texto "Fale Conosco"
            .and('be.visible'); //Validando que o ícone está aparecendo

        cy.get('ul > :nth-child(2) > span')
            .should('contain','Telefone: (44) 3224-5146') //Validando texto "Telefone: (44) 3224-5146"
            .and('be.visible'); //Validando que o ícone está aparecendo
  
    })

   
})

