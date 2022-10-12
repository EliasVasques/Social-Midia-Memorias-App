const express = require('express')
const mongoose = require('mongoose')

const memorias = require('./Routes/memorias') 
require('dotenv').config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log('Rodando na porta ' + process.env.PORT))
    })
    .catch((erro) => console.log(erro))

app.use('/api/memorias', memorias)
