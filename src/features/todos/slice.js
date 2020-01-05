import { createSlice, createSelector } from '@reduxjs/toolkit'
import indexByProp from '../../lib/index-by-prop'

const mockTodos = [{ id: 1, text: 'Do a thing', completed: false }]

export const { actions, reducer } = createSlice({
  name: 'todos',
  initialState: mockTodos,
  reducers: {
    addTodo: (state, { payload: todo }) => {
      state.push(todo)
    },
    removeTodo: (state, { payload: id }) => {
      const idx = state.findIndex(todo => todo.id === id)
      state.splice(idx, 1)
    },
    updateTodo: (state, { payload: { id, text } }) => {
      const idx = state.findIndex(todo => todo.id === id)
      state[idx].text = text
    },
    toggleTodo: (state, { payload: id }) => {
      const idx = state.findIndex(todo => todo.id === id)
      state[idx].completed = !state[idx].completed
    }
  }
})

export const all = state => state.todos
export const byId = createSelector(all, todos => indexByProp(todos)('id'))
