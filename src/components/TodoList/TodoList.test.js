import React from 'react'
import { render } from '../../test-utils'
import TodoList from './TodoList'

const mockState = {
  todos: [
    { id: '1', text: 'TEST 1' },
    { id: '2', text: 'TEST 2' }
  ]
}

test('renders todo items when state.todos.length > 1', () => {
  const { getByTestId } = render(<TodoList />, {}, mockState)

  expect(getByTestId('todoListItem-1')).toBeInTheDocument()
  expect(getByTestId('todoListItem-2')).toBeInTheDocument()
})
