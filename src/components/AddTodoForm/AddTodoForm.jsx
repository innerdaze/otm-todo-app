import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import shortId from 'shortid'
import { thunks } from '../../features/todos'
import TodoAppLayout from '../TodoAppLayout'
import BackButton from '../BackButton'
import TodoFormLayout from '../TodoFormLayout'

const AddTodoForm = ({ onSave = Function.prototype }) => {
  const dispatch = useDispatch()

  const handleSaveButtonClick = useCallback(
    data => {
      dispatch(
        thunks.addTodoAndSync({ id: shortId.generate(), text: data.text })
      )
      onSave()
    },
    [dispatch, onSave]
  )

  return (
    <TodoAppLayout title="Add Todo" headerAction={<BackButton />}>
      <TodoFormLayout onSaveClick={handleSaveButtonClick} />
    </TodoAppLayout>
  )
}

export default AddTodoForm
