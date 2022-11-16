const User = require('../models/user')

exports.index = async (req, res) => {
    User.find(async (err, users) => {
        if(err){
            console.error(err)
            return res.status(500).json({ message: "An error occured, unable to find user.", error: err.message })
        }
        return res.json(users);
    })
}

exports.show = async (req, res) => {

    User.findById(req.params.user, async (err, user) => {
        if(err){
            return res.status(500).json({ message: "An error occured, unable to find user.", error: err.message })
        }
        return res.json(user);
    })
}