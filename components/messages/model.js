// Este archivo lo que va a contener es el modelo de almacenamiento de datos

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date
});

const model = mongoose.model("Message", mySchema)

module.exports = model