const store = require('./store')

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
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
const getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}
// Se pone como objeto para poder acceder a cualquier funcion que se cre
module.exports = {addMessage, getMessages};

