const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const ejs = require('ejs');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

require("dotenv").config();

// controllers
const User = require('./models/user')
const Task = require('./models/task')

// api file
const api = require('./routes/api')


// database connect
mongoose.connect(
    process.env.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    ).then(() => console.log('connected')).catch((error) => console.log(error))


app.get('/', function(req, res){
    res.write("<h1>thanks for testing the API!</h1>")
    res.send()
})

app.listen(3000, function(){
    console.log("this server is up and running")
})

app.use('/api', api)