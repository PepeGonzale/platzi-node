const Model = require("./model")

const addUser = (user) => {
    const myUser = new Model(user)
    return myUser.save()
}

const getUser = async () => {
    const user = await Model.find()
    return user
}

module.exports = {
    add: addUser,
    list: getUser
}