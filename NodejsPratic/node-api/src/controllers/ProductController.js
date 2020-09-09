const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
  // Busca produtos
  async index(request, response){
    const { page = 1 } = request.query
    const products = await Product.paginate({}, { page, limit: 10 })

    return response.json(products)
  },

  // Mostrar produtos
  async show(request, response){
    const product = await Product.findById(request.params.id)

    return response.json(product)
  },

  // Criar produtos
  async store(request, response){
    const product = await Product.create(request.body)

    return response.json(product)
  },

  // Atualiza produtos
  async update(request, response){
    const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true })

    return response.json(product)
  },

  // Deletar produtos
  async destroy(request, response){
    await Product.findByIdAndRemove(request.params.id)

    return response.send('Produto deletado do banco de dados')
  }
}