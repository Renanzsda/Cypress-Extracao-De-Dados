// Função para converter os dados em CSV
/// <reference types="cypress" />

//Função para pegar os valores com cabeçalho
function convertToCSV(data) {
  const header =
    "Nome Produto, Valor\n";
  console.log(data);
  // Corrigindo a ordem dos elementos em rows
  const rows = `${data[0]}, ${data[1]}\n`;
  console.log(rows);
  return header + rows;
}

//Função para pegar os valores sem cabeçalho
function convertToCSVNoHeader(data) {
  console.log(data);
  // Corrigindo a ordem dos elementos em rows
  const rows = `${data[0]}, ${data[1]}\n`;
  console.log(rows);
  return rows;
}

//Comando de fazer login utilizando o fixture
Cypress.Commands.add('logar', () => {
  cy.fixture("dados.json").then((dado) => {
  cy.get('[data-test="username"]').should("be.visible").type(dado.username);
  cy.get('[data-test="password"]').should("be.visible").type(dado.senha);
  cy.get('[data-test="login-button"]').click()
  })
})

  describe("Extrair todos os dados em um arquivo CSV", () => {
    it("Extrair primeiro Produto", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.logar()

    const data = [];
  
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').then(($element) => {
      const NomeProduto = $element[0].innerText;
      // Faça o que quiser com o texto extraído, como exibir no console
      cy.log(NomeProduto);
      data.push(NomeProduto);
      cy.log(data);
      cy.wait(1000);
    })

    cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').then(($element) => {
      const ValorProduto = $element[0].innerText;
      // Faça o que quiser com o texto extraído, como exibir no console
      cy.log(ValorProduto);
      data.push(ValorProduto);
      cy.log(data);
      cy.wait(1000);
      console.log("ARRAY dentro: ", data);
      const csv = convertToCSV(data);
      cy.writeFile("ExtraçãoSau.csv", csv, { flag: 'a+' });
    });

  });

  it("Segundo Produto", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.logar()

    const data = [];
  
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').then(($element) => {
      const NomeProduto = $element[0].innerText;
      // Faça o que quiser com o texto extraído, como exibir no console
      cy.log(NomeProduto);
      data.push(NomeProduto);
      cy.log(data);
      cy.wait(1000);
    })

    cy.get(':nth-child(2) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').then(($element) => {
      const ValorProduto = $element[0].innerText;
      // Faça o que quiser com o texto extraído, como exibir no console
      cy.log(ValorProduto);
      data.push(ValorProduto);
      cy.log(data);
      cy.wait(1000);
      console.log("ARRAY dentro: ", data);
      const csv = convertToCSVNoHeader(data);
      cy.writeFile("ExtraçãoSau.csv", csv, { flag: 'a+' });
    });

  });

    
it("Terceiro Produto", () => {
  cy.visit("https://www.saucedemo.com/")
  cy.logar()

  const data = [];

  cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').then(($element) => {
    const NomeProduto = $element[0].innerText;
    // Faça o que quiser com o texto extraído, como exibir no console
    cy.log(NomeProduto);
    data.push(NomeProduto);
    cy.log(data);
    cy.wait(1000);
  })

  cy.get(':nth-child(3) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').then(($element) => {
    const ValorProduto = $element[0].innerText;
    // Faça o que quiser com o texto extraído, como exibir no console
    cy.log(ValorProduto);
    data.push(ValorProduto);
    cy.log(data);
    cy.wait(1000);
    console.log("ARRAY dentro: ", data);
    const csv = convertToCSVNoHeader(data);
    cy.writeFile("ExtraçãoSau.csv", csv, { flag: 'a+' });
  });

});

it("Quarto Produto", () => {
  cy.visit("https://www.saucedemo.com/")
  cy.logar()

  const data = [];

  cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').then(($element) => {
    const NomeProduto = $element[0].innerText;
    // Faça o que quiser com o texto extraído, como exibir no console
    cy.log(NomeProduto);
    data.push(NomeProduto);
    cy.log(data);
    cy.wait(1000);
  })

  cy.get(':nth-child(4) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').then(($element) => {
    const ValorProduto = $element[0].innerText;
    // Faça o que quiser com o texto extraído, como exibir no console
    cy.log(ValorProduto);
    data.push(ValorProduto);
    cy.log(data);
    cy.wait(1000);
    console.log("ARRAY dentro: ", data);
    const csv = convertToCSVNoHeader(data);
    cy.writeFile("ExtraçãoSau.csv", csv, { flag: 'a+' });
  });

});  

it("Quinto Produto", () => {
  cy.visit("https://www.saucedemo.com/")
  cy.logar()

  const data = [];

  cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').then(($element) => {
    const NomeProduto = $element[0].innerText;
    // Faça o que quiser com o texto extraído, como exibir no console
    cy.log(NomeProduto);
    data.push(NomeProduto);
    cy.log(data);
    cy.wait(1000);
  })

  cy.get(':nth-child(5) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').then(($element) => {
    const ValorProduto = $element[0].innerText;
    // Faça o que quiser com o texto extraído, como exibir no console
    cy.log(ValorProduto);
    data.push(ValorProduto);
    cy.log(data);
    cy.wait(1000);
    console.log("ARRAY dentro: ", data);
    const csv = convertToCSVNoHeader(data);
    cy.writeFile("ExtraçãoSau.csv", csv, { flag: 'a+' });
  });

});  


it("Sexto Produto", () => {
  cy.visit("https://www.saucedemo.com/")
  cy.logar()

  const data = [];

  cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').then(($element) => {
    const NomeProduto = $element[0].innerText;
    // Faça o que quiser com o texto extraído, como exibir no console
    cy.log(NomeProduto);
    data.push(NomeProduto);
    cy.log(data);
    cy.wait(1000);
  })

  cy.get(':nth-child(6) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').then(($element) => {
    const ValorProduto = $element[0].innerText;
    // Faça o que quiser com o texto extraído, como exibir no console
    cy.log(ValorProduto);
    data.push(ValorProduto);
    cy.log(data);
    cy.wait(1000);
    console.log("ARRAY dentro: ", data);
    const csv = convertToCSVNoHeader(data);
    cy.writeFile("ExtraçãoSau.csv", csv, { flag: 'a+' });
  });

}); 


});
