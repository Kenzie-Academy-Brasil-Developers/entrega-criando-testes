context('SearchForACEP', () => {
	it('Should input a CEP and see the results', () => {
		cy.visit('http://localhost:3000')
		cy.viewport(1440, 900)

		cy.get('input').type('68037195')
		cy.get('button').click()
	})
})
