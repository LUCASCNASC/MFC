describe('Login', () => {

  
    it('Validando após login', () => {

        const usulogado = "Lucas Camargo do Nascimento" //Criando variável para usuário logado
        const emailusu = "camargolucasnasc@gmail.com" //Criando variável para e-mail do usuário logado

        cy.login('camargolucasnasc@gmail.com', '@Lcn1998'); // Chama o comando de login

        cy.wait(8000)

        //cy.get('[title="Close"]')
        //    .click();
       

        // VALIDAÇÃO DA TELA //

        //Mensagem inicial "Olá, ..."
        cy.get('.btn-group > .botao')
            .should('exist') //Validando que o texto existe
            .and('contain','Olá,') //Validando texto
            .and('contain','Lucas Camargo do Nascimento') //Validando texto/nome do usuário
            .and('be.visible') //Validando se texto está visível
        
        //Validando "Lucas Camargo do Nascimento"
        
        cy.get('.menu-user-name')

        //Validando opções do "Olá, ..." (seta para baixo)
        cy.get('.botao > .icon-chevron-down')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .wait(1000)
            .click() //Clicando para ver as opções da "Seta para baixo"

        //Validar "Minha Conta" - mensagem inicial
        cy.get('.dropdown-menu > :nth-child(1) > a')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Minha conta') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/index') //Validando HREF

        //Validar "Meus pedidos" - mensagem inicial
        cy.get('.dropdown-menu > :nth-child(2) > a')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Meus pedidos') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/pedido/listar') //Validando HREF

        //Validar "Meus favoritos" - mensagem inicial
        cy.get('.dropdown-menu > :nth-child(3) > a')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Meus favoritos') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/favorito/listar') //Validando HREF
            
        //Validar "Sair" - mensagem inicial
        cy.get('.dropdown-menu > :nth-child(4) > a')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Sair') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado

        cy.wait(1000)

        //Botão "para baixo"
        cy.get('.botao > .icon-chevron-down')
            .click() //Fechar opções

        cy.wait(1000)

        //Ícone casinha "Página inicial"
        cy.get('a > .icon-home')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível

        //Texto "Página inicial"
        cy.get('.breadcrumbs > ul > :nth-child(1) > a')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Página inicial') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado
            .and('have.attr', 'href', 'https://store.maringafc.com/') //Validando HREF

        //Mensagem "Minha conta" - ao lado de "Página inicial"
        cy.get('.breadcrumbs > ul > :nth-child(2) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Minha conta') //Validando se é exatamente aquele texto

        cy.wait(1000)

        // Infomações do lado esquerdo da tela // -----

        //Ícone pessoa - ao lado do nome da pessoa
        cy.get('.nome-usuario > .icon-user')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível

        //Nome da pessoa - ao lado ícone da pessoa
        cy.get('.nome-usuario')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Lucas Camargo do Nascimento') //Validando se é exatamente aquele texto

        //Ícone de pessoa - ao lado de "Minha conta"
        cy.get('.menu-simples > :nth-child(1) > a > .icon-user')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('not.be.disabled') //Validando se o elemento não está desabilitado

        //"Minha conta" - ao lado do ícone pessoa
        cy.get('.menu-simples > :nth-child(1) > a')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Minha conta') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/index') //Validando HREF


        //Ícone de pessoa - ao lado de "Cartões Salvos"
        cy.get('.icon-credit-card')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('not.be.disabled') //Validando se o elemento não está desabilitado

        //"Cartões Salvos" - ao lado do ícone cartão
        cy.get('.menu-simples > :nth-child(2) > a')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Cartões Salvos') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/cartoes_salvos') //Validando HREF


        //Ícone de Alterar Senha - ao lado de "Alterar Senha"
        cy.get('.menu-simples > :nth-child(3) > a > .icon-unlock-alt')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('not.be.disabled') //Validando se o elemento não está desabilitado

        //"Alterar Senha" - ao lado do ícone Alterar Senha
        cy.get('.menu-simples > :nth-child(3) > a')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Alterar Senha') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/alterar_senha') //Validando HREF


        //Ícone de Meus Pedidos - ao lado de "Meus Pedidos"
        cy.get(':nth-child(5) > a > .icon-list-alt')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('not.be.disabled') //Validando se o elemento não está desabilitado

        //"Meus Pedidos" - ao lado do ícone Meus Pedidos
        cy.get('.menu-simples > :nth-child(5) > a')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Meus Pedidos') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/pedido/listar') //Validando HREF


        //Ícone de Lista de Desejos - ao lado de "Lista de Desejos"
        cy.get(':nth-child(7) > a > .icon-star')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('not.be.disabled') //Validando se o elemento não está desabilitado

        //"Lista de Desejos" - ao lado do ícone Lista de Desejos
        cy.get(':nth-child(7) > a')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Lista de Desejos') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/favorito/listar') //Validando HREF

        cy.wait(1000)


        // MINHA CONTA // - central

        //Ícone Minha Conta - central
        cy.get('.active > .titulo > .icon-user')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível


        //Título "Minha Conta"- central
        cy.get('.active > .titulo')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Minha Conta') //Validando se é exatamente aquele texto
            .should('not.be.disabled') //Validando se o elemento não está desabilitado
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/index') //Validando HREF

        //Título "Minha Conta"- central - segundo
        cy.get('.abas-conteudo > :nth-child(1) > .titulo')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Minha Conta') //Validando se é exatamente aquele texto

        //"Confirme ou edite seus dados cadastrais."
        cy.get(':nth-child(1) > .titulo > small')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Confirme ou edite seus dados cadastrais.') //Validando se é exatamente aquele texto

        
        //Ícone de "Dados Cadastrais"
        cy.get('legend.cor-secundaria > .icon-list')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível

        //Texto "Dados Cadastrais"
        cy.get(':nth-child(1) > .row-fluid > :nth-child(1) > fieldset > legend.cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Dados Cadastrais') //Validando se é exatamente aquele texto

        
        //Título "Nome:"
        cy.get(':nth-child(1) > fieldset > .caixa-info > :nth-child(1) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Nome:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "Nome:"
        cy.get(':nth-child(1) > fieldset > .caixa-info > :nth-child(1) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain',usulogado) //Validando se é exatamente aquele texto

        
        //Título "Sexo:"
        cy.get(':nth-child(1) > fieldset > .caixa-info > :nth-child(2) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Sexo:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "Sexo:"
        cy.get(':nth-child(1) > fieldset > .caixa-info > :nth-child(2) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Masculino') //Validando se é exatamente aquele texto


        //Título "Data de nascimento:"
        cy.get(':nth-child(1) > fieldset > .caixa-info > :nth-child(3) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Data de nascimento:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "Data de nascimento:"
        cy.get(':nth-child(1) > fieldset > .caixa-info > :nth-child(3) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Set. 30, 1998') //Validando se é exatamente aquele texto


        //Título "Email:"
        cy.get(':nth-child(1) > fieldset > .caixa-info > :nth-child(4) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Email:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "Email:"
        cy.get(':nth-child(1) > fieldset > .caixa-info > :nth-child(4) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain',emailusu) //Validando se é exatamente aquele texto


        //Título "Telefone celular:"
        cy.get(':nth-child(5) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Telefone celular:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "Telefone celular:"
        cy.get('.caixa-info > :nth-child(5) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','(44) 98448-3530') //Validando se é exatamente aquele texto


        //Título "Telefone residencial:"
        cy.get(':nth-child(6) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Telefone residencial:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "Telefone residencial:"
        cy.get(':nth-child(6) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','(44) 3266-3078') //Validando se é exatamente aquele texto


        //Ícone do botão "Alterar Senha"
        cy.get('.pull-left > .icon-unlock-alt')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível

        //Botão "Alterar Senha"
        cy.get('.pull-left')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível 
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/alterar_senha') //Validando HREF
            .and('contain','Alterar Senha') //Validando se é exatamente aquele texto


        //Ícone do botão "Editar dados cadastrais"
        cy.get(':nth-child(1) > fieldset > .acao-editar > .principal > .icon-edit')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível

        //Botão "Editar dados cadastrais"
        cy.get(':nth-child(1) > fieldset > .acao-editar > .principal')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível 
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/editar') //Validando HREF
            .and('contain','Editar dados cadastrais') //Validando se é exatamente aquele texto
           
        cy.wait(1000)

        //Ícone de "Tipo de Cadastro"
        cy.get('.icon-group')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível

        //Texto "Tipo de Cadastro"
        cy.get(':nth-child(2) > :nth-child(1) > legend.cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Tipo de Cadastro') //Validando se é exatamente aquele texto


        //Título "Tipo de cadastro:"
        cy.get(':nth-child(2) > :nth-child(1) > .caixa-info > :nth-child(1) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Tipo de cadastro:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "Tipo de cadastro:"
        cy.get(':nth-child(2) > :nth-child(1) > .caixa-info > :nth-child(1) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Pessoa Física') //Validando se é exatamente aquele texto


        //Título "CPF:"
        cy.get(':nth-child(2) > :nth-child(1) > .caixa-info > :nth-child(2) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','CPF:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "CPF:"
        cy.get(':nth-child(2) > :nth-child(1) > .caixa-info > :nth-child(2) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','087.888.929-99') //Validando se é exatamente aquele texto

        
        //Ícone de "Endereço Principal"
        cy.get(':nth-child(2) > legend.cor-secundaria > .icon-map-marker')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível

        //Texto "Endereço Principal"
        cy.get(':nth-child(2) > legend.cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Endereço Principal') //Validando se é exatamente aquele texto

        //Título "Endereço:"
        cy.get(':nth-child(2) > .caixa-info > :nth-child(1) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Endereço:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "Endereço:"
        cy.get(':nth-child(2) > .caixa-info > :nth-child(1) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            //.and('contain','Pessoa Física') //Validando se é exatamente aquele texto

        //Título "Bairro:"
        cy.get(':nth-child(2) > .caixa-info > :nth-child(2) > :nth-child(1)')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Bairro:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "Bairro:"
        cy.get(':nth-child(2) > .caixa-info > :nth-child(2) > :nth-child(2)')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            //.and('contain','Pessoa Física') //Validando se é exatamente aquele texto

        //Título "Cidade / UF:"
        cy.get('.caixa-info > :nth-child(2) > :nth-child(3)')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Cidade / UF:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "Cidade / UF:"
        cy.get('.caixa-info > :nth-child(2) > :nth-child(4)')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            //.and('contain','Pessoa Física') //Validando se é exatamente aquele texto

        //Título "CEP:"
        cy.get(':nth-child(2) > .caixa-info > :nth-child(3) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','CEP:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "CEP:"
        cy.get(':nth-child(2) > .caixa-info > :nth-child(3) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            //.and('contain','Pessoa Física') //Validando se é exatamente aquele texto

        //Título "País:"
        cy.get(':nth-child(2) > .caixa-info > :nth-child(4) > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','País:') //Validando se é exatamente aquele texto

        //Validando informação cadastral: "País:"
        cy.get(':nth-child(2) > .caixa-info > :nth-child(4) > span')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            //.and('contain','Pessoa Física') //Validando se é exatamente aquele texto

    
        //Ícone do botão "Editar endereço principal"
        cy.get(':nth-child(2) > .acao-editar > .botao > .icon-edit')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível

        //Botão "Editar endereço principal"
        cy.get(':nth-child(2) > .acao-editar > .botao')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível 
            .and('have.attr', 'href', 'https://store.maringafc.com/conta/endereco/76107886/editar') //Validando HREF
            .and('contain','Editar endereço principal') //Validando se é exatamente aquele texto

        cy.wait(1000)

        //Título "Outros Endereços"
        cy.get('.outros-enderecos > .titulo')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Outros Endereços') //Validando se é exatamente aquele texto

        //Texto "Adicione novos endereços."
        cy.get('.outros-enderecos > .titulo > small')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Adicione novos endereços.') //Validando se é exatamente aquele texto
        
        //Ícone de localização
        cy.get(':nth-child(1) > fieldset > .cor-secundaria > .icon-map-marker')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível

        //Texto "Endereços Adicionais"
        cy.get('.outros-enderecos > :nth-child(2) > :nth-child(1) > fieldset > .cor-secundaria')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Endereços Adicionais') //Validando se é exatamente aquele texto

        //Ícone "+"
        cy.get('.icon-plus')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível

        //Texto Cadastrar novo endereço
        cy.get('.pull-right')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('contain','Cadastrar novo endereço') //Validando se é exatamente aquele texto

        //Texto "Não existe nenhum endereço adicional cadastrado.", quando não tem outro endereço cadastrado
        cy.get('fieldset > .row-fluid > .span12 > p')
            .should('exist') //Validando que o elemento existe
            .and('be.visible') //Validando se elemento está visível
            .and('have.text','Não existe nenhum endereço adicional cadastrado.') //Validando se é exatamente aquele texto
        
        
    })
})