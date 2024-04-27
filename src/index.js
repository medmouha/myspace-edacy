const express = require('express')
//const path = require('path')
const bodyparser = require('body-parser')
const utilisateurRoute = require('./router/utilisateurRoute')
const messageRoute = require('./router/messageRoute')
require('dotenv').config()


const app = express()

//app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/utilisateurs', utilisateurRoute)
app.use('/messages', messageRoute)


app.listen(process.env.PORT || 3000);
console.log("Server started on port "+process.env.PORT || 3000);