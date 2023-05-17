describe('Positive test-suit', () => {
  it('Test-1', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test-2', () => {
    cy.visit('https://example.cypress.io')
  })

  it.skip('Test-3', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test-4', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Negative test-suit', () => {
    it('Test-1', () => {
      cy.visit('https://example.cypress.io')
    })
  
    it('Test-2', () => {
      cy.visit('https://example.cypress.io')
    })
  
    it.skip('Test-3', () => {
      cy.visit('https://example.cypress.io')
    })
  
    it('Test-4', () => {
      cy.visit('https://example.cypress.io')
    }) 
  })

describe('Some another test-suit', () => {
  it('Test-1', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test-2', () => {
    cy.visit('https://example.cypress.io')
  })

  it.skip('Test-3', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test-4', () => {
    cy.visit('https://example.cypress.io')
  }) 


    describe.skip('Another tests for describe', () => {
      it('Test-1', () => {
        cy.visit('https://example.cypress.io')
      }) 
      it('Test-2', () => {
        cy.visit('https://example.cypress.io')
      })
    
      it.skip('Test-3', () => {
        cy.visit('https://example.cypress.io')
      })
    
      it.only('Test-4', () => {
        cy.visit('https://example.cypress.io')
      }) 
  })

})



