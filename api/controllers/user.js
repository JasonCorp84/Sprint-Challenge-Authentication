const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { username, password } =  req.body;
 const user =  new User({
   username,
   password
 });

  user
  .save()
  .then(result => {
    res.json({status: 'success'})
  })
  .catch(err => {
    res.send(err);
  })
};

module.exports = {
  createUser
};
