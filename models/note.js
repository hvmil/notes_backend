// require('dotenv').config({path: '../.env'})
const password = process.env.DB_PASSWORD
const uriTemplate = process.env.MONGODB_URI
const mongoUri = uriTemplate.replace('DB_PASSWORD', password)
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
console.log('connecting to', mongoUri)

mongoose.connect(mongoUri)

  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Note', noteSchema)