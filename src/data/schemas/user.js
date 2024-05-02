const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userID: String,
    password: String,
    email: String,
    userName: String,
    pedidos: Array, //traduzir
    permissions: {
        type: Array,
        default: ["CLIENT"]
    }
});

module.exports = mongoose.model('User', userSchema);
