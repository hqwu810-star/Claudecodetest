# Home Appliance Store - E-Commerce Web App

A modern, full-stack e-commerce web application for home appliances built with React and Express.

## Features

- Browse home appliance products with category filtering
- View detailed product information with specifications and features
- Add products to shopping cart with quantity management
- Complete checkout process with shipping and payment forms
- Responsive design for mobile and desktop
- Modern, intuitive user interface

## Tech Stack

### Frontend
- React 18
- React Router for navigation
- Vite for fast development and building
- CSS3 for styling

### Backend
- Node.js
- Express.js
- RESTful API

## Project Structure

```
home-appliance-store/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/        # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── Checkout.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/               # Express backend
│   ├── data/
│   │   └── products.js  # Product data
│   └── index.js         # Server entry point
├── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Claudecodetest
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Run the application**

   Option 1: Run both frontend and backend concurrently (recommended)
   ```bash
   npm run dev
   ```

   Option 2: Run separately in different terminals

   Terminal 1 - Backend:
   ```bash
   npm run server
   ```

   Terminal 2 - Frontend:
   ```bash
   npm run client
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product by ID
- `GET /api/health` - Health check endpoint

## Available Scripts

### Root Directory
- `npm run dev` - Run both frontend and backend concurrently
- `npm run server` - Run backend server only
- `npm run client` - Run frontend only
- `npm run build` - Build frontend for production
- `npm run install-all` - Install all dependencies (root and client)

### Client Directory
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Product Categories

The store features the following product categories:
- Refrigerators
- Washing Machines
- Ovens & Ranges
- Dishwashers
- Microwaves
- Small Appliances
- Vacuums
- Cooling & Heating
- Water Heaters

## Features in Detail

### Product Catalog
- Grid layout with responsive design
- Category filtering
- Product cards with image, name, price, and rating
- Click to view detailed product information

### Product Details
- High-quality product images
- Comprehensive product descriptions
- Feature lists
- Detailed specifications
- Add to cart functionality
- Back to products navigation

### Shopping Cart
- View all added items
- Adjust quantity for each item
- Remove items from cart
- See subtotal, tax, and total
- Proceed to checkout
- Continue shopping option

### Checkout
- Shipping information form
- Payment information form
- Order summary with item details
- Total calculation with tax
- Order confirmation message

## Future Enhancements

- User authentication and accounts
- Order history
- Product search functionality
- Product reviews and ratings
- Wishlist feature
- Payment gateway integration
- Backend database (MongoDB/PostgreSQL)
- Admin panel for product management
- Email notifications
- Inventory management

## Development

### Adding New Products

Edit `server/data/products.js` and add new product objects following this structure:

```javascript
{
  id: number,
  name: string,
  category: string,
  price: number,
  rating: number,
  image: string,
  description: string,
  features: string[],
  specifications: object
}
```

### Styling

All component styles are in separate CSS files. Modify the respective CSS files to change the appearance:
- Global styles: `client/src/index.css`
- Component styles: `client/src/components/*.css`
- Page styles: `client/src/pages/*.css`

## License

MIT

## Author

Built with Claude Code
