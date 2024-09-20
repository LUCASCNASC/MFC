describe('Validando elememtos do Rodapé da página', () => {

  
    it('Validando elememtos do Rodapé da página', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.wait(2000)

        cy.scrollTo('bottom') //Rolar até o final da página

        // CATEGORIA //

        cy.get('.links-rodape-categorias > .titulo')
            .should('contain','Categorias') //Validando texto do título "Categorias"
            .and('be.visible') //Validando se título "Categorias" está aparecendo
            .and('be.visible') //Validando se está visível

        cy.get('.total-itens_5 > :nth-child(1) > a')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'MASCULINO') //Validando texto linkado
            .and('have.attr', 'href', 'https://store.maringafc.com/publicomasculino') //Validando link que manda 
            .and('not.have.attr', 'disabled') //Validando se não está desabilitado

        cy.wait(1000)

        cy.get('.total-itens_5 > :nth-child(2) > a') 
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'UNISSEX') //Validando texto linkado
            .and('have.attr', 'href', 'https://store.maringafc.com/unissex') //Validando link que manda 
            .and('not.have.attr', 'disabled') //Validando se não está desabilitado

        cy.wait(1000)

        cy.get('.total-itens_5 > :nth-child(3) > a')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'FEMININO') //Validando texto linkado
            .and('have.attr', 'href', 'https://store.maringafc.com/linha-feminina') //Validando link que manda 
            .and('not.have.attr', 'disabled') //Validando se não está desabilitado

        cy.wait(1000)

        cy.get('.total-itens_5 > :nth-child(4) > a')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'ACESSÓRIOS MFC') //Validando texto linkado
            .and('have.attr', 'href', 'https://store.maringafc.com/acessorios') //Validando link que manda 
            .and('not.have.attr', 'disabled') //Validando se não está desabilitado

        cy.wait(1000)

        cy.get('.total-itens_5 > :nth-child(5) > a')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'INFANTIL') //Validando texto linkado
            .and('have.attr', 'href', 'https://store.maringafc.com/linha-infantil') //Validando link que manda 
            .and('not.have.attr', 'disabled') //Validando se não está desabilitado

        cy.wait(1000)


        // Conteúdo //

        
        cy.get('.links-rodape-paginas > .titulo')
            .should('contain','Conteúdo') //Validando texto do título "Conteúdo"
            .and('be.visible') //Validando se título "Conteúdo" está aparecendo
            .and('be.visible') //Validando se está visível

        cy.wait(1000)
            
        cy.get('.links-rodape-paginas > ul > :nth-child(1) > a')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Fale Conosco') //Validando texto "Fale Conosco"
            .and('not.have.attr', 'disabled') //Validando se não está desabilitado

        cy.get('.links-rodape-paginas > ul > :nth-child(1) > a')
            .click() //Clicar no "Fale Conosco"

        // VALIDAR CARD "Fale Conosco"

        cy.wait(2000)

        cy.get('#modalContato > .modal-header > .titulo')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Fale Conosco') //Validando título "Fale Conosco"
            .and('have.text', 'Fale Conosco') //Validando exatamente o texto

        cy.get('#modalContato > .modal-header')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Preencha o formulário abaixo.') //Validando texto "Preencha o formulário abaixo."


        cy.get('.row-fluid > :nth-child(1) > :nth-child(1) > .control-label') //campo "Nome" - Card "Fale Conosco"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Nome') //Validando título "Nome"
            .and('have.text', 'Nome') //Validando exatamente o texto "Nome"

        cy.get('#id_nome') //Campo em branco do "Nome"
            .should('have.value', '') //Verificar se o campo está vazio
            .and('be.empty') //Verificar se realmente não tem texto
            .and('be.enabled') //Verificar se o campo está habilitado para ser preenchido


        cy.get('.row-fluid > :nth-child(1) > :nth-child(2) > .control-label') //campo "E-mail" - Card "Fale Conosco"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'E-mail') //Validando título "E-mail"
            .and('have.text', 'E-mail') //Validando exatamente o texto "E-mail"

        cy.get('#id_email') //Campo em branco do "E-mail"
            .should('have.value', '') //Verificar se o campo está vazio
            .and('be.empty') //Verificar se realmente não tem texto
            .and('be.enabled') //Verificar se o campo está habilitado para ser preenchido


        cy.get(':nth-child(3) > .control-label') //campo "Telefone" - Card "Fale Conosco"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Telefone') //Validando título "Telefone"
            .and('have.text', 'Telefone') //Validando exatamente o texto "Telefone"

        cy.get('#id_telefone') //Campo em branco do "Telefone"
            .should('have.value', '') //Verificar se o campo está vazio
            .and('be.empty') //Verificar se realmente não tem texto
            .and('be.enabled') //Verificar se o campo está habilitado para ser preenchido


        cy.get(':nth-child(4) > .control-label') //campo "Nº do pedido" - Card "Fale Conosco"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Nº do pedido') //Validando título "Nº do pedido"
            .and('have.text', 'Nº do pedido') //Validando exatamente o texto "Nº do pedido"

        cy.get('#id_numero_pedido') //Campo em branco do "Nº do pedido"
            .should('have.value', '') //Verificar se o campo está vazio
            .and('be.empty') //Verificar se realmente não tem texto
            .and('be.enabled') //Verificar se o campo está habilitado para ser preenchido


        cy.get(':nth-child(5) > .control-label') //campo "Mensagem" - Card "Fale Conosco"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Mensagem') //Validando título "Mensagem"
            .and('have.text', 'Mensagem') //Validando exatamente o texto "Mensagem"

        cy.get('#id_numero_pedido') //Campo em branco do "Mensagem"
            .should('have.value', '') //Verificar se o campo está vazio
            .and('be.empty') //Verificar se realmente não tem texto
            .and('be.enabled') //Verificar se o campo está habilitado para ser preenchido


        cy.get('[style="width: 304px; height: 78px;"] > div > iframe') //Validando "CAPTCHA"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível


        cy.get('.controls > a.botao') //Validando botão "Fechar"
            .should('have.text', 'Fechar') //Validando botão texto dentro do botão "Fechar"
            .and('not.have.attr', 'disabled') //erifica se o botão não tem o atributo disabled, confirmando que ele está habilitado

        cy.get('.controls > .principal') //Validando botão "Enviar"
            .should('have.text', 'Enviar') //Validando botão texto dentro do botão "Enviar"
            .and('not.have.attr', 'disabled') //erifica se o botão não tem o atributo disabled, confirmando que ele está habilitado

        cy.wait(1500)

        cy.get(':nth-child(1) > :nth-child(1) > b') //Texto "Razão Social:"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Razão Social:') //Validando texto "Razão Social:"
            .and('have.text', 'Razão Social:') //Validando exatamente o texto "Razão Social:"

        cy.get('tbody > :nth-child(1) > :nth-child(2) > .cor-secundaria') //Validando texto "L M ARTIGOS ESPORTIVOS LTDA"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'L M ARTIGOS ESPORTIVOS LTDA') //Validando texto "L M ARTIGOS ESPORTIVOS LTDA"
            .and('have.text', 'L M ARTIGOS ESPORTIVOS LTDA') //Validando exatamente o texto "L M ARTIGOS ESPORTIVOS LTDA"

        
        cy.get(':nth-child(2) > :nth-child(1) > b') //Texto "CNPJ:"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'CNPJ:') //Validando texto "CNPJ:"
            //.and('have.text', 'CNPJ:') //Validando exatamente o texto "CNPJ:"

        cy.get(':nth-child(2) > :nth-child(2) > .cor-principal') //Validando texto "50.293.428/0001-48"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', '50.293.428/0001-48') //Validando texto "50.293.428/0001-48"
            .and('have.text', '50.293.428/0001-48') //Validando exatamente o texto "50.293.428/0001-48"

        
        cy.get(':nth-child(3) > :nth-child(1) > b') //Texto "Telefone:"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Telefone:') //Validando texto "Telefone:"
            //.and('have.text', 'Telefone:') //Validando exatamente o texto "Telefone:"

        cy.get(':nth-child(3) > :nth-child(2) > .cor-secundaria > a') //Validando texto "(44) 3224-5146"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', '(44) 3224-5146') //Validando texto "(44) 3224-5146"
            //.and('have.text', '(44) 3224-5146') //Validando exatamente o texto "(44) 3224-5146"


        cy.get(':nth-child(4) > :nth-child(1) > b') //Texto "Endereço::"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Endereço:') //Validando texto "Endereço::"
            //.and('have.text', 'Endereço:') //Validando exatamente o texto "Endereço::"

        cy.get(':nth-child(4) > :nth-child(2) > .cor-secundaria') //Validando texto "Av. Pioneira Devige Crepaldi Schiavoni, 1651 - Centro de Treinamento MFC, Jardim Tóquio, Maringá, PR - 87025-820"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Av. Pioneira Devige Crepaldi Schiavoni, 1651 - Centro de Treinamento MFC, Jardim Tóquio, Maringá, PR - 87025-820') //Validando texto "Av. Pioneira Devige Crepaldi Schiavoni, 1651 - Centro de Treinamento MFC, Jardim Tóquio, Maringá, PR - 87025-820"
            //.and('have.text', 'Av. Pioneira Devige Crepaldi Schiavoni, 1651 - Centro de Treinamento MFC, Jardim Tóquio, Maringá, PR - 87025-820') //Validando exatamente o texto "Av. Pioneira Devige Crepaldi Schiavoni, 1651 - Centro de Treinamento MFC, Jardim Tóquio, Maringá, PR - 87025-820"


        cy.get(':nth-child(5) > :nth-child(1) > b') //Texto "Email:"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Email:') //Validando texto "Email:"
            //.and('have.text', 'Email:') //Validando exatamente o texto "Email:"

        cy.get(':nth-child(5) > :nth-child(2) > .cor-secundaria > a') //Validando texto "mfcstore@mgafc.com.br"
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'mfcstore@mgafc.com.br') //Validando texto "mfcstore@mgafc.com.br"
            //.and('have.text', 'mfcstore@mgafc.com.br') //Validando exatamente o texto "mfcstore@mgafc.com.br"

        
        cy.get('.form-horizontal > .modal-body') //Validando maps
            .should('exist') //Validando a existencia do maps
            .and('be.visible') //validando a visibilidade do maps

        cy.get('.icon-remove')
            .should('exist') //Validando a existencia do X para sair
            .and('be.visible') //validando a visibilidade do X para sair
            .click() //Clicando para sair do card

        cy.wait(1500)


        cy.get('.links-rodape-paginas > ul > :nth-child(2) > a')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Sobre o Maringá FC') //Validando texto linkado
            .and('have.attr', 'href', 'https://store.maringafc.com/pagina/sobre-o-maringa-fc.html') //Validando link que manda 
            .and('not.have.attr', 'disabled') //Validando se não está desabilitado

        cy.get('.links-rodape-paginas > ul > :nth-child(3) > a')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Meios de pagamento e de frete') //Validando texto linkado
            .and('have.attr', 'href', 'https://store.maringafc.com/pagina/meios-de-pagamento-e-de-frete.html') //Validando link que manda 
            .and('not.have.attr', 'disabled') //Validando se não está desabilitado    

        cy.get('.links-rodape-paginas > ul > :nth-child(4) > a')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Política de Trocas e Devoluções') //Validando texto linkado
            .and('have.attr', 'href', 'https://store.maringafc.com/pagina/politica-de-trocas-e-devolucoes.html') //Validando link que manda 
            .and('not.have.attr', 'disabled') //Validando se não está desabilitado    


        // SOBRE A LOJA //


        cy.get('.sobre-loja-rodape > .titulo')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Sobre a loja') //Validando texto "Sobre a loja"
            .and('have.text', 'Sobre a loja') //Validando exatamente o texto "Sobre a loja"

        cy.get('.sobre-loja-rodape > p')
            .should('exist') //Validando se existe
            .and('be.visible') //Validando se está visível
            .and('contain', 'Aqui você encontra os produtos oficiais e licenciados do MFC para completar a sua coleção e mostrar todo seu amor ao tricolor maringaense. Confira!') //Validando texto
            

        // SOCIAL //


        cy.get('.redes-sociais > .titulo')
            .should('exist') //Validando a existencia do maps
            .and('be.visible') //validando a visibilidade do maps
            .and('have.text', 'Social') //Validando texto "Social"

        //Validando ícone do Twitter
        cy.get('a[href="https://twitter.com/maringafc"]') //Validando ícone do Twitter
            .should('have.attr', 'target', '_blank')
            .invoke('removeAttr', 'target')
            .should('be.visible'); //Validando que o ícone está aparecendo

        //Validando ícone do YouTube
        //cy.get('a[href="https://youtube.com.br/mfctvoficial"]') //Validando ícone do Youtube
        //    .should('have.attr', 'target', '_blank')
        //    .invoke('removeAttr', 'target')
        //    .should('be.visible'); //Validando que o ícone está aparecendo

        //Validando ícone do Instagram
        //cy.get('a[href="https://instagram.com/maringafc"]') //Validando ícone do Instagram
        //    .should('have.attr', 'target', '_blank')
        //    .invoke('removeAttr', 'target')
        //    .should('be.visible'); //Validando que o ícone está aparecendo

        //Validando ícone do Fale Conosco
        //cy.get('a[href="https://maringafc.com/noticia/"]') //Validando ícone do site de notícias do Maringá FC
        //    .should('have.attr', 'target', '_blank')
        //    .invoke('removeAttr', 'target')
        //    .should('be.visible'); //Validando que o ícone está aparecendo


    // Pague com //


    cy.get('.pagamento > .titulo') //Validando "Pague com"
        .should('exist') //Validando se existe
        .and('be.visible') //Validando se está visível
        .and('contain', 'Pague com') //Validando texto "Pague com"
        .and('have.text', 'Pague com') //Validando exatamente o texto "Pague com"

    cy.get('.selos > .titulo')
        .should('exist') //Validando se existe
        .and('be.visible') //Validando se está visível
        .and('contain', 'Selos') //Validando texto "Selos"
        .and('have.text', 'Selos') //Validando exatamente o texto "Selos"

    cy.get(':nth-child(1) > .icone-pagamento') //ícone VISA
        .should('exist') //Validando se o ícone existe
        .and('be.visible') //Validando se ícone está visível

    cy.get(':nth-child(2) > .icone-pagamento') //Ícone MasterCard
        .should('exist') //Validando se o ícone existe
        .and('be.visible') //Validando se ícone está visível

    cy.get(':nth-child(3) > .icone-pagamento') //Ícone Hipercard
        .should('exist') //Validando se o ícone existe
        .and('be.visible') //Validando se ícone está visível

    cy.get(':nth-child(4) > .icone-pagamento') //Ícone Elo
        .should('exist') //Validando se o ícone existe
        .and('be.visible') //Validando se ícone está visível

    cy.get(':nth-child(5) > .icone-pagamento') //Ícone Diners
        .should('exist') //Validando se o ícone existe
        .and('be.visible') //Validando se ícone está visível

    cy.get(':nth-child(6) > .icone-pagamento') //ícone American Express
        .should('exist') //Validando se o ícone existe
        .and('be.visible') //Validando se ícone está visível

    cy.get(':nth-child(5) > .icone-pagamento') //ícone Boleto Bancário
        .should('exist') //Validando se o ícone existe
        .and('be.visible') //Validando se ícone está visível

    cy.get('.logo-rodape-mercadopagov1') //Ícone Mercado Pago
        .should('exist') //Validando se o ícone existe
        .and('be.visible') //Validando se ícone está visível

    cy.get('.selos > ul > li > img') //Ícone site protegido
        .should('exist') //Validando se o ícone existe
        .and('be.visible') //Validando se ícone está visível


    cy.get('.span9 > p')
        .should('exist') //Validando se existe
        .and('be.visible') //Validando se está visível
        .and('contain', 'L M ARTIGOS ESPORTIVOS LTDA - CNPJ: 50.293.428/0001-48') //Validando texto 
        .and('contain', '© Todos os direitos reservados. 2024') //Validando texto

    cy.get('[style="min-height: 30px; text-align: center; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; float: left; opacity: 1 !important; display: block !important; visibility: visible !important; height: 40px !important; width: 100% !important; margin: 0 !important; position: static !important;"] > a > img')
        .should('exist') //Validando se o ícone "Loja integrada" existe 
        .and('be.visible') //Validando se ícone "Loja integrada" está visível


  
    })
})