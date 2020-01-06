import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { IconButton } from 'evergreen-ui'

const BackButton = () => {
  const history = useHistory()
  const handleClick = useCallback(() => history.push('/'), [history])

  return <IconButton icon="arrow-left" onClick={handleClick} />
}

export default BackButton
