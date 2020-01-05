import socketPouchServer from 'socket-pouch/server'

const PORT = process.env.DB_PORT || 4000

socketPouchServer.listen(PORT)
