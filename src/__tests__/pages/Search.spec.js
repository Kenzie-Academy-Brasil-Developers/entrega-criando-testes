import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { Search } from '../../components/Search'
import api from '../../services'
import MockAdapter from 'axios-mock-adapter'

const apiMock = new MockAdapter(api)

describe('Search Page', () => {
	apiMock.onGet('/68037195').replyOnce(200, {})
	it('Should search for a Address', () => {
		render(<Search />)
		const input = screen.getByPlaceholderText('Insira o CEP')
		const button = screen.getByText('Buscar pelo CEP')

		fireEvent.change(input, { target: { value: 68037195 } })
		fireEvent.click(button)

		expect(input).toHaveValue('68037195')
	})
})
