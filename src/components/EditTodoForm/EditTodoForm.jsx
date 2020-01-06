import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { byId, thunks } from '../../features/todos'
import TodoAppLayout from '../TodoAppLayout'
import BackButton from '../BackButton'
import TodoFormLayout from '../TodoFormLayout'

const EditTodoForm = ({ onSave = Function.prototype, dataId }) => {
  const todo = useSelector(byId)[dataId] || {}
  const dispatch = useDispatch()

  const handleSaveButtonClick = useCallback(
    data => {
      dispatch(thunks.updateTodoAndSync({ ...todo, ...data }))
      onSave()
    },
    [dispatch, onSave, todo]
  )

  const handleDeleteButtonClick = useCallback(() => {
    dispatch(thunks.removeTodoAndSync(dataId))
    onSave()
  }, [dataId, dispatch, onSave])

  return (
    <TodoAppLayout title="Edit Todo" headerAction={<BackButton />}>
      <TodoFormLayout
        onSaveClick={handleSaveButtonClick}
        onDeleteClick={handleDeleteButtonClick}
        formData={todo}
      />
    </TodoAppLayout>
  )
}

export default EditTodoForm
