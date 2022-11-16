const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

// controllers
const user = require('../controllers/user')
const task = require('../controllers/task')

// parse request body
router.use(bodyParser.json({ strict: false }))
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', (req, res) => {
    // res.write('<h1>check api</h1>');
    return res.json({ app: process.env.APP_NAME, version: "v1.0.0" })
})

router.get('/users/:user', user.show)
router.get('/users', user.index)

router.get('/tasks/:task', task.show)
router.get('/tasks', task.index)
module.exports = router