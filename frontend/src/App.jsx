import "./App.css";
import { useState } from "react";
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

const addToCart = (product) => {
  setCart((currentCart) => [...currentCart, product]);
};
  return (
    <div className="app">
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
          <button className="cart-btn">
          🛒Cart ({cart.length})
          </button>
        </div>
      </header>

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
              <button className="primary-btn">Shop Now →</button>
              <button className="secondary-btn">Explore Products</button>
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
                    <button onClick={() => addToCart(product)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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