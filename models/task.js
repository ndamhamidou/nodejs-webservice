const mongoose = require("mongoose");

const shema = new mongoose.Schema({
    label: String,
    jobdesk: String,
    date: String
})

module.exports = mongoose.model("Task", shema)