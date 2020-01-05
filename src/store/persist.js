import PouchDB from 'pouchdb'
import socketPouchClient from 'socket-pouch/client'
import { persistStore } from 'redux-pouchdb'
// import { PouchDBStorage } from 'redux-persist-pouchdb'

PouchDB.adapter('socket', socketPouchClient)

const db = new PouchDB({
  adapter: 'socket',
  name: 'todos',
  url: 'ws://localhost:4000',
  socketOptions: {}
})

export const storage = db
export const createPersistedStore = store => persistStore(store)
