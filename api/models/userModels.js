const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  // create your user schema here.
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('User', UserSchema);
