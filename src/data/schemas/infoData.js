const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({

visits: {type: Number, default: 1},

});

module.exports = mongoose.model('Site', siteSchema);