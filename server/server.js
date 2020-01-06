// import socketPouchServer from 'socket-pouch/server'
import Server from 'socket.io'
import { initializeDB } from './db'

const PORT = process.env.SS_PORT || 80

const io = new Server(PORT)

initializeDB(db => {
  let todos = db.getCollection('todos')

  io.on('connection', socket => {
    console.log('server connected')

    socket.emit(
      'sync:local:all',
      todos
        .chain()
        .find()
        .data()
    )

    socket.on('sync:remote:create', (data, cb) => {
      const record = todos.insert(data)

      console.log('received data', data)

      socket.broadcast.emit('sync:local:create', record)

      cb(record)
    })

    socket.on('sync:remote:update', data => {
      const record = todos.update(data)

      console.log('recevied data', data)

      socket.broadcast.emit('sync:local:update', record)
    })

    socket.on('sync:remote:delete', data => {
      const record = todos.by('id', data)
      todos.remove(record)

      socket.broadcast.emit('sync:local:delete', data)
    })
  })
})
