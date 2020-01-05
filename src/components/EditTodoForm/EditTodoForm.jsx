import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SideSheet, Button, TextInput } from 'evergreen-ui'
import { byId, updateTodo } from '../../features/todos'

const EditTodoForm = ({ position, isShown, onCloseComplete, dataId }) => {
  console.log('dataId', dataId)
  const todo = useSelector(byId)[dataId] || {}
  const [todoText, setTodoText] = useState(todo.text)
  const dispatch = useDispatch()

  const handleTextFieldChange = useCallback(
    e => setTodoText(e.target.value),
    []
  )

  const handleButtonClick = useCallback(
    () => dispatch({ id: dataId, text: todoText }),
    [dataId, dispatch, todoText]
  )

  return (
    <SideSheet
      position={position}
      isShown={isShown}
      onCloseComplete={onCloseComplete}
    >
      <TextInput
        name="text"
        onChange={handleTextFieldChange}
        value={todoText}
      />
      <Button onClick={handleButtonClick} />
    </SideSheet>
  )
}

export default EditTodoForm
