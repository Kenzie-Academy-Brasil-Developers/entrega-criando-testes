import React from 'react'
import { render, screen } from '@testing-library/react'
import Search from '../../components/Search'

describe('Button component', () => {
	test('Should be able to render the search button', () => {
		render(<Search />)
		expect(screen.getByRole('button')).toBeInTheDocument()
	})
})
