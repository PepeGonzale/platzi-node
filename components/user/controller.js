// El controlador es el que llama a store
const store = require('./store')


const addUser = (name) => {
    if (!name) {
        return Promise.reject('Invalid name');
    }
    const user = {
        name,
    };
    return store.add(user)
}
const getUser = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addUser,
    getUser
}