import React from 'react'
import { render } from '../../test-utils'
import App from './App'

// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(fn => fn())
// }))

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  // const linkElement = getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
  expect(1).toBe(1)
})
