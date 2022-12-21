// Este archivo lo que va a contener es el modelo de almacenamiento de datos
// EL modelo sirve para decir en que formato queremos enviar los datos, cuales son los datos requeridoos ...
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: "Chat",
    },
    user: {
        type: Schema.ObjectId,
        ref: "User",
    },
    message: {
        type: String,
        required: true
    },
    date: Date,
    file: String
});

const model = mongoose.model("Message", mySchema)

module.exports = model