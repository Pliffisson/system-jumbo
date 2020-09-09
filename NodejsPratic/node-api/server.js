const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const server = express()
server.use(express.json())
server.use(cors())

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser:true, useUnifiedTopology: true })
requireDir('./src/models')

server.use("/api", require("./src/routes"))

server.listen(3333)
