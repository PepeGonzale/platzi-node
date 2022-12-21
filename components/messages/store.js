
const { rejects } = require('assert')
const { resolve } = require('path')
const Model = require('./model')

const addMessage = (message) => {
    const myMessage = new Model(message)
    myMessage.save()
    // list.push(message);
}

const getMessage =  (filterUser) => {
    return new Promise((resolve, reject) => {
         let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser }
    }
    
    // Buscamos por el filtro 
    const messages =  Model.find(filter)
    .populate('user')
    .exec((error, populated) => {
        if (error) {
            rejects(error)
            return false
        }
        resolve(populated)
    })
    })
   
    

    
}

const updateText = async (id, message) => {
    const foundMessage = await Model.findOne({
        _id: id
    })

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage
}
const deleteText = async (id) => {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = { 
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: deleteText
} 
