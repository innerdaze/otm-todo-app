import loki from 'lokijs'

export const initializeDB = cb => {
  const autoloadCallback = () => {
    if (!db.getCollection('todos')) {
      db.addCollection('todos', { unique: 'id' })
    }

    cb(db)
  }

  const db = new loki('todos.db', {
    autoload: true,
    autoloadCallback: autoloadCallback,
    autosave: true,
    autosaveInterval: 4000
  })
}
