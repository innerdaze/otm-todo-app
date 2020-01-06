import { actions, syncToRemote, byId } from './slice'

export const addTodoAndSync = data => dispatch => {
  dispatch(actions.addTodo(data))
  syncToRemote(data, 'CREATE', newData => dispatch(actions.updateTodo(newData)))
}

export const updateTodoAndSync = data => dispatch => {
  dispatch(actions.updateTodo(data))
  syncToRemote(data, 'UPDATE')
}

export const toggleTodoAndSync = id => (dispatch, getState) => {
  dispatch(actions.toggleTodo(id))
  syncToRemote(byId(getState())[id], 'UPDATE')
}

export const removeTodoAndSync = id => dispatch => {
  dispatch(actions.removeTodo(id))
  syncToRemote(id, 'REMOVE')
}
