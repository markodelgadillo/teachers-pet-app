const { MongoClient } = require('mongodb')

const seed = (module.exports = MongoClient.connect(
  'mongodb://localhost/library',
  function(err, db) {
    if (err) {
      console.log(err)
      process.exit(1)
    }

    const students = db.collection('students')
    students.deleteMany()

    students.insertMany([
      {
        id: 0,
        name: 'Jeffrey Garcia',
        notes: [],
        parents: [],
        parentNotes: []
      },

      {
        id: 1,
        name: 'Melissa Roberts',
        notes: [],
        parents: [],
        parentNotes: []
      },

      {
        id: 2,
        name: 'Alex Ventus',
        notes: [],
        parents: [],
        parentNotes: []
      }
    ])

    db.close
  }
))
