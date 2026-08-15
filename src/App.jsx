import "./App.css";

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Maggoon Sons" />
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#verticals">Our Business</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="contact-link">
          Get in touch <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">ESTABLISHED 1949</p>

            <h1>
              Trading across
              <br />
              <em>industries & borders.</em>
            </h1>

            <p className="hero-description">
              M.R. Maggoon & Sons is a Pakistan-based importer, exporter and
              sourcing agent connecting businesses across international
              markets.
            </p>

            <a href="#products" className="hero-button">
              Explore our products
              <span>↓</span>
            </a>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=85"
                alt="International shipping"
              />
            </div>

            <div className="hero-year">
              <span>1949</span>
              <span>→</span>
              <span>2026</span>
            </div>
          </div>
        </section>

        <div className="trade-ticker">
          <div className="ticker-track">
            <span>TEXTILES</span>
            <i>✦</i>
            <span>POLYMERS</span>
            <i>✦</i>
            <span>CHEMICALS</span>
            <i>✦</i>
            <span>CEMENT</span>
            <i>✦</i>
            <span>COAL</span>
            <i>✦</i>
            <span>AGRO PRODUCTS</span>
            <i>✦</i>

            <span>TEXTILES</span>
            <i>✦</i>
            <span>POLYMERS</span>
            <i>✦</i>
            <span>CHEMICALS</span>
            <i>✦</i>
            <span>CEMENT</span>
            <i>✦</i>
            <span>COAL</span>
            <i>✦</i>
            <span>AGRO PRODUCTS</span>
            <i>✦</i>
          </div>
        </div>

        <section className="intro" id="about">
          <p className="eyebrow">WHO WE ARE</p>

          <div className="intro-grid">
            <h2>
              More than seven decades of
              <em> relationships.</em>
            </h2>

            <div>
              <p>
                Founded in 1949 by Mr. Mian Mohammad Rafi, M.R. Maggoon & Sons
                began as a trading company and has grown into a trusted
                sourcing partner for businesses and brands in Pakistan.
              </p>

              <p>
                We connect buyers and sellers, understand their needs and
                build relationships that last.
              </p>

              <a href="#contact" className="text-link">
                Discover our story <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;