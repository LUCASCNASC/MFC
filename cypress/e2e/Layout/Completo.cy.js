describe('Validando Completa do Layout', () => {

  
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
            
        //cy.get('.row-fluid > .lista-redes > ul > :nth-child(1) > a > .icon-facebook')
        //    .click() //Clicando no ícone do facebook, para ir até a página
  
    })

    it('Validando ícone do Twitter', () => {
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
            
        //cy.get('.row-fluid > .lista-redes > ul > :nth-child(2) > a > .icon-twitter')
            //.click() //Clicando no ícone do Twitter, para ir até a página
  
    })

    it('Validando ícone do Youtube', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.wait(2000)


        cy.get('a[href="https://youtube.com.br/mfctvoficial"]') //Validando ícone do Youtube
            //.should('have.attr', 'target', '_blank')
            //.invoke('removeAttr', 'target')
            .should('be.visible'); //Validando que o ícone está aparecendo

        cy.wait(2000)
            
        //cy.get('.row-fluid > .lista-redes > ul > :nth-child(3) > a > .icon-youtube')
        //    .click() //Clicando no ícone do Youtube, para ir até a página
  
    })

    it('Validando ícone do Instagram', () => {
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
            
        //cy.get('.row-fluid > .lista-redes > ul > :nth-child(3) > a > .icon-youtube')
        //    .click() //Clicando no ícone do Instagram, para ir até a página
  
    })

    it('Validando ícone do site de notícias do Maringá FC', () => {
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
            
        //cy.get('.row-fluid > .lista-redes > ul > :nth-child(5) > a > .icon-bold')
        //    .click() //Clicando no ícone do site de notícias do Maringá FC, para ir até a página
  
    })

    it('Validando o restante da faixa preta superior do site', () => {
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

    it('Validando menus laterais', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube') //verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();


        // VALIDANDO OPÇÕES DO MASCULINO //

        cy.get(':nth-child(1) > .menu > .nivel-um > .categoria-id-6625401 > [href="https://store.maringafc.com/publicomasculino"]')
            .trigger('mouseover') //Ficar com o foco em cima do elemento
            .should('contain','MASCULINO') //Validando opção "MASCULINO"
            .realHover() //Cursor ficar em cima do elemento principal para aparecer os outros elementos
            .and('be.visible'); //Validando que o ícone está aparecendo

        cy.get('.categoria-id-20938344')
            .should('contain','Calças') // Validando "Calças", opção do menu "MASCULINO"
            //.should('be.visible') // Validando "Calças", opção do menu "MASCULINO"
            //.scrollTo(0, currentScrollY - 100)
            

        cy.get('.categoria-id-10356645')
            .should('contain','CAMISAS OFICIAIS MASCULINAS') // Validando "CAMISAS OFICIAIS MASCULINAS", opção do menu "MASCULINO"
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356668')
            .should('contain','CAMISETAS CASUAIS') // Validando "CAMISETAS CASUAIS", opção do menu "MASCULINO"
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-20391836')
            .should('contain','JAQUETAS') // Validando "JAQUETAS", opção do menu "MASCULINO"
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356707')
            .should('contain','MOLETONS') // Validando "MOLETONS", opção do menu "MASCULINO" 
            //.and('be.visible'); //Validando que o texto está aparecendo  

        cy.wait(1000)


        //Validando opções do "UNISSEX"

        cy.get(':nth-child(1) > .menu > .nivel-um > .categoria-id-17553089 > [href="https://store.maringafc.com/unissex"]')
            .trigger('mouseover') //Ficar com o foco em cima do elemento
            .should('contain','UNISSEX') //Validando opção "UNISSEX"
            .realHover() //Cursor ficar em cima do elemento principal para aparecer os outros elementos
            .and('be.visible'); //Validando que o ícone está aparecendo

        cy.get('.categoria-id-20012689')
            .should('contain','MOLETONS') // Validando "MOLETONS", opção do menu "UNISSEX" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.wait(1000)


        //Validando opções do "FEMININO"

        cy.get(':nth-child(1) > .menu > .nivel-um > .categoria-id-8355122 > [href="https://store.maringafc.com/linha-feminina"]')
            .trigger('mouseover') //Ficar com o foco em cima do elemento
            .should('contain','FEMININO') //Validando opção "FEMININO"
            .realHover() //Cursor ficar em cima do elemento principal para aparecer os outros elementos
            .should('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356602')
            .should('contain','CAMISAS OFICIAIS FEMININAS') // Validando "CAMISAS OFICIAIS FEMININAS", opção do menu "FEMININO" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356608')
            .should('contain','ROUPAS DIVERSAS FEMININAS') // Validando "ROUPAS DIVERSAS FEMININAS", opção do menu "FEMININO" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.wait(1000)



        //Validando opções do "ACESSÓRIOS MFC"
        
        cy.get(':nth-child(1) > .menu > .nivel-um > .categoria-id-6625289 > [href="https://store.maringafc.com/acessorios"]')
            .trigger('mouseover') //Ficar com o foco em cima do elemento
            .should('contain','ACESSÓRIOS MFC') //Validando opção "ACESSÓRIOS MFC"
            .realHover() //Cursor ficar em cima do elemento principal para aparecer os outros elementos
            .should('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-20393340')
            .should('contain','BANDEIRAS') // Validando "BANDEIRAS", opção do menu "ACESSÓRIOS MFC" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-20393828')
            .should('contain','BOLA') // Validando "BOLA", opção do menu "ACESSÓRIOS MFC" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356574')
            .should('contain','BONÉS') // Validando "BONÉS", opção do menu "ACESSÓRIOS MFC" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356582')
            .should('contain','COPOS E CANECAS') // Validando "COPOS E CANECAS", opção do menu "ACESSÓRIOS MFC" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356576')
            .should('contain','LINHA CHURRASCO MFC') // Validando "LINHA CHURRASCO MFC", opção do menu "ACESSÓRIOS MFC" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-10356694')
            .should('contain','MOCHILAS E BOLSAS') // Validando "MOCHILAS E BOLSAS", opção do menu "ACESSÓRIOS MFC" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        
        //Validando opções do "INFANTIL"

        cy.get(':nth-child(1) > .menu > .nivel-um > .categoria-id-3977525 > [href="https://store.maringafc.com/linha-infantil"]')
            .trigger('mouseover') //Ficar com o foco em cima do elemento    
            .should('contain','INFANTIL') //Validando opção "INFANTIL"
            .realHover() //Cursor ficar em cima do elemento principal para aparecer os outros elementos
            .should('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-7400759')
            .should('contain','LINHA BABY') // Validando "LINHA BABY", opção do menu "ACESSÓRIOS MFC" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.categoria-id-20375269')
            .should('contain','LINHA INFANTIL') // Validando "LINHA INFANTIL", opção do menu "ACESSÓRIOS MFC" 
            //.and('be.visible'); //Validando que o texto está aparecendo

        cy.wait(1000)


        //Validando opções do "Newsletter"

        cy.get(':nth-child(2) > .span > .componente > .interno > .titulo')
            .should('exist') //Validando se texto existe
            .and('be.visible') //Validando se o texto está visível
            .and('contain','Newsletter') //Validando se é exatamente o texto "Newsletter"

        cy.get(':nth-child(2) > .span > .componente > .interno > .titulo > .icon-envelope-alt')
            .should('exist') //Validando se o ícone de e-mail existe
            .and('be.visible') //Validando se o ícone de e-mail está visível

        cy.get(':nth-child(2) > .span > .componente > .interno > .interno-conteudo > .texto-newsletter')
            .should('exist') //Validando se texto existe
            .and('be.visible') //Validando se o texto está visível
            .and('have.text','Receba nossas ofertas por e-mail') //Validando se é exatamente o texto "Receba nossas ofertas por e-mail"

        cy.get(':nth-child(2) > .span > .componente > .interno > .interno-conteudo > .input-conteiner > input')
            .should('have.attr', 'placeholder', 'Digite seu email') //Validando mensagem dentro do campo limpo
            .should('exist') //Validando se o campo de e-mail existe
            .and('be.visible') //Validando se o campo de e-mail está visível
            .and('have.value','') //Validando se o campo está limpo

        cy.get(':nth-child(2) > .span > .componente > .interno > .interno-conteudo > .input-conteiner > .botao')
            .should('exist') //Validando se o ícone ">" existe
            .and('be.visible') //Validando se o ícone ">" está visível

    })

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


