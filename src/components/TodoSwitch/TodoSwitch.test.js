import React from 'react'
import { render } from '../../test-utils'
import TodoSwitch from './TodoSwitch'
import history from '../../history'

test('renders Todo screen for /', () => {
  const { getByTestId } = render(<TodoSwitch />)

  history.push('/')

  expect(getByTestId('todoAppLayout-title')).toHaveTextContent('Todo')
})

test('renders Add Todo screen for /add', () => {
  const { getByTestId } = render(<TodoSwitch />)

  history.push('/add')

  expect(getByTestId('todoAppLayout-title')).toHaveTextContent('Add Todo')
})

test('renders Edit Todo screen for /edit/1', () => {
  const { getByTestId } = render(<TodoSwitch />)

  history.push('/edit/1')

  expect(getByTestId('todoAppLayout-title')).toHaveTextContent('Edit Todo')
})
