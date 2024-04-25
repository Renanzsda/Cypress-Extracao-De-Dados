class Login

{

    txtUserName = '[data-test="username"]';
    txtPassword = '[data-test="password"]';
    logginButton = '[data-test="login-button"]';
    verifyLogginSucess = '#header_container > div.primary_header > div.header_label > div';

setUserName(username)
{
    cy.get(this.txtUserName).should("be.visible").type(username);
}

setPassword(password)
{
    cy.get(this.txtPassword).should("be.visible").type(password);
}


clickSubmit(){
    cy.get(this.logginButton).click()
}

verifyLogin(){
    cy.get(this.verifyLogginSucess).should("have.text",'Swag Labs')
}

}

export default Login;