const DiaryService = require('../models/Diary.js')

async function showAll(req, res) {
    try {
        const data = await DiaryService.getAll();
        res.status(200).send(data)
    } catch(err) {
        res.status(404).json({"error": err.message})
    }
}

async function create(req, res) {
    try {
        const response = await DiaryService.create(req.body)
        res.status(201).send(response)
    } catch(err) {
        res.status(400).json({"error": err.message})
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id)
        const data = await DiaryService.show(id)
        res.status(200).send(data)
    } catch(err) {
        res.status(404).json({"error": err.message})
    }
}

async function update(req, res) {
    try {
        const id = parseInt(req.params.id)
        const response = await DiaryService.update(id, data)
        res.status(200).send(response)
    } catch(err) {
        res.status(404).json({"error": err.message})
    }
}

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id)
        const response = await DiaryService.destroy(id)
        res.status(200).send(response)
    } catch(err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {showAll, create, show, update, destroy}
