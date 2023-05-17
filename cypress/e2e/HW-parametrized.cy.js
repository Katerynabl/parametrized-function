describe('Homework', () => {

            before(() => {
              cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
              cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
              cy.get('[title="Forms"]').click();
              cy.get('[title="Form Layouts"]').click();
            })

            const Filldata = (testData, expectedResult, testData1, expectedResult1)  => 
       
            function () {
            cy.get('#exampleInputEmail1').type(`${testData}`);
            cy.get('#exampleInputEmail1').should('contain.value', `${expectedResult}`);
            cy.get('#exampleInputPassword1').type(`${testData1}`);
            cy.get('#exampleInputPassword1').should('contain.value', `${expectedResult1}`);
            };
        it("Search for cypress", Filldata ('11111111@gmail.com', '11111111@gmail.com','Qwerty1!', 'Qwerty1!'));
         
     
    })
