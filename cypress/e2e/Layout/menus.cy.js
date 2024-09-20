describe('Validando menus centrais da página', () => {

  
    it('Validando menus centrais da página', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        // VALIDANDO OPÇÕES DO MASCULINO //

        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-6625401 > [href="https://store.maringafc.com/publicomasculino"] > .titulo')
            .should('contain','MASCULINO') //Validando opção "MASCULINO"
            .realHover() //Cursor ficar em cima do elemento principal para aparecer os outros elementos
            .should('be.visible'); //Validando que o ícone está aparecendo

        cy.get('.categoria-id-20938344')
            .should('contain','Calças') // Validando "Calças", opção do menu "MASCULINO"
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356645')
            .should('contain','CAMISAS OFICIAIS MASCULINAS') // Validando "CAMISAS OFICIAIS MASCULINAS", opção do menu "MASCULINO"
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356668')
            .should('contain','CAMISETAS CASUAIS') // Validando "CAMISETAS CASUAIS", opção do menu "MASCULINO"
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-20391836')
            .should('contain','JAQUETAS') // Validando "JAQUETAS", opção do menu "MASCULINO"
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356707')
            .should('contain','MOLETONS') // Validando "MOLETONS", opção do menu "MASCULINO" 
            .and('be.visible'); //Validando que o texto está aparecendo   
            
        cy.wait(2000)
            
        // VALIDANDO OPÇÕES DO UNISSEX //
        
            
        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-17553089 > [href="https://store.maringafc.com/unissex"] > .titulo')
            .should('contain','UNISSEX') //Validando opção "UNISSEX"
            .realHover() //Cursor ficar em cima do elemento principal para aparecer os outros elementos
            .should('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-20012689')
            .should('contain','MOLETONS') // Validando "MOLETONS", opção do menu "UNISSEX" 
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.wait(2000)
        

        // VALIDANDO OPÇÕES DO FEMININO //


        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-8355122 > [href="https://store.maringafc.com/linha-feminina"] > .titulo')
            .should('contain','FEMININO') //Validando opção "FEMININO"
            .realHover() //Cursor ficar em cima do elemento principal para aparecer os outros elementos
            .should('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356602')
            .should('contain','CAMISAS OFICIAIS FEMININAS') // Validando "CAMISAS OFICIAIS FEMININAS", opção do menu "FEMININO" 
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356608')
            .should('contain','ROUPAS DIVERSAS FEMININAS') // Validando "ROUPAS DIVERSAS FEMININAS", opção do menu "FEMININO" 
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.wait(2000)


        // VALIDANDO OPÇÕES ACESSÓRIOS MFC //


        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-6625289 > [href="https://store.maringafc.com/acessorios"] > .titulo')
            .should('contain','ACESSÓRIOS MFC') //Validando opção "ACESSÓRIOS MFC"
            .realHover() //Cursor ficar em cima do elemento principal para aparecer os outros elementos
            .should('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-20393340')
            .should('contain','BANDEIRAS') // Validando "BANDEIRAS", opção do menu "ACESSÓRIOS MFC" 
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-20393828')
            .should('contain','BOLA') // Validando "BOLA", opção do menu "ACESSÓRIOS MFC" 
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356574')
            .should('contain','BONÉS') // Validando "BONÉS", opção do menu "ACESSÓRIOS MFC" 
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356582')
            .should('contain','COPOS E CANECAS') // Validando "COPOS E CANECAS", opção do menu "ACESSÓRIOS MFC" 
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356576')
            .should('contain','LINHA CHURRASCO MFC') // Validando "LINHA CHURRASCO MFC", opção do menu "ACESSÓRIOS MFC" 
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356694')
            .should('contain','MOCHILAS E BOLSAS') // Validando "MOCHILAS E BOLSAS", opção do menu "ACESSÓRIOS MFC" 
            .and('be.visible'); //Validando que o texto está aparecendo


        // VALIDANDO OPÇÕES INFANTIL //


        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-3977525 > [href="https://store.maringafc.com/linha-infantil"] > .titulo')
            .should('contain','INFANTIL') //Validando opção "INFANTIL"
            .realHover() //Cursor ficar em cima do elemento principal para aparecer os outros elementos
            .should('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-7400759')
            .should('contain','LINHA BABY') // Validando "LINHA BABY", opção do menu "ACESSÓRIOS MFC" 
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-20375269')
            .should('contain','LINHA INFANTIL') // Validando "LINHA INFANTIL", opção do menu "ACESSÓRIOS MFC" 
            .and('be.visible'); //Validando que o texto está aparecendo
        
    })
})