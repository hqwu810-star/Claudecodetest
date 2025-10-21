import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <h1>HomeAppliance Store</h1>
        </Link>
        <div className="nav-links">
          <Link to="/">Products</Link>
          <Link to="/cart" className="cart-link">
            Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
