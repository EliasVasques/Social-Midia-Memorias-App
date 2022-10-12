const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const memoriasRoute = require('./Routes/memorias') 
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log('Rodando na porta ' + process.env.PORT))
    })
    .catch((erro) => console.log(erro))

app.use('/api/memorias', memoriasRoute)
