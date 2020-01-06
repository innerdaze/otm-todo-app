import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button, Icon } from 'evergreen-ui'
import { byId, thunks } from '../../features/todos/'

export default React.memo(({ dataId }) => {
  const todo = useSelector(byId)[dataId]
  const dispatch = useDispatch()

  const handleCompleteClick = useCallback(
    e => {
      e.stopPropagation()
      dispatch(thunks.toggleTodoAndSync(dataId))
    },
    [dataId, dispatch]
  )

  return (
    <>
      <Table.TextCell data-testid="todoListItem-cell-1">
        {todo.text}
      </Table.TextCell>
      <Table.Cell data-testid="todoListItem-cell-2" justifyContent="flex-end">
        {todo.completed ? (
          <Icon data-testid="todoListItem-icon" icon="tick" color="green" />
        ) : (
          <Button
            data-testid="todoListItem-button"
            onClick={handleCompleteClick}
          >
            Complete
          </Button>
        )}
      </Table.Cell>
    </>
  )
})
