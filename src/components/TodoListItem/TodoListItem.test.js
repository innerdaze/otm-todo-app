import React from 'react'
import { render } from '../../test-utils'
import TodoListItem from './TodoListItem'
import { fireEvent } from '@testing-library/react'

const mockState = {
  todos: [{ id: '1', text: 'TEST 1' }]
}

const mockStateCompleteItem = {
  todos: [{ id: '1', text: 'TEST 1', completed: true }]
}

test('renders todo items when state.todos.length > 1', () => {
  const { getByText } = render(<TodoListItem dataId="1" />, {}, mockState)

  expect(getByText('TEST 1')).toBeInTheDocument()
})

test('renders a button when item is not completed', () => {
  const { getByTestId } = render(<TodoListItem dataId="1" />, {}, mockState)

  expect(getByTestId('todoListItem-cell-2')).toContainElement(
    getByTestId('todoListItem-button')
  )
})

test('renders an icon when item is completed', () => {
  const { getByTestId } = render(
    <TodoListItem dataId="1" />,
    {},
    mockStateCompleteItem
  )

  expect(getByTestId('todoListItem-cell-2')).toContainElement(
    getByTestId('todoListItem-icon')
  )
})

test('clicking on button changes button to icon', () => {
  const { getByTestId } = render(<TodoListItem dataId="1" />, {}, mockState)

  fireEvent.click(getByTestId('todoListItem-button'))

  expect(getByTestId('todoListItem-cell-2')).toContainElement(
    getByTestId('todoListItem-icon')
  )
})
