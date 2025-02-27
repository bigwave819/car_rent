const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const validator = require("validator");


const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
      password: {
        type: String,
        required: true
    }
});

userSchema.statics.signup = async function(username, email, password) {

    if (!username || !email || !password ) {
      throw Error("all fields must be filled");
    }
    if (!validator.isEmail(email)) {
      throw Error("email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
      throw Error("the password is not strong enough")
    }
  
    const exists = await this.findOne({ email })
  
    if (exists) {
      throw Error('Email already in use')
    }
  
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const user = await this.create({username, email, password: hash })
  
    return user
  }

  //static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
      throw Error("all fields must be filled");
    }
    const user = await this.findOne({ email })
  
    if (!user) {
      throw Error('Incorrect Email')
    }
    const match = await bcrypt.compare( password, user.password)
    if (!match) {
      throw Error("incorrect password")
    }
    return user
  }

  module.exports = mongoose.model('User', userSchema)