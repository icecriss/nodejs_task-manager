// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'tastk-manager'

MongoClient.connect(connectionURL, {
  useNewUrlParser: true
}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  //   db.collection('users').insertOne({
  //     name: 'ice',
  //     age: 'not 22 anymore'
  //   }, (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert user')
  //     }
  //     console.log(result.ops)
  //   })

  // db.collection('users').insertMany([{
  //   name: 'Jen',
  //   age: '28'
  // }, {
  //   name: 'Gunther',
  //   age: '27'
  // }], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert users')
  //   }

  //   console.log(result.ops)
  // })

  db.collection('tasks').insertMany([{
      descricption: 'Do laundry',
      completed: true
    },
    {
      descricption: 'Clean appartment',
      completed: false
    },
    {
      descricption: 'Wash my hair',
      completed: false
    },
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert tasks.')
    }
    console.log(result.ops)
  })

})