const { MongoClient } = require('mongodb')
const express = require('express')
const app = express()
const seed = require('./seed.js')
const path = require('path')
app.use(express.static('./public'))

MongoClient.connect('mongodb://localhost/library', function(err, db) {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  const students = db.collection('students')

  app.get('/students', function(req, res) {})

  app.post()

  app.pull()

  app.delete()

  app.listen(7777, function() {
    console.log('Listening on Port 7777.')
  })
})
