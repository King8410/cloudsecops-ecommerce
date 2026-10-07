import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Pro Wireless Headphones",
    category: "Audio",
    price: 129,
    icon: "🎧",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    category: "Wearables",
    price: 199,
    icon: "⌚",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 89,
    icon: "⌨️",
  },
  {
    id: 4,
    name: "Ultra HD Monitor",
    category: "Displays",
    price: 299,
    icon: "🖥️",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((currentCart) =>
      currentCart.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  const cartTotal = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">☁</span>
          <span>CloudCart</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#security">Security</a>
        </nav>

        <div className="nav-actions">
          <button className="login-btn">Login</button>

          <button
            className="cart-btn"
            onClick={() => setShowCart(!showCart)}
          >
            🛒 Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="security-pill">
              🔐 Secure by CloudSecOps
            </div>

            <h1>
              Shop smarter.
              <br />
              <span>Shop securely.</span>
            </h1>

            <p>
              A modern e-commerce experience built with cloud-native
              architecture, DevSecOps automation and security-first design.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Shop Now →
              </button>

              <button
                className="secondary-btn"
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Products
              </button>
            </div>

            <div className="trust-row">
              <div>
                <strong>100%</strong>
                <small>Secure Checkout</small>
              </div>

              <div>
                <strong>24/7</strong>
                <small>Security Monitoring</small>
              </div>

              <div>
                <strong>99.9%</strong>
                <small>Cloud Availability</small>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>SECURITY STATUS</span>
              <span className="status-dot">● Protected</span>
            </div>

            <div className="shield">🛡️</div>

            <h3>CloudSecOps Protected</h3>

            <p>
              Continuous monitoring, secure CI/CD and automated security
              controls protect the application.
            </p>

            <div className="security-check">
              <span>✓</span> Infrastructure Secure
            </div>

            <div className="security-check">
              <span>✓</span> Application Protected
            </div>

            <div className="security-check">
              <span>✓</span> Continuous Monitoring
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <span className="section-label">FEATURED COLLECTION</span>
              <h2>Popular Products</h2>
            </div>

            <button className="view-btn">View all →</button>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">{product.icon}</div>

                <div className="product-info">
                  <span className="category">{product.category}</span>

                  <h3>{product.name}</h3>

                  <div className="product-bottom">
                    <strong>${product.price}</strong>

                    <button onClick={() => addToCart(product)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECURITY */}
        <section className="security-section" id="security">
          <div>
            <span className="section-label">SECURITY FIRST</span>

            <h2>Built with security at every layer.</h2>

            <p>
              CloudCart will evolve into a complete DevSecOps and Cloud
              Security project with automated scanning, secure deployments,
              monitoring and threat detection.
            </p>
          </div>

          <div className="security-features">
            <div>
              <span>🔐</span>
              <h3>Secure Infrastructure</h3>
              <p>Azure VNet, NSG and identity controls.</p>
            </div>

            <div>
              <span>⚙️</span>
              <h3>DevSecOps</h3>
              <p>Security checks integrated into CI/CD.</p>
            </div>

            <div>
              <span>🚨</span>
              <h3>Security Operations</h3>
              <p>Monitoring, detection and response.</p>
            </div>
          </div>
        </section>
      </main>

      {/* CART DRAWER */}
      {showCart && (
        <div className="cart-overlay">
          <div className="cart-panel">
            <div className="cart-header">
              <h2>Your Cart</h2>

              <button
                className="close-cart"
                onClick={() => setShowCart(false)}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div>🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started.</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((product, index) => (
                    <div className="cart-item" key={`${product.id}-${index}`}>
                      <div className="cart-item-icon">
                        {product.icon}
                      </div>

                      <div className="cart-item-info">
                        <h3>{product.name}</h3>
                        <span>${product.price}</span>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div>
                    <span>Items</span>
                    <strong>{cart.length}</strong>
                  </div>

                  <div>
                    <span>Total</span>
                    <strong>${cartTotal}</strong>
                  </div>

                  <button className="checkout-btn">
                    Proceed to Checkout →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <div className="logo">
          <span className="logo-icon">☁</span>
          <span>CloudCart</span>
        </div>

        <p>CloudSecOps E-Commerce Project • Built on Azure</p>
      </footer>
    </div>
  );
}

export default App;