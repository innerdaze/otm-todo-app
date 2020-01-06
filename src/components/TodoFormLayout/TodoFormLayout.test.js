import React from 'react'
import { render } from '../../test-utils'
import TodoFormLayout from './TodoFormLayout'

test('renders an empty text field when no formData is passed', () => {
  const { getByLabelText } = render(<TodoFormLayout />)

  expect(getByLabelText('Todo')).toHaveValue('')
})

test('renders a text field with a value when formData is passed', () => {
  const { getByLabelText } = render(
    <TodoFormLayout formData={{ text: 'TEST' }} />
  )

  expect(getByLabelText('Todo')).toHaveValue('TEST')
})

test('renders just a Save button when no formData is passed', () => {
  const { getByTestId, queryByTestId } = render(<TodoFormLayout />)

  expect(getByTestId('todoFormLayout-button-save')).toBeInTheDocument()
  expect(queryByTestId('todoFormLayout-button-delete')).not.toBeInTheDocument()
})

test('renders Save & Delete buttons when formData is passed', () => {
  const { getByTestId } = render(<TodoFormLayout formData={{ text: 'TEST' }} />)

  expect(getByTestId('todoFormLayout-button-save')).toBeInTheDocument()
  expect(getByTestId('todoFormLayout-button-delete')).toBeInTheDocument()
})
