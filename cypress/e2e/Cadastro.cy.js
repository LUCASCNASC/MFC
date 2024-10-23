describe('Cadastro', () => {

  //test
    it('Cadastro, Caminho feliz', () => {
        cy.visit('/');

        cy.title()
            .should('be.equal', 'MFC Store - A Loja Oficial do Maringá Futebol Clube')//verifico se é exatamente aquele título

        cy.wait(8000)

        //Removendo mensagem "Newsletter"
        cy.get('[title="Close"]')
            .click();

        cy.wait(3000)

        cy.get('.acoes-conta > :nth-child(2)')
            .should('contain', 'Minha Conta') //Validar "Minha Conta"
            .click() //Clicar em "Minha Conta"
            .location('pathname') //validando URL que abriu
            .should('equal','/conta/login') //validando URL que abriu

        cy.wait(2000)

        cy.get(':nth-child(2) > .caixa-sombreada')
            .should('contain', 'Ainda não possuo cadastro') //Validando texto
            .and('contain', 'Digite o email que deseja cadastrar:') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo
        
        cy.get('fieldset > div > #id_email')
            .type('camargolucasnasc@gmail.com {downArrow}') //inserindo e-mail

        cy.wait(2000)

        cy.get('fieldset > div > .botao')
            .should('contain', 'Cadastrar') //Validando texto
            .click() //Clicando no botão "Cadastrar"
            .should('be.visible'); //Validando que o texto está aparecendo
        
        cy.wait(3000)

        // DADOS PARA ACESSO

        cy.get('.cabecalho-interno > .span12 > .titulo') //Validando texto
            .should('contain', 'Identificação Faça o seu login ou crie uma conta caso ainda não possua cadastro')
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.dados-acesso > .span12 > .caixa-sombreada > fieldset > .titulo') //Validando texto
            .should('contain', 'Dados para acesso')
            .and('be.visible'); //Validando que o texto está aparecendo
        
        cy.get(':nth-child(2) > :nth-child(1) > .control-label') //Validando texto
            .should('contain', 'E-mail') 
            .and('be.visible'); //Validando que o texto está aparecendo

        //cy.get('#id_email') //Já vem preenchido

        cy.get(':nth-child(2) > :nth-child(2) > .control-label')
            .should('contain', 'Confirmar e-mail') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_confirmacao_email')
            .type('camargolucasnasc@gmail.com') //Preencher campo "Confirmar e-mail"

        cy.wait(2000)

        cy.get(':nth-child(4) > :nth-child(1) > .control-label')
            .should('contain', 'Crie uma senha') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_senha')
            .type('@Lcn1998') //Preencher campo "Crie uma senha"

        cy.wait(2000)

        cy.get(':nth-child(4) > :nth-child(2) > .control-label')
            .should('contain', 'Confirmar senha') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_confirmacao_senha')
            .type('@Lcn1998') //Preencher campo "Confirmar senha"

        cy.wait(2000)


        //TIPO DE CADASTRO

        cy.get('.tipo-cadastro > .span12 > .caixa-sombreada > fieldset > .titulo')
            .should('contain', 'Tipo de cadastro') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_tipo > :nth-child(1) > label')
            .should('contain', 'Pessoa Física') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_tipo > :nth-child(2) > label')
            .should('contain', 'Pessoa Jurídica') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_tipo_0')
            .click() //Clicando na check box "Pessoa Física"


        //DADOS PESSOAIS

        cy.get(':nth-child(1) > .caixa-sombreada > .form-horizontal > .titulo')
            .should('contain','Dados Pessoais') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo
            
        cy.get(':nth-child(1) > .caixa-sombreada > .form-horizontal > :nth-child(2) > .control-label')
            .should('contain', 'Nome completo') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_nome')
            .type('Lucas Camargo do Nascimento') //Preencher campo "Nome completo"

        cy.wait(1500)

        cy.get(':nth-child(1) > .caixa-sombreada > .form-horizontal > :nth-child(3) > .control-label')
            .should('contain', 'CPF') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_cpf')
            .type('08788892999') //Preencher campo "CPF"

        cy.wait(1500)

        cy.get(':nth-child(1) > .caixa-sombreada > .form-horizontal > :nth-child(7) > .control-label')
            .should('contain', 'Celular') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_telefone_celular')
            .type('44984483530') //Preencher campo "Celular"

        cy.wait(1500)

        cy.get(':nth-child(1) > .caixa-sombreada > .form-horizontal > :nth-child(8) > .control-label')
            .should('contain', 'Telefone fixo') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_telefone_principal')
            .type('4432663078') //Preencher campo "Telefone fixo"

        cy.wait(1500)

        cy.get(':nth-child(10) > .control-label')
            .should('contain', 'Sexo') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_sexo')
            .select('Masculino') //Selecionando "Masculino"

        cy.wait(1500)
        
        cy.get(':nth-child(11) > .control-label')
            .should('contain', 'Data de nascimento') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_data_nascimento')
            .type('30091998') //Preencher campo "Telefone fixo"


        // ENDEREÇO

        cy.get(':nth-child(2) > .caixa-sombreada > .form-horizontal > .titulo')
            .should('contain','Endereço') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_cep')
            .type('87065310') //Preencher campo "CEP"

        cy.get('.help-inline > a')
            .should('contain','Não sei meu cep') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.wait(1500)

        cy.get(':nth-child(2) > .caixa-sombreada > .form-horizontal > :nth-child(3) > .control-label')
            .should('contain','Endereço') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_endereco')
            .invoke('removeAttr', 'readonly')
            .type('Rua Lobélia') //Preencher campo "Endereço"

        cy.wait(1500)

        cy.get(':nth-child(2) > .caixa-sombreada > .form-horizontal > :nth-child(4) > .control-label')
            .should('contain', 'Número') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_numero')
            .type('54') //Preencher campo "Número"

        cy.wait(1500)

        cy.get(':nth-child(2) > .caixa-sombreada > .form-horizontal > :nth-child(5) > .control-label')
            .should('contain', 'Complemento') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_complemento')
            .type('casa') //Preencher campo "Complemento"

        cy.wait(1500)

        cy.get(':nth-child(2) > .caixa-sombreada > .form-horizontal > :nth-child(6) > .control-label')
            .should('contain','Referência') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_referencia')
            .type('UBS Jardim Industrial') //Preencher campo "Referência"

        cy.wait(1500)

        cy.get(':nth-child(2) > .caixa-sombreada > .form-horizontal > :nth-child(7) > .control-label')
            .should('contain','Bairro') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_bairro')
            .invoke('removeAttr', 'readonly')
            .type('Jardim Industrial') //Preencher campo "Bairro"

        cy.wait(1500)

        cy.get(':nth-child(2) > .caixa-sombreada > .form-horizontal > :nth-child(8) > .control-label')
            .should('contain','Cidade') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_cidade')
            .invoke('removeAttr', 'readonly')
            .type('Maringá') //Preencher campo "Cidade"

        cy.wait(1500)
        
        cy.get(':nth-child(2) > .caixa-sombreada > .form-horizontal > :nth-child(9) > .control-label')
            .should('contain','Estado') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('#id_estado')
            .select('Paraná') //Selecionar estado "Paraná"

        cy.wait(1500)

        cy.get('.span3 > a.botao')
            .should('contain','Cancelar') //Validando texto
            .and('be.visible'); //Validando que o texto está aparecendo

        cy.get('.span3 > .principal')
            .should('contain','Criar Conta') //Validando texto
            .click() //Clicar no botão "Criar Conta"

        cy.get('.alert')
            .should('contain','Cliente criado com sucesso') //Validando mensagem após criar conta 
            .and('be.visible'); //Validando que a mensagem está aparecendo

        
        

        



        

    })
})