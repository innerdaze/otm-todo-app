import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Icon, IconButton } from 'evergreen-ui'
import { actions, byId } from '../../features/todos/'

export default React.memo(({ id }) => {
  const todo = useSelector(byId)[id]
  const dispatch = useDispatch()

  // const handleButtonClick = useCallback(
  //   () => dispatch(actions.toggleTodo(id)),
  //   [dispatch, id]
  // )

  return (
    <>
      <Table.TextCell>{todo.id}</Table.TextCell>
      <Table.TextCell>{todo.text}</Table.TextCell>
      <Table.Cell>{todo.completed && <Icon icon="tick" />}</Table.Cell>
    </>
  )
})
