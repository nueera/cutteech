(function () {
  const asset = (path) => path;

  const solutions = [
    {
      kicker: "Textile automation",
      title: "Automatic cutting machines",
      text: "High-throughput cutting, spreading and workflow tools for apparel, furnishings and technical textile production.",
      image: "wp-content/uploads/2025/01/Automatic-Cutting-Machines.jpg",
      href: "automatic-cutting-machines/index.html"
    },
    {
      kicker: "Fabrication",
      title: "Laser QC and projection",
      text: "Virtek inspection and projection systems that bring repeatable accuracy to sheet metal, truss and assembly teams.",
      image: "wp-content/uploads/2025/01/Virtek-Laser-QC.jpg",
      href: "virtek-laser-qc/index.html"
    },
    {
      kicker: "CNC and CSM",
      title: "Advanced manufacturing cells",
      text: "Machinery, software and process support for bending, cutting, nesting, quoting and production management.",
      image: "wp-content/uploads/2025/01/Advanced-Manufacturing-Solutions-scaled.jpg",
      href: "advanced-manufacturing-solutions/index.html"
    }
  ];

  const industries = [
    ["Aerospace", "wp-content/uploads/2024/10/16689035.webp", "aerospace/index.html"],
    ["Sheet Metal", "wp-content/uploads/2024/10/3ec4b2effdd2495887037046d8d83666.webp", "sheet-metal/index.html"],
    ["Automotive", "wp-content/uploads/2024/10/12988517.webp", "automotive/index.html"],
    ["Apparel", "wp-content/uploads/2024/10/web1.webp", "apparel/index.html"],
    ["Footwear", "wp-content/uploads/2024/10/10529659.webp", "footwear/index.html"],
    ["Wind", "wp-content/uploads/2024/10/1993641.webp", "wind/index.html"],
    ["Home Furnishing", "wp-content/uploads/2024/10/1966817.webp", "home-furnishings/index.html"],
    ["Health Care", "wp-content/uploads/2024/10/file-1.png", "health-care/index.html"]
  ];

  const partners = ["Virtek", "Hexagon", "CSM", "Audaces", "J Wei", "CC Sistemas"];

  const solutionCards = solutions.map((item) => `
    <article class="ct-card">
      <img src="${asset(item.image)}" alt="${item.title}">
      <div class="ct-card__body">
        <span class="ct-card__kicker">${item.kicker}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <a class="ct-card__link" href="${item.href}">Explore solution</a>
      </div>
    </article>
  `).join("");

  const industryCards = industries.map(([name, image, href]) => `
    <a class="ct-industry" href="${href}">
      <img src="${asset(image)}" alt="${name}">
      <span>${name}</span>
    </a>
  `).join("");

  const partnerCards = partners.map((name) => `
    <div class="ct-partner">
      <strong>${name}</strong>
      <span>Authorized partner</span>
    </div>
  `).join("");

  document.addEventListener("DOMContentLoaded", function () {
    document.title = "Cuttech | Advanced Manufacturing, Cutting and Automation";
    document.body.className = "cuttech-redesign";
    document.body.innerHTML = `
      <div class="ct-site">
        <header class="ct-nav">
          <div class="ct-nav__inner">
              <a class="ct-brand" href="index.html" aria-label="Cuttech home">
              <span class="ct-brand__mark">CT</span>
              <span class="ct-brand__text">
                <span class="ct-brand__name">Cuttech</span>
                <span class="ct-brand__sub">Manufacturing technology</span>
              </span>
            </a>
            <nav class="ct-nav__links" aria-label="Primary navigation">
              <a href="#solutions">Solutions</a>
              <a href="products/index.html">Products</a>
              <a href="#industries">Industries</a>
              <a href="resources/index.html">Resources</a>
              <a href="about-us/index.html">About</a>
            </nav>
            <div class="ct-nav__actions">
              <a class="ct-btn ct-btn--secondary" href="tel:+919270307505">Call</a>
              <a class="ct-btn ct-btn--primary" href="contact-us/index.html">Contact sales</a>
            </div>
          </div>
        </header>

        <main>
          <section class="ct-hero">
            <div class="ct-hero__grid">
              <div>
                <span class="ct-eyebrow">CNC, CSM, laser QC and textile automation</span>
                <h1>Advanced Manufacturing Solutions: CNC, Laser Cutting & Automation by Cuttech</h1>
                <p class="ct-hero__lead">Cuttech helps factories modernize cutting, inspection, projection and automation workflows with proven machinery, software and implementation support.</p>
                <div class="ct-hero__actions">
                  <a class="ct-btn ct-btn--primary" href="contact-us/index.html">Discuss a project</a>
                  <a class="ct-btn ct-btn--secondary" href="#solutions">View solutions</a>
                </div>
                <div class="ct-hero__stats" aria-label="Company highlights">
                  <div class="ct-stat"><strong>8+</strong><span>Industries served across precision manufacturing</span></div>
                  <div class="ct-stat"><strong>24 hr</strong><span>Response target for technical enquiries</span></div>
                  <div class="ct-stat"><strong>360 deg</strong><span>Machinery, software, training and service support</span></div>
                </div>
              </div>
              <aside class="ct-hero__panel" aria-label="Featured solution">
                <img src="${asset("wp-content/uploads/2024/10/bluetooth-pen-plotter1.webp")}" alt="Cutting and plotting machinery">
                <div class="ct-hero__panel-body">
                  <p><strong>Applied automation, not catalog selling.</strong> Match the right machine, software and service model to the process you need to improve.</p>
                </div>
              </aside>
            </div>
          </section>

          <section class="ct-trust-strip" aria-label="Trust highlights">
            <div class="ct-trust-item"><strong>50+</strong><span>Successful installations across India</span></div>
            <div class="ct-trust-item"><strong>8</strong><span>Industry verticals served</span></div>
            <div class="ct-trust-item"><strong>6</strong><span>Global technology partners</span></div>
            <div class="ct-trust-item"><strong>24 hr</strong><span>Target response for qualified enquiries</span></div>
          </section>

          <section class="ct-section ct-section--tight" id="solutions">
            <div class="ct-section__head">
              <h2>Core solutions for modern production floors.</h2>
              <p>Focused product groups make it easier for buyers, plant heads and engineering teams to find the right path.</p>
            </div>
            <div class="ct-solutions">${solutionCards}</div>
          </section>

          <section class="ct-section ct-section--tight">
            <div class="ct-section__head">
              <h2>Partner-backed technology ecosystem.</h2>
              <p>Cuttech brings together global machinery and software partners so manufacturing teams can compare options with one technical team.</p>
            </div>
            <div class="ct-partners">${partnerCards}</div>
          </section>

          <div class="ct-band" id="industries">
            <section class="ct-section">
              <div class="ct-section__head">
                <h2>Built around real industry use cases.</h2>
                <p>From apparel cutting rooms to aerospace and sheet metal inspection, each workflow needs different machine behavior and service depth.</p>
              </div>
              <div class="ct-industries">${industryCards}</div>
            </section>
          </div>

          <section class="ct-section">
            <div class="ct-process">
              <div class="ct-process__media">
                <img src="${asset("wp-content/uploads/2024/11/Untitled-design-2024-11-18T150950.270.png")}" alt="Manufacturing automation equipment">
              </div>
              <div>
                <div class="ct-section__head">
                  <h2>From requirement to installed capability.</h2>
                </div>
                <div class="ct-steps">
                  <article class="ct-step">
                    <span class="ct-step__num">01</span>
                    <div><h3>Process review</h3><p>Map materials, throughput goals, precision needs and current production constraints.</p></div>
                  </article>
                  <article class="ct-step">
                    <span class="ct-step__num">02</span>
                    <div><h3>Solution fitment</h3><p>Select machinery, CAD/CAM, nesting, QC or automation modules that match the workflow.</p></div>
                  </article>
                  <article class="ct-step">
                    <span class="ct-step__num">03</span>
                    <div><h3>Deployment support</h3><p>Coordinate installation, training and ongoing technical support for adoption on the floor.</p></div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section class="ct-section">
            <div class="ct-cta">
              <div>
                <h2>Have a production bottleneck to solve?</h2>
                <p>Share the process, material and capacity target. Cuttech can recommend a practical machinery or automation route.</p>
              </div>
              <a class="ct-btn ct-btn--primary" href="contact-us/index.html">Start enquiry</a>
            </div>
          </section>
        </main>

        <footer class="ct-footer">
          <div class="ct-footer__inner">
            <div><strong>Cuttech</strong><br>Advanced manufacturing, cutting and automation solutions.</div>
            <div><a href="mailto:info@cuttech.in">info@cuttech.in</a><br><a href="tel:+919270307505">+91 92703 07505</a></div>
          </div>
        </footer>

        <div class="ct-sticky-desktop" aria-label="Quick contact">
          <a class="ct-btn ct-btn--primary" href="contact-us/index.html">Get a Quote</a>
          <a class="ct-btn ct-btn--secondary" href="tel:+919811502692">Call +91 98115 02692</a>
        </div>
        <div class="ct-sticky-mobile" aria-label="Quick mobile contact">
          <a class="ct-btn ct-btn--primary" href="contact-us/index.html">Get a Quote</a>
          <a class="ct-btn ct-btn--whatsapp" href="https://wa.me/919270307505">WhatsApp</a>
        </div>
      </div>
    `;
  });
})();
