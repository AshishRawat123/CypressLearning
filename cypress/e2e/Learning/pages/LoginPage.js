class LoginPage{

    elements={
        username : ()=> cy.get('#user-name'),
        password : ()=> cy.get('#password'),
        loginbutton : () => cy.get('#login-button'),
        errorMessage : () => cy.get('.error-message-container.error')

    }

    open(){
        cy.visit('https://www.saucedemo.com');
    }

    login(username , password){
        this.elements.username().type(username);
        this.elements.password().type(password);
        this.elements.loginbutton().click();
    }
}
module.exports = new LoginPage()