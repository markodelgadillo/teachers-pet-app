const { MongoClient } = require('mongodb')
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(express.static('./public'))

MongoClient.connect('mongodb://localhost/library', function(err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const students = db.collection('students')

  app.get('/students', (req, res) => {
    students
      .find({}, { _id: 0 })
      .toArray()
      .then(response => res.json(response))
  })

  app.use(bodyParser.json)
  /*
  app.put('/students', (req, res) => {
    students.
    findOneAndUpdate({id: req.body.id},
      $set: {
        notes: req.body.notes,
        parentNotes: req.body.parentNotes,
        parents: req.body.parents
      }
    },)
  })
*/
  app.listen(7777, function() {
    console.log('Listening on Port 7777.')
  })
})

/*
const { MongoClient } = require('mongodb')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect('mongodb://localhost/library', function(err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const students = db.collection('students')

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })

  app.post('/', (req, res) => {
    console.log(req.body)
  })

  app.listen(7777, function() {
    console.log('Listening on Port 7777.')
  })
})
*/
