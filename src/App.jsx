import "./App.css";

const verticals = [
  {
    title: "Textiles",
    description: "Textile raw materials and polymers serving manufacturing industries.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Polymers & Chemicals",
    description: "Industrial polymers, chemicals and raw materials for multiple sectors.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cement",
    description: "Materials and commodities supporting construction and industrial operations.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Coal",
    description: "Thermal and industrial coal for energy, cement and textile industries.",
    image:
      "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Agro Products",
    description: "Rice, corn, sesame seed and other agricultural products from Pakistan.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
  },
];

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a href="#" className="logo">
          <span className="logo-mark">M</span>

          <span className="logo-text">
            <strong>M.R. MAGGOON & SONS</strong>
            <small>ESTABLISHED 1949</small>
          </span>
        </a>

        <nav>
          <a href="#about">About Us</a>
          <a href="#verticals">Verticals</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Get in Touch
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow">ESTABLISHED 1949</p>

            <h1>
              M.R. MAGGOON
              <br />
              <span>& SONS</span>
            </h1>

            <p className="hero-subtitle">
              IMPORTERS · EXPORTERS · SOURCING AGENTS
            </p>

            <p className="hero-description">
              Connecting global markets through trusted relationships,
              quality products and decades of experience.
            </p>

            <div className="hero-actions">
              <a href="#products" className="button button-primary">
                Explore Products
                <span>→</span>
              </a>

              <a href="#about" className="button button-outline">
                About Our Company
              </a>
            </div>
          </div>

          <div className="hero-trust">
            <span className="trust-number">75+</span>
            <span className="trust-text">
              YEARS OF
              <br />
              TRUST
            </span>
          </div>

          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div />
          </div>
        </section>

        <section className="verticals section" id="verticals">
          <div className="section-heading">
            <p className="eyebrow dark">OUR VERTICALS</p>
            <h2>Connecting industries.</h2>
            <p>
              Our business spans multiple industries, connecting trusted
              suppliers and buyers across global markets.
            </p>
          </div>

          <div className="vertical-grid">
            {verticals.map((vertical) => (
              <article className="vertical-card" key={vertical.title}>
                <img src={vertical.image} alt={vertical.title} />

                <div className="vertical-card-overlay" />

                <div className="vertical-card-content">
                  <h3>{vertical.title}</h3>
                  <p>{vertical.description}</p>
                  <span className="card-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-copy">
            <p className="eyebrow dark">SINCE 1949</p>

            <h2>
              Built on trust.
              <br />
              <em>Delivering value.</em>
            </h2>

            <p>
              M.R. Maggoon & Sons was founded in 1949 by Mr. Mian Mohammad
              Rafi as a trading company. Over the decades, the company grew
              into a trusted sourcing partner for businesses and brands in
              Pakistan and international markets.
            </p>

            <p>
              We believe lasting business is built on relationships. By
              understanding the needs of both buyers and sellers, we bridge
              gaps and create long-term partnerships.
            </p>

            <a href="#contact" className="text-link">
              Discover our story <span>→</span>
            </a>
          </div>

          <div className="about-statistics">
            <div className="stat">
              <strong>75+</strong>
              <span>Years of experience</span>
            </div>

            <div className="stat">
              <strong>1949</strong>
              <span>Year established</span>
            </div>

            <div className="stat">
              <strong>Global</strong>
              <span>Trading network</span>
            </div>

            <div className="stat">
              <strong>Trust</strong>
              <span>Our foundation</span>
            </div>
          </div>
        </section>

        <section className="products section" id="products">
          <div className="products-heading">
            <div>
              <p className="eyebrow">OUR PRODUCTS</p>
              <h2>Products across industries.</h2>
            </div>

            <a href="#contact" className="button button-outline">
              Enquire About Products →
            </a>
          </div>

          <div className="product-list">
            <div>
              <span>01</span>
              <h3>Polypropylene</h3>
              <p>Film / Tape (Raffia) / Injection / CPP / BOPP</p>
            </div>

            <div>
              <span>02</span>
              <h3>HDPE</h3>
              <p>Film / Injection / Monofilament Yarn</p>
            </div>

            <div>
              <span>03</span>
              <h3>LLDPE / LDPE</h3>
              <p>Film applications</p>
            </div>

            <div>
              <span>04</span>
              <h3>Agro Products</h3>
              <p>Basmati Rice / Corn / Sesame / Chicken Eggs</p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">LET'S WORK TOGETHER</p>

          <h2>
            Have an inquiry?
            <br />
            <em>Let's talk.</em>
          </h2>

          <p>
            Get in touch with our team to discuss products, sourcing
            requirements or business opportunities.
          </p>

          <a href="mailto:contact@maggoonsons.com" className="button button-primary">
            contact@maggoonsons.com →
          </a>
        </section>
      </main>

      <footer>
        <div>
          <strong>M.R. MAGGOON & SONS</strong>
          <span>ESTABLISHED 1949</span>
        </div>

        <div>
          <p>Importers · Exporters · Sourcing Agents</p>
          <p>
            Business Center, Mumtaz Hassan Road,
            <br />
            Off I.I. Chundrigar Road, Karachi
          </p>
        </div>

        <div>
          <p>+92-21-32418852</p>
          <p>contact@maggoonsons.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;