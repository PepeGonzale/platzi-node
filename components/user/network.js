// INformación de red
const express = require('express');
const response = require('../../network/response')
const router = express.Router();
const controller = require('./controller')

router.post("/", (req, res) => {
    controller.addUser(req.body.name)
        .then(data => {
        response.succes(req, res, data, 201) 
        })
    .catch(e => {
        response.error(req, res, "Internal error", 500, e)
    })
})

router.get("/", (req, res) => {
    controller.getUser()
    .then(data => {
        response.succes(req, res, data, 200)
    })
    .catch(e => {
        response.error(req, res, "[network error] Internal error", 500, e)
    })
})
module.exports = router