import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'evergreen-ui'
import TodoList from '../TodoList'
import TodoAppLayout from '../TodoAppLayout'

export default () => {
  const history = useHistory()

  const handleRowSelect = useCallback(
    data => history.push(`/edit/${data.id}`),
    [history]
  )

  const handleAddTodoClick = useCallback(() => history.push('/add'), [history])

  return (
    <TodoAppLayout
      title="Todos"
      headerAction={
        <Button appearance="primary" onClick={handleAddTodoClick}>
          Add Todo
        </Button>
      }
    >
      {/* <div>Select Todo</div> */}
      <TodoList onRowSelect={handleRowSelect} />
    </TodoAppLayout>
  )
}
