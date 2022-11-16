const mongoose = require("mongoose");

const shema = new mongoose.Schema({
    image: String,
    name: String,
    jobdesk: String
})

module.exports = mongoose.model("User", shema)