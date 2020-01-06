import { createSlice, createSelector } from '@reduxjs/toolkit'
import indexByProp from '../../lib/index-by-prop'
import socketStoreSync, { socket } from '../../store/socket-store-sync'

export const { actions, reducer } = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    initialize: (state, { payload: todos }) => todos,
    addTodo: (state, { payload: todo }) => {
      state.push(todo)
    },
    removeTodo: (state, { payload: id }) => {
      const idx = state.findIndex(todo => todo.id === id)
      state.splice(idx, 1)
    },
    updateTodo: (state, { payload: data }) => {
      const idx = state.findIndex(todo => todo.id === data.id)
      state[idx] = data
    },
    toggleTodo: (state, { payload: id }) => {
      const idx = state.findIndex(todo => todo.id === id)
      state[idx].completed = !state[idx].completed
    }
  }
})

export const setupTodoSync = store => {
  socketStoreSync(store, {
    'sync:local:create': actions.addTodo,
    'sync:local:update': actions.updateTodo,
    'sync:local:delete': actions.removeTodo,
    'sync:local:all': actions.initialize
  })
}

export const syncToRemote = (data, mode, cb) => {
  if (mode === 'UPDATE') {
    socket.emit('sync:remote:update', data)
  }

  if (mode === 'CREATE') {
    socket.emit('sync:remote:create', data, cb)
  }

  if (mode === 'REMOVE') {
    socket.emit('sync:remote:delete', data)
  }
}

export const all = state => state.todos
export const byId = createSelector(all, todos => indexByProp(todos)('id'))
