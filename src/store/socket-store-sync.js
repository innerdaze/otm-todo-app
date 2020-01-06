import io from 'socket.io-client'

// e.g. socketStoreSync(store, {'create': addTodo, 'update': updateTodo })

export const socket = io('http://localhost:80')

export default function(store, actionMap) {
  Object.keys(actionMap).forEach(key => {
    const action = actionMap[key]

    socket.on(key, data => {
      store.dispatch(action(data))
    })
  })
}
