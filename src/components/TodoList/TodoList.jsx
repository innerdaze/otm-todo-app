import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'evergreen-ui'
import { all } from '../../features/todos'
import Todo from '../TodoListItem'

const TodoList = React.memo(({ onRowSelect }) => {
  const todos = useSelector(all)

  return (
    <Table>
      <Table.Body>
        {todos.map(todo => (
          <Table.Row
            key={todo.id}
            disabled={todo.completed}
            isSelectable
            onSelect={() => onRowSelect(todo)}
          >
            <Todo key={todo.id} id={todo.id} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
})

export default TodoList
