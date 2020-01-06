import React from 'react'
import { render } from '../../test-utils'
import BackButton from './BackButton'
import { fireEvent } from '@testing-library/react'

test('goes to / when clicked', () => {
  const { container } = render(<BackButton />)

  fireEvent.click(container)

  expect(document.location.href).toBe('http://localhost/')
})
