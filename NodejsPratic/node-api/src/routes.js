const express = require('express')
const routes = express.Router()
const ProductController = require('./controllers/ProductController')

// Criação de um CRUD
routes.get('/products', ProductController.index) // Read
routes.get('/products/:id', ProductController.show) // Read
routes.post('/products', ProductController.store) //Create
routes.put('/products/:id', ProductController.update) // Update
routes.delete('/products/:id', ProductController.destroy) //Delete

module.exports = routes