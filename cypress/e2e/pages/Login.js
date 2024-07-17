class Login {

    elements = {
        username :() => cy.get('#user-name'),
        password :() => cy.get('#password'),
        loginButton : ()=> cy.get('#login-button'),
        errorNotification : ()=> cy.get("div.error-message-container h3[data-test='error']")
    }

    openPage(){
        cy.visit('https://www.saucedemo.com');
    }

    loginwithUserDetails(userName, pass){
        this.elements.username().type(userName);
        this.elements.password().type(pass);
        this.elements.loginButton().click();
    }

    loginIfRequired(username, password){
        cy.visit('https://www.saucedemo.com/inventory.html').then()
        let currentUrl = cy.url().then(url=>{
            return url;
        });
        if(!currentUrl.contains('inventory')){
            loginwithUserDetails(username, password);
        }

    }

}
module.exports = new Login();