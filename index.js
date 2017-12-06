const { MongoClient } = require('mongodb')
const express = require('express')
const app = express()
// const seed = require('./seed.js')
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
    console.log(req)
    console.log(res)
    students
      .find({}, { _id: 0 })
      .toArray()
      .then(response => res.json(response))
  })

  app.use(bodyParser.json)
  // app.put('/students/:id', (req, res) => {
  //   const id = parseInt(req.params.id, 10)
  //   console.log('This is a put request')
  // })

  app.listen(7777, function() {
    console.log('Listening on Port 7777.')
  })
})
