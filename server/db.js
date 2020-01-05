import PouchDB from 'pouchdb'
import expressPouchDB from 'express-pouchdb'

const TempPouchDB = PouchDB.defaults({
  prefix: '/tmp/'
})

export default expressPouchDB(TempPouchDB)
export const dbInstance = new TempPouchDB('db')
