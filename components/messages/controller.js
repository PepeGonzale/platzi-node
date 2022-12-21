
const store = require('./store')

const addMessage = (chat, user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message ||!chat) {
            console.error('[messageController] No hay usuario o mensaje')
            return reject('Los datos son incorrectos')
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
        store.add(fullMessage)
        resolve(fullMessage)
    })
};
const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

const updateMessage =  (id, text) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !text) {
            reject("Invalid data")
            return false;
        }

        const result = await store.updateText(id, text)
        resolve(result)
    })
};

const deleteMessage = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject("Parametros invalido")
            return false
        }
        store.remove(id)
        .then(() => {
            resolve();
        })
        .catch(e => {
            reject(e)
        })
    })
}

// Se pone como objeto para poder acceder a cualquier funcion que se cre
module.exports = {addMessage, getMessages, updateMessage, deleteMessage};

