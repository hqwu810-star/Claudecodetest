import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {product.discount && <span className="product-sale-badge">促销</span>}
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-rating">
            {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
            <span>({product.rating})</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard