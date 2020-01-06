import React from 'react'
import { render } from '../../test-utils'
import TodoApp from './TodoApp'
import { fireEvent, wait } from '@testing-library/react'

test('renders title', () => {
  const { getByText } = render(<TodoApp />)

  expect(getByText('Todos')).toBeInTheDocument()
})

test('renders "Add Todo" button that navigates to /add', async () => {
  const { getByText } = render(<TodoApp />)

  const button = getByText('Add Todo')

  expect(button).toBeInTheDocument()

  fireEvent.click(button)

  await wait(() => expect(window.location.href).toBe('http://localhost/add'))
})
