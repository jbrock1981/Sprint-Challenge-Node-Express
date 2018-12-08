//projects setup
const projectModel = require('./data/helpers/projectModel');
const projectRouter = require('express').Router();

//project endpoints
projectRouter.get('/', (req, res) => {
    projectModel.get()
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: "The projects could not be loaded" })
        })
})

projectRouter.get('/:id', (req, res) => {
    projectModel.get(req.params.id)
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: "The project could not be loaded" })
        })
})

projectRouter.post('/', (req, res) => {
    projectModel.insert(req.body)
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: "The project could not be posted" })
        })
})

projectRouter.put('/:id', (req, res) => {
    projectModel.update(req.params.id, req.body)
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: "The project could not be updated" })
        })
})

projectRouter.delete('/:id', (req, res) => {
    projectModel.remove(req.params.id)
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: "The project could not be deleted" })
        })
})

projectRouter.get('actions/:id', (req, res) => {
    projectModel.getProjectActions(req.params.id)
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: "The actions could not be loaded" })
        })
})

module.exports = projectRouter;

