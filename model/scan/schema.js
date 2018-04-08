const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('../user/schema')

const scanSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
  total: { type: Number },
  tags: { type: [String]},
  _user: {
    type: Schema.Types.ObjectId, ref: User
  }
})

module.exports = scanSchema
