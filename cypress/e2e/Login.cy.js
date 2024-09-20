describe('Login', () => {

  
    it('Login caminho feliz, passar login e senha corretos', () => {
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
            .click()                          //Clicar em "Minha Conta"

        // ENTRANDO NA TELA DE LOGIN
        
        cy.wait(2000)

        cy.get('.form-horizontal > fieldset > .titulo')
            .should('contain','Já sou cadastrado') //Validando texto "Já sou cadastrado"

        cy.get('fieldset > :nth-child(2) > .control-label')
            .should('contain','E-mail:') //Validando texto "E-mail:"
            
        cy.get(':nth-child(3) > .control-label')
            .should('contain','Senha:') //Validando texto "Senha:"

        cy.get('.recuperar-senha')
            .should('contain','Esqueceu a senha ou precisa criar?') //Validando texto "Esqueceu a senha ou precisa criar?"  
            
        cy.wait(2000)

        cy.get('.controls > #id_email')
            .type('camargolucasnasc@gmail.com') //Passando email para logar

        cy.wait(2000)

        cy.get('#id_senha')
            .type('@Lcn1998') //Passando senha para logar

        cy.wait(2000)

        cy.get('.controls > .botao')
            .should('contain','Prosseguir') //Validando texto dentro do botão "Prosseguir"
            .click() //Clicando no botão "Prosseguir"

        

    })
})