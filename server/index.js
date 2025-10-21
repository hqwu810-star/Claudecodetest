import express from 'express'
import cors from 'cors'
import { products } from './data/products.js'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products)
})

// Get single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id))
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
