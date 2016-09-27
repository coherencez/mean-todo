const mongoose = require('mongoose')
  ,MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/meantodos'

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
module.exports.disconnect = () => mongoose.disconnect()

