
// Importar express
import express from 'express'
import {ProductManager} from './desafio2.js'

// Crear instancia del server
const PORT = 8080;
const app = express()
const productManager = new ProductManager('./products.json')

// Crear los endpoints
app.get('/products', async (req, res) => {
  const limit = +req.query.limit || 0;  
  const products = await productManager.getProducts(limit)
  res.send({ status: 1, payload: products });
})

// ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo el  producto solicitado, en lugar de todos los productos. 
app.get('/products/:pid', async (req, res) => {
  const pid = req.params.pid
  const products = await productManager.getProductById(pid) 

  res.send({status: 1, payload: products})
})

// Poner a escuchar

app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
})