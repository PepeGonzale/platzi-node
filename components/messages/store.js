const { Console } = require('console');
const db = require('mongoose')
require('dotenv/config')
MONGODB_URI=process.env.MONGODB_URI
db.Promise = global.Promise;
db.connect(MONGODB_URI, {
    useNewUrlParser: true
}).then(() => {console.log("Conectada con exito")})


const list = [];

const addMessage = (message) => {
    const myMessage = new db.Model(message);
    myMessage.save();
    // list.push(message);
}

const getMessage = () => {
    return list;
}

module.exports = { 
    add: addMessage,
    list: getMessage 
    // get
    // update
} 