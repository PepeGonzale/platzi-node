const express = require('express');
const response = require('../../network/response')
const router = express.Router();
const controller = require('./controller')

router.get("/", (req, res) => {
    controller.getMessages()
    .then((messageList) => {
        response.succes(req, res, messageList, 200)
    })
    .catch((e) => {
        response.error(req, res, "Unexpected error", 500, e)
    })
})

router.post("/", (req, res) => {

    console.log(controller.addMessage(req.body.user, req.body.message).then((fullMessage)=> {
        response.succes(req, res, fullMessage, 201)
    }).catch(e => {
        response.error(req, res, "Error simulado", 500, "Es solo una simulacion de los errores", e)
    }))

   
})

module.exports = router;