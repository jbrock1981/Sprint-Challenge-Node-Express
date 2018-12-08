//actions setup
const actions = require('express').Router();
const actionModel = require('./helpers/actionModel');

//action endpoints
actions.get('/', (req, res) => {
    actionModel.get()
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
            .status(500)
            .json({ message: "actions could not be loaded" })
        })
})

module.exports = actions;