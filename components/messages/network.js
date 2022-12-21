const express = require('express');
const response = require('../../network/response')
const multer = require('multer')
const router = express.Router();
const controller = require('./controller')

router.get("/test", (req, res) => {
    res.send({
        
    })
})
router.get("/", (req, res) => {
    // En caso de que no venga ningun parametro por la query ponemos el valor null
    const filterMessage = req.query.user || null;
    controller.getMessages(filterMessage)
    .then((messageList) => {
        response.succes(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, "Unexpected error", 500, e)
    })
})

router.post("/", (req, res) => {

    console.log(controller.addMessage(req.body.chat, req.body.user, req.body.message).then((fullMessage)=> {
        response.succes(req, res, fullMessage, 201)
    }).catch(e => {
        response.error(req, res, "Error simulado", 500, "Es solo una simulacion de los errores", e)
    }))

   
})

// Ruta para modificar mensajes
router.patch("/:id", (req, res) => {
    console.log(req.params.id)

    controller.updateMessage(req.params.id, req.body.text)
    .then((data) => {
        response.succes(req, res, data, 200);
    })
    .catch(e => {
        response.error(req, res, "Error interno", 500, e)
    })
    res.send("OK")
})
// Borrar datos de la coleción gracias al id
router.delete("/:id", (req, res) => {
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.succes(req, res, `Usuario ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
        response.error(req, res, "Error interno", 500, e)
    })
})

module.exports = router;
