import { useEffect, useRef, useState } from "react";
import "./App.css";

// Fades/slides elements with class "reveal" or "reveal-group" up into
// place the first time they scroll into view.
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-group");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Shrinks the navbar slightly once the page has been scrolled.
function useScrolledNav(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

// A stat that counts up from 0 to its value once it enters the viewport.
function Stat({ value, suffix = "", label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1400;
        const start = performance.now();

        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat" ref={ref}>
      <span className="stat-value">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function App() {
  useScrollReveal();
  const scrolled = useScrolledNav();

  return (
    <div className="site">
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="/" className="logo">
          <img src="/logo.png" alt="Maggoon Sons" />
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#verticals">Our Business</a>
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

            <p className="hero-tagline">
              Importers – Exporters – Sourcing Agents
            </p>

            <p className="hero-description">
              M.R. Maggoon & Sons is a Pakistan-based importer, exporter and
              sourcing agent connecting businesses across international
              markets.
            </p>

            <a href="#verticals" className="hero-button">
              Explore our business
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
            <div className="ticker-group">
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

            <div className="ticker-group">
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
        </div>

        <section className="intro" id="about">
          <p className="eyebrow">WHO WE ARE</p>

          <div className="intro-grid reveal">
            <h2>
              More than seven decades of
              <em> relationships.</em>
            </h2>

            <div>
              <p>
                MRM was formed in 1949 by Mian Mohammad Rafi (Late) as a
                trading company focused on the import of textile machinery,
                packaging materials, fishing nets and other goods. Over time,
                the company evolved into a leading sourcing agent for
                multiple businesses and brands in Pakistan.
              </p>

              <p>
                We exist because of the relationships we build. MRM focuses
                on the needs of both buyers and sellers, bridging any gaps
                between them along the way.
              </p>

              <p>
                Trust is the foundation of every business, and trust takes
                time to build. Operating since 1949, our company stands on
                the founding pillars of trust and relationships with both
                national and international partners.
              </p>

              <a href="#contact" className="text-link">
                Discover our story <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="process" id="process">
          <div className="process-header reveal">
            <div className="process-label">
              <span></span>
              HOW WE WORK
            </div>

            <h2>
              From sourcing
              <em> to delivery.</em>
            </h2>

            <p>
              Four steps that guide every shipment we handle, from first
              contact to final delivery.
            </p>
          </div>

          <div className="process-steps reveal-group">
            <div className="process-step">
              <span className="step-number">01</span>
              <h3>Sourcing</h3>
              <p>
                Identifying and vetting suppliers across our network of
                international partners.
              </p>
            </div>

            <div className="process-step">
              <span className="step-number">02</span>
              <h3>Quality Assurance</h3>
              <p>
                Verifying specifications and quality standards before every
                shipment leaves.
              </p>
            </div>

            <div className="process-step">
              <span className="step-number">03</span>
              <h3>Trade & Logistics</h3>
              <p>
                Managing documentation, shipping and customs clearance across
                borders.
              </p>
            </div>

            <div className="process-step">
              <span className="step-number">04</span>
              <h3>Delivery</h3>
              <p>
                Coordinating final-mile logistics so materials reach buyers
                on time, every time.
              </p>
            </div>
          </div>
        </section>

        <section className="verticals" id="verticals">
          <div className="verticals-header reveal">
            <div className="verticals-label">
              <span></span>
              OUR BUSINESS
            </div>

            <h2>
              Connecting industries
              <em> across markets.</em>
            </h2>

            <p>
              We operate across a diverse range of industries, sourcing
              materials and connecting trusted international partners with
              buyers across markets.
            </p>
          </div>

          <div className="verticals-list reveal-group">
            <div className="vertical-card">
              <span className="vertical-number">01</span>

              <div>
                <h3>Textiles</h3>
                <p>Raw materials and polymers for textile manufacturing.</p>
                <ul>
                  <li>Cotton Yarns / PC Yarns / Cotton Lyocell Yarns</li>
                  <li>Cotton Grey Fabrics</li>
                  <li>Synthetic Yarns</li>
                </ul>
              </div>

              <span className="vertical-arrow">↗</span>
            </div>

            <div className="vertical-card">
              <span className="vertical-number">02</span>

              <div>
                <h3>Polymers & Chemicals</h3>
                <p>
                  Industrial materials serving diverse manufacturing sectors.
                </p>
                <ul>
                  <li>
                    Polypropylene — Film/Tape (Raffia) / Injection / CPP /
                    BOPP
                  </li>
                  <li>HDPE — Film / Injection / Monofilament Yarn</li>
                  <li>LLDPE / LDPE (Film)</li>
                  <li>PVC Resin, Suspension / Emulsion</li>
                  <li>
                    Raw materials for Textile / Leather / Plastics / Rubber
                  </li>
                  <li>ISO Mixed Xylene / Meta-Ortho-Xylene</li>
                  <li>Synthetic Rubber / SBR 1501</li>
                </ul>
              </div>

              <span className="vertical-arrow">↗</span>
            </div>

            <div className="vertical-card">
              <span className="vertical-number">03</span>

              <div>
                <h3>Chemicals</h3>
                <p>
                  Raw materials for textiles, leather, plastics, rubber and
                  paints.
                </p>
              </div>

              <span className="vertical-arrow">↗</span>
            </div>

            <div className="vertical-card">
              <span className="vertical-number">04</span>

              <div>
                <h3>Coal</h3>
                <p>
                  Thermal and metallurgical coal for industrial applications.
                </p>
                <ul>
                  <li>Thermal Coal for Cement / Textile / Energy</li>
                  <li>Semi-Coke / Metallurgical Coke / Pet-Coke</li>
                </ul>
              </div>

              <span className="vertical-arrow">↗</span>
            </div>

            <div className="vertical-card">
              <span className="vertical-number">05</span>

              <div>
                <h3>Agro Products</h3>
                <p>Pakistan-origin agricultural products for global markets.</p>
                <ul>
                  <li>Rice, Basmati / Non-Basmati</li>
                  <li>Yellow Corn — Pakistan feed grade</li>
                  <li>Sesame Seed — Pakistani</li>
                  <li>Chicken Eggs (shells) — all sizes</li>
                </ul>
              </div>

              <span className="vertical-arrow">↗</span>
            </div>
          </div>
        </section>

        <div className="stats-band">
          <div className="stats-grid reveal-group">
            <Stat value={1949} label="Established" />
            <Stat value={70} suffix="+" label="Years of Trust" />
            <Stat value={5} label="Core Verticals" />
            <Stat value={2} label="Directors Leading Today" />
          </div>
        </div>

        <section className="contact" id="contact">
          <div className="contact-header reveal">
            <div className="verticals-label">
              <span></span>
              GET IN TOUCH
            </div>

            <h2>Contact</h2>

            <p>
              Reach out to discuss sourcing, trade partnerships or any of the
              markets we operate in.
            </p>
          </div>

          <div className="contact-grid reveal">
            <div className="contact-block">
              <h3>Company</h3>
              <a href="mailto:contact@maggoonsons.com">
                contact@maggoonsons.com
              </a>
              <p>Telephone: 92-21-32418852</p>
              <p>
                512 Fifth Floor Business Center, Mumtaz Hassan Road,
                <br />
                OFF I.I Chundrigar Road, Karachi (Pakistan)
              </p>
            </div>

            <div className="contact-block">
              <h3>Directors</h3>

              <div className="director">
                <strong>Amjad Rafi</strong>
                <span>Director</span>
                <a href="tel:+923212487952">+92-321-2487952</a>
                <a href="mailto:arafi@maggoonsons.com">
                  arafi@maggoonsons.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} M.R. Maggoon & Sons. All rights
        reserved.
      </footer>
    </div>
  );
}

export default App;
