import React from 'react'
import { render, screen } from '@testing-library/react'
import Search from '../../components/Search'

describe('Input component', () => {
	test('Should be able to render the search input', () => {
		render(<Search />)
		expect(screen.getByPlaceholderText('Insira o CEP')).toBeTruthy()
	})
})
