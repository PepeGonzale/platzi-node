const express = require('express');
require('dotenv/config')
const app = express();
// const router = require('./components/messages/network')
const router = require('./network/routes')
const port = process.env.PORT || 3001


app.use(express.json());
// app.use(router)
router(app)
// Para utilizar los estaticos
app.use("/app", express.static("public"))

app.listen(port, () => {
    console.log(`Listen port in ${port}`)
})