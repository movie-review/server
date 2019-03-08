const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    by: String,
});


userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    next();
})

const User = mongoose.model('Users', userSchema);

module.exports = User;