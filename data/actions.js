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
            .json({ message: "The actions could not be loaded" })
        })
})

actions.get('/:id', (req, res) => {
    actionModel.get(req.params.id)
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
            .status(500)
            .json({ message: "The action could not be loaded" })
        })
})

actions.post('/', (req, res) => {
    actionModel.insert(req.body)
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
            .status(500)
            .json({ message: "The action could not be posted" })
        })
})

actions.put('/:id', (req, res) => {
    actionModel.update(req.params.id, req.body)
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
            .status(500)
            .json({ message: "The action could not be updated" })
        })
})

actions.delete('/:id', (req, res) => {
    actionModel.remove(req.params.id)
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
            .status(500)
            .json({ message: "The action could not be deleted" })
        })
})

module.exports = actions;