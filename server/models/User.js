const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema ({
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    phoneNumber: {
        type: Number,
        unique: true,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {User};


