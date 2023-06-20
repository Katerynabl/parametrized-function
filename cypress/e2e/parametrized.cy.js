describe('multiple tests', () => {
const testGoogle = (testData, expectedResult) =>
    function () {
    cy.visit('https://google.com');
    cy.get('textarea.gLFyf').type(`${testData}`);
    cy.get('div.wM6W7d').should('contain', `${expectedResult}`)
};


it("Search for cypress", testGoogle('CYPRESS', 'cypress'));
it("Search for audi", testGoogle('AUDI', 'audi'));
it("Search for cypress", testGoogle('BMW', 'bmw'));   
})




describe('Multiple tests', () => {
    const tests = [
        {testData: 'CYPRESS', expectedResult: 'cypress'},
        {testData: 'AUDI', expectedResult: 'audi'},
        {testData: 'BMW', expectedResult: 'bmw'},
    ]

    tests.forEach(({testData, expectedResult}) => {
        it(`Test ${testData}`, () => {
            cy.visit('https://google.com');
            cy.get('textarea.gLFyf').type(testData);
            cy.get('div.wM6W7d').should('contain', expectedResult);
        })
    })
})