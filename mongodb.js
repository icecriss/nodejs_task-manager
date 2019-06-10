// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mondodb.ObjectId

const {
  MongoClient,
  ObjectId
} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'tastk-manager'

MongoClient.connect(connectionURL, {
  useNewUrlParser: true
}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)


  // insertMany(docs, options, callback){Promise}

  // db.collection('users').insertMany([{
  //       name: 'Trudy',
  //       age: 43
  //     },
  //     {
  //       name: 'Gertrude',
  //       age: 43
  //     }
  //   ])
  //   .then((result) => {
  //     console.log(result)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  // db.collection('users').deleteMany({
  //     age: '55'
  //   })
  //   .then((result) => {
  //     if (result.deletedCount === 0) {
  //       return console.log('No user to delete.')
  //     }
  //     console.log(`the user${result.deletedCount > 1 ? 's have' : ' has'} been deleted`)
  //     console.log(result.deletedCount)
  //   })
  //   .catch((error) => {
  //     console.log('for some reason, unable to delete the user(s)')
  //     console.log(error)
  //   })


  // deleteOne(filter, options, callback){Promise}

  db.collection('tasks').deleteOne({
      descricption: 'bla bla bla'
    })
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
})