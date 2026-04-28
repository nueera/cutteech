(function () {
  "use strict";

  /* ============================================================
     THEME SYSTEM
     ============================================================ */
  const ThemeManager = {
    KEY: "cuttech-theme",
    init() {
      const saved = localStorage.getItem(this.KEY);
      if (saved) {
        document.documentElement.setAttribute("data-theme", saved);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    },
    toggle() {
      const html = document.documentElement;
      html.classList.add("theme-transitioning");
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem(this.KEY, next);
      setTimeout(() => html.classList.remove("theme-transitioning"), 500);
    }
  };

  ThemeManager.init();

  /* ============================================================
     DATA
     ============================================================ */
  const solutions = [
    {
      kicker: "Textile automation",
      title: "Automatic cutting machines",
      text: "High-throughput cutting, spreading and workflow tools for apparel, furnishings and technical textile production.",
      image: "wp-content/uploads/2025/01/Automatic-Cutting-Machines.webp",
      href: "automatic-cutting-machines/index.html"
    },
    {
      kicker: "Fabrication",
      title: "Laser QC and projection",
      text: "Virtek inspection and projection systems that bring repeatable accuracy to sheet metal, truss and assembly teams.",
      image: "wp-content/uploads/2025/01/Virtek-Laser-QC.webp",
      href: "virtek-laser-qc/index.html"
    },
    {
      kicker: "CNC and CSM",
      title: "Advanced manufacturing cells",
      text: "Machinery, software and process support for bending, cutting, nesting, quoting and production management.",
      image: "wp-content/uploads/2025/01/Advanced-Manufacturing-Solutions-scaled.webp",
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
    ["Health Care", "wp-content/uploads/2024/10/file-1.webp", "health-care/index.html"]
  ];

  const partners = [
    { name: "Virtek", tag: "Laser systems" },
    { name: "Hexagon", tag: "CAD/CAM" },
    { name: "CSM", tag: "Tube bending" },
    { name: "Audaces", tag: "Fashion tech" },
    { name: "J Wei", tag: "Cutting systems" },
    { name: "CC Sistemas", tag: "Automation" }
  ];

  const testimonials = [
    {
      text: "Cuttech didn't just deliver a machine — they mapped our entire cutting workflow and recommended a setup that cut material waste by 18% in the first quarter.",
      name: "Rajesh M.",
      role: "Plant Head, Apparel Manufacturer",
      initials: "RM"
    },
    {
      text: "The Virtek LaserQC transformed our first-article inspection from hours to minutes. The Cuttech team stayed through installation and trained our QA staff personally.",
      name: "Priya S.",
      role: "Quality Manager, Sheet Metal Fabrication",
      initials: "PS"
    },
    {
      text: "We evaluated four vendors before choosing Cuttech. Their process-first approach meant they recommended a lower-cost CSM option that actually fit our needs better.",
      name: "Anil K.",
      role: "Director, Precision Engineering Firm",
      initials: "AK"
    },
    {
      text: "The CSM tube bender paid for itself within 8 months. Cuttech's training program meant our operators were confident from day one.",
      name: "Vikram T.",
      role: "Operations Head, Tube Manufacturing",
      initials: "VT"
    },
    {
      text: "We needed a partner who understood both the technology and the production floor reality. Cuttech bridges that gap better than anyone we've worked with.",
      name: "Sunita R.",
      role: "Procurement Director, Auto Components",
      initials: "SR"
    },
    {
      text: "From initial consultation through installation and after-sales support, the Cuttech team has been exceptional. Our laser cutting throughput increased 35%.",
      name: "Deepak M.",
      role: "CTO, Precision Sheet Metal Works",
      initials: "DM"
    }
  ];

  /* ============================================================
     FAQ DATA (Enhancement 3)
     ============================================================ */
  const faqs = [
    { q: "What industries does Cuttech serve?", a: "Cuttech serves aerospace, automotive, apparel, footwear, sheet metal, wind energy, healthcare, and home furnishings industries. Each industry has specific machine requirements, and Cuttech's multi-brand portfolio allows us to recommend the right solution for each workflow." },
    { q: "How quickly can I get a machine installed?", a: "Typical installation timelines range from 4 to 8 weeks from order confirmation, depending on machine availability and site readiness. Cuttech coordinates delivery, installation and operator training as a complete package." },
    { q: "Do you provide training after installation?", a: "Yes, every Cuttech installation includes comprehensive operator training. We stay on-site until your team is confident running the machine independently, and we provide ongoing remote and on-site technical support." },
    { q: "Can I compare products before buying?", a: "Absolutely. Cuttech offers product demonstrations at our demo centre, and our product comparison tool on the Products page lets you evaluate specifications side by side. We recommend scheduling a demo after your initial consultation." },
    { q: "What makes Cuttech different from buying direct?", a: "Cuttech provides a process-first approach. Instead of selling from a catalog, we map your production workflow, compare options across our six technology partners, and recommend the solution that best fits your actual needs — even if it means suggesting a lower-cost option." },
    { q: "Do you offer after-sales support?", a: "Yes. Cuttech provides ongoing technical support, spare parts coordination, and maintenance services. Our target response time for qualified technical enquiries is 24 hours, and we maintain service coverage across India." }
  ];

  /* ============================================================
     MEGA MENU DATA (Enhancement 6)
     ============================================================ */
  const megaMenuProducts = [
    { title: "Virtek Iris", desc: "3D laser projection system", img: "wp-content/uploads/2024/11/Screenshot-2024-11-22-153628-Photoroom.webp", href: "virtek-iris/index.html" },
    { title: "Eagle Cutting", desc: "Automated cutting solution", img: "wp-content/uploads/2024/11/monotower_eagle-scaled.webp", href: "eagle/index.html" },
    { title: "Laser Cutting", desc: "Precision CO2/fiber laser", img: "wp-content/uploads/2025/01/Laser-Cutting-Machine.webp", href: "laser-cutting-machine/index.html" },
    { title: "Fabric Roll Loader", desc: "Automated fabric handling", img: "wp-content/uploads/2024/11/ezgif.com-gif-maker-10-4.webp", href: "fabric-roll-loader/index.html" },
    { title: "CSM Tube Bender", desc: "CNC bending & forming", img: "wp-content/uploads/2025/01/CSM-Machinery.webp", href: "csm-machinery/index.html" },
    { title: "Virtek Laser QC", desc: "Inspection & reverse eng.", img: "wp-content/uploads/2025/01/Virtek-Laser-QC.webp", href: "virtek-laser-qc/index.html" }
  ];

  const megaMenuSolutions = [
    { title: "Automatic Cutting", desc: "High-throughput cutting for textiles", img: "wp-content/uploads/2025/01/Automatic-Cutting-Machines.webp", href: "automatic-cutting-machines/index.html" },
    { title: "Laser QC & Projection", desc: "Inspection and projection systems", img: "wp-content/uploads/2025/01/Virtek-Laser-QC.webp", href: "virtek-laser-qc/index.html" },
    { title: "Manufacturing Cells", desc: "CNC, CSM, nesting & quoting", img: "wp-content/uploads/2025/01/Advanced-Manufacturing-Solutions-scaled.webp", href: "advanced-manufacturing-solutions/index.html" }
  ];

  /* ============================================================
     SVG ICONS
     ============================================================ */
  const sunIcon = `<svg class="icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

  const moonIcon = `<svg class="icon-moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  const arrowUpIcon = `<svg viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`;

  /* ============================================================
     BUILD PAGE
     ============================================================ */
  const solutionCards = solutions.map(s => `
    <article class="ct-card ct-animate">
      <div class="ct-card__img-wrap">
        <img src="${s.image}" alt="${s.title}" loading="lazy">
      </div>
      <div class="ct-card__body">
        <span class="ct-card__kicker">${s.kicker}</span>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        <a class="ct-card__link" href="${s.href}">Explore solution</a>
      </div>
    </article>
  `).join("");

  const industryCards = industries.map(([name, image, href]) => `
    <a class="ct-industry ct-animate" href="${href}">
      <img src="${image}" alt="${name}" loading="lazy">
      <span>${name}</span>
    </a>
  `).join("");

  const partnerCards = partners.map(p => `
    <div class="ct-partner ct-animate">
      <strong>${p.name}</strong>
      <span>${p.tag}</span>
    </div>
  `).join("");

  const testimonialCards = testimonials.map(t => `
    <article class="ct-testimonial ct-animate">
      <p>${t.text}</p>
      <div class="ct-testimonial__author">
        <div class="ct-testimonial__avatar">${t.initials}</div>
        <div>
          <div class="ct-testimonial__name">${t.name}</div>
          <div class="ct-testimonial__role">${t.role}</div>
        </div>
      </div>
    </article>
  `).join("");

  document.addEventListener("DOMContentLoaded", function () {
    document.title = "Cuttech | Advanced Manufacturing, Cutting and Automation";
    document.body.className = "cuttech-redesign";
    document.body.innerHTML = `
      <!-- Loading Screen -->
      <div class="ct-loader" id="ct-loader">
        <div class="ct-loader__inner">
          <div class="ct-loader__mark">CT</div>
          <div class="ct-loader__bar"></div>
        </div>
      </div>

      <!-- Scroll Progress -->
      <div class="ct-progress" id="ct-progress"></div>

      <div class="ct-site">
        <!-- Ambient Background -->
        <div class="ct-ambient" aria-hidden="true">
          <div class="ct-ambient__orb ct-ambient__orb--1"></div>
          <div class="ct-ambient__orb ct-ambient__orb--2"></div>
          <div class="ct-ambient__orb ct-ambient__orb--3"></div>
        </div>

        <!-- Navigation -->
        <header class="ct-nav" id="ct-nav">
          <div class="ct-nav__inner ct-container">
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
              <a href="videos/index.html">Videos</a>
              <a href="resources/index.html">Resources</a>
              <a href="about-us/index.html">About</a>
            </nav>
            <div class="ct-nav__actions">
              <button class="ct-search-toggle" aria-label="Search" title="Search (Ctrl+K)">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </button>
              <button class="ct-theme-toggle" aria-label="Toggle theme" title="Toggle theme">
                ${sunIcon}${moonIcon}
              </button>
              <a class="ct-btn ct-btn--secondary" href="tel:+919270307505">Call</a>
              <a class="ct-btn ct-btn--primary" href="contact-us/index.html">Contact sales</a>
              <button class="ct-mobile-toggle" aria-label="Open menu">&#9776;</button>
            </div>
          </div>
        </header>

        <!-- Mobile Menu -->
        <div class="ct-mobile-menu" aria-label="Mobile navigation">
          <button class="ct-mobile-menu__close" aria-label="Close menu">&times;</button>
          <a href="#solutions">Solutions</a>
          <a href="products/index.html">Products</a>
          <a href="#industries">Industries</a>
          <a href="videos/index.html">Videos</a>
          <a href="resources/index.html">Resources</a>
          <a href="about-us/index.html">About</a>
          <a href="contact-us/index.html">Contact Sales</a>
          <a href="tel:+919270307505">Call Us</a>
        </div>

        <!-- Main Content -->
        <main>
          <!-- Hero -->
          <section class="ct-hero">
            <div class="ct-grid-pattern" aria-hidden="true"></div>
            <div class="ct-hero__mesh" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <div class="ct-hero__grid">
              <div class="ct-animate">
                <span class="ct-eyebrow">CNC, CSM, Laser QC &amp; Textile Automation</span>
                <h1>Advanced Manufacturing Solutions by <span class="ct-accent-text">Cuttech</span></h1>
                <p class="ct-hero__lead">Cuttech helps factories modernize cutting, inspection, projection and automation workflows with proven machinery, software and implementation support.</p>
                <div class="ct-hero__actions">
                  <a class="ct-btn ct-btn--primary ct-btn--lg" href="contact-us/index.html">Discuss a project</a>
                  <a class="ct-btn ct-btn--ghost ct-btn--lg" href="#solutions">View solutions</a>
                </div>
                <div class="ct-hero__stats ct-stagger" aria-label="Company highlights">
                  <div class="ct-stat ct-animate"><strong data-count="8">8+</strong><span>Industries served across precision manufacturing</span></div>
                  <div class="ct-stat ct-animate"><strong>24 hr</strong><span>Response target for technical enquiries</span></div>
                  <div class="ct-stat ct-animate"><strong>360 deg</strong><span>Machinery, software, training and service</span></div>
                </div>
              </div>
              <aside class="ct-hero__panel ct-animate" aria-label="Featured solution">
                <img src="wp-content/uploads/2024/10/bluetooth-pen-plotter1.webp" alt="Cutting and plotting machinery" loading="lazy">
                <div class="ct-hero__panel-body">
                  <p><strong>Applied automation, not catalog selling.</strong> Match the right machine, software and service model to the process you need to improve.</p>
                </div>
              </aside>
            </div>
          </section>

          <!-- Trust Strip -->
          <section class="ct-trust-strip ct-stagger" aria-label="Trust highlights">
            <div class="ct-trust-item ct-animate"><strong data-count="50">50+</strong><span>Successful installations across India</span></div>
            <div class="ct-trust-item ct-animate"><strong data-count="8">8</strong><span>Industry verticals served</span></div>
            <div class="ct-trust-item ct-animate"><strong data-count="6">6</strong><span>Global technology partners</span></div>
            <div class="ct-trust-item ct-animate"><strong>24 hr</strong><span>Target response for qualified enquiries</span></div>
          </section>

          <!-- Solutions -->
          <section class="ct-section ct-section--tight" id="solutions">
            <div class="ct-section__head ct-animate">
              <h2>Core solutions for <span class="ct-copper">modern production</span> floors.</h2>
              <p>Focused product groups make it easier for buyers, plant heads and engineering teams to find the right path.</p>
            </div>
            <div class="ct-cards ct-stagger">${solutionCards}</div>
          </section>

          <!-- Partners -->
          <section class="ct-section ct-section--tight">
            <div class="ct-section__head ct-animate">
              <h2>Partner-backed technology <span class="ct-copper">ecosystem</span>.</h2>
              <p>Cuttech brings together global machinery and software partners so manufacturing teams can compare options with one technical team.</p>
            </div>
            <div class="ct-partners ct-stagger">${partnerCards}</div>
          </section>

          <!-- Industries -->
          <div class="ct-band" id="industries">
            <section class="ct-section">
              <div class="ct-section__head ct-animate">
                <h2>Built around real <span class="ct-copper">industry</span> use cases.</h2>
                <p>From apparel cutting rooms to aerospace and sheet metal inspection, each workflow needs different machine behavior and service depth.</p>
              </div>
              <div class="ct-industries ct-stagger">${industryCards}</div>
            </section>
          </div>

          <!-- Industry Explorer -->
          <section class="ct-explorer" id="explorer">
            <div class="ct-container">
              <div class="ct-section__head ct-animate">
                <h2>Find the right <span class="ct-copper">machine</span> for your industry.</h2>
                <p>See which cutting, inspection and automation solutions match your specific industry requirements at a glance.</p>
              </div>
              <div class="ct-explorer__grid ct-animate" id="ct-explorer-grid">
                <div class="ct-explorer__row ct-explorer__row--header">
                  <div class="ct-explorer__cell"></div>
                  <div class="ct-explorer__cell" data-machine="Laser QC">Laser QC</div>
                  <div class="ct-explorer__cell" data-machine="Laser Cutting">Laser Cutting</div>
                  <div class="ct-explorer__cell" data-machine="CSM Tube Bender">CSM Tube Bender</div>
                  <div class="ct-explorer__cell" data-machine="Eagle">Eagle</div>
                  <div class="ct-explorer__cell" data-machine="Automatic Cutting">Automatic Cutting</div>
                  <div class="ct-explorer__cell" data-machine="Fabric Roll Loader">Fabric Roll Loader</div>
                </div>
                <div class="ct-explorer__row" data-industry="Aerospace">
                  <div class="ct-explorer__cell ct-explorer__cell--industry">Aerospace</div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Laser QC"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Laser Cutting"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                </div>
                <div class="ct-explorer__row" data-industry="Automotive">
                  <div class="ct-explorer__cell ct-explorer__cell--industry">Automotive</div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Laser QC"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Laser Cutting"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="CSM Tube Bender"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                </div>
                <div class="ct-explorer__row" data-industry="Apparel">
                  <div class="ct-explorer__cell ct-explorer__cell--industry">Apparel</div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Eagle"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Automatic Cutting"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Fabric Roll Loader"></span></div>
                </div>
                <div class="ct-explorer__row" data-industry="Footwear">
                  <div class="ct-explorer__cell ct-explorer__cell--industry">Footwear</div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Eagle"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Automatic Cutting"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                </div>
                <div class="ct-explorer__row" data-industry="Sheet Metal">
                  <div class="ct-explorer__cell ct-explorer__cell--industry">Sheet Metal</div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Laser QC"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Laser Cutting"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="CSM Tube Bender"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                </div>
                <div class="ct-explorer__row" data-industry="Health Care">
                  <div class="ct-explorer__cell ct-explorer__cell--industry">Health Care</div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Laser QC"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Laser Cutting"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                </div>
                <div class="ct-explorer__row" data-industry="Wind">
                  <div class="ct-explorer__cell ct-explorer__cell--industry">Wind</div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Laser QC"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Laser Cutting"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                </div>
                <div class="ct-explorer__row" data-industry="Home Furnishings">
                  <div class="ct-explorer__cell ct-explorer__cell--industry">Home Furnishings</div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Eagle"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Automatic Cutting"></span></div>
                  <div class="ct-explorer__cell"><span class="ct-explorer__dot ct-explorer__dot--active" data-machine="Fabric Roll Loader"></span></div>
                </div>
              </div>
            </div>
          </section>

          <!-- Process -->
          <section class="ct-section">
            <div class="ct-process">
              <div class="ct-process__media ct-animate-left">
                <img src="wp-content/uploads/2024/11/Untitled-design-2024-11-18T150950.270.webp" alt="Manufacturing automation equipment" loading="lazy">
              </div>
              <div>
                <div class="ct-section__head ct-animate">
                  <h2>From requirement to <span class="ct-copper">installed</span> capability.</h2>
                </div>
                <div class="ct-steps ct-stagger">
                  <article class="ct-step ct-animate">
                    <span class="ct-step__num">01</span>
                    <div><h3>Process review</h3><p>Map materials, throughput goals, precision needs and current production constraints.</p></div>
                  </article>
                  <article class="ct-step ct-animate">
                    <span class="ct-step__num">02</span>
                    <div><h3>Solution fitment</h3><p>Select machinery, CAD/CAM, nesting, QC or automation modules that match the workflow.</p></div>
                  </article>
                  <article class="ct-step ct-animate">
                    <span class="ct-step__num">03</span>
                    <div><h3>Deployment support</h3><p>Coordinate installation, training and ongoing technical support for adoption on the floor.</p></div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <!-- FAQ (Enhancement 3) -->
          <section class="ct-section" id="faq">
            <div class="ct-container">
              <div class="ct-section__head ct-animate">
                <h2>Frequently asked <span class="ct-copper">questions</span>.</h2>
                <p>Common questions from manufacturing teams evaluating Cuttech solutions.</p>
              </div>
              <div class="ct-faq ct-stagger">
                ${faqs.map(f => '<div class="ct-faq__item ct-animate"><button class="ct-faq__question"><span>' + f.q + '</span><span class="ct-faq__icon">+</span></button><div class="ct-faq__answer"><p>' + f.a + '</p></div></div>').join("")}
              </div>
            </div>
          </section>

          <!-- Testimonials Carousel -->
          <section class="ct-section ct-section--dark" id="testimonials">
            <div class="ct-section__head ct-animate">
              <h2>What our <span class="ct-copper">clients</span> say.</h2>
              <p>Real results from real manufacturing teams across India.</p>
            </div>
            <div class="ct-testimonial-carousel" id="ct-testimonial-carousel">
              <div class="ct-testimonial-carousel__viewport">
                <div class="ct-testimonial-carousel__track" id="ct-testimonial-track">
                  ${testimonialCards}
                </div>
              </div>
              <div class="ct-testimonial-carousel__nav">
                <button class="ct-testimonial-carousel__arrow ct-testimonial-carousel__arrow--prev" aria-label="Previous testimonial">
                  <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <div class="ct-testimonial-carousel__dots" id="ct-testimonial-dots"></div>
                <button class="ct-testimonial-carousel__arrow ct-testimonial-carousel__arrow--next" aria-label="Next testimonial">
                  <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg>
                </button>
              </div>
            </div>
          </section>

          <!-- CTA -->
          <section class="ct-section">
            <div class="ct-cta ct-animate-scale">
              <div>
                <h2>Have a production bottleneck to solve?</h2>
                <p>Share the process, material and capacity target. Cuttech can recommend a practical machinery or automation route.</p>
              </div>
              <a class="ct-btn ct-btn--primary ct-btn--lg" href="contact-us/index.html">Start enquiry</a>
            </div>
          </section>
        </main>

        <!-- Footer -->
        <footer class="ct-footer">
          <div class="ct-footer__inner ct-container">
            <div>
              <div class="ct-footer__brand">
                <span class="ct-footer__brand-mark">CT</span>
                <span class="ct-footer__brand-name">Cuttech</span>
              </div>
              <p class="ct-footer__desc">Advanced manufacturing, cutting and automation solutions for Indian production floors.</p>
            </div>
            <div class="ct-footer__col">
              <h4>Solutions</h4>
              <a href="automatic-cutting-machines/index.html">Automatic Cutting</a>
              <a href="virtek-laser-qc/index.html">Laser QC &amp; Projection</a>
              <a href="advanced-manufacturing-solutions/index.html">Manufacturing Cells</a>
              <a href="cnc-machinery/index.html">CNC Machinery</a>
              <a href="csm-machinery/index.html">CSM Machinery</a>
            </div>
            <div class="ct-footer__col">
              <h4>Company</h4>
              <a href="about-us/index.html">About Cuttech</a>
              <a href="products/index.html">Products</a>
              <a href="contact-us/index.html">Contact</a>
              <a href="resources/index.html">Resources</a>
              <a href="tel:+919270307505">+91 92703 07505</a>
            </div>
            <div class="ct-footer__bottom">
              <span>&copy; ${new Date().getFullYear()} Cuttech. All rights reserved.</span>
              <span>Manufacturing technology for modern production</span>
            </div>
          </div>
        </footer>

        <!-- Sticky Contact -->
        <div class="ct-sticky-desktop" aria-label="Quick contact">
          <a class="ct-btn ct-btn--primary" href="contact-us/index.html">Get a Quote</a>
          <a class="ct-btn ct-btn--secondary" href="tel:+919811502692">Call +91 98115 02692</a>
        </div>
        <div class="ct-sticky-mobile" aria-label="Quick mobile contact">
          <a class="ct-btn ct-btn--primary" href="contact-us/index.html">Get a Quote</a>
          <a class="ct-btn ct-btn--whatsapp" href="https://wa.me/919270307505">WhatsApp</a>
        </div>
      </div>

      <!-- Back to Top -->
      <button class="ct-back-top" id="ct-back-top" aria-label="Back to top">
        ${arrowUpIcon}
      </button>

      <!-- WhatsApp Float (Enhancement 2) -->
      <a class="ct-whatsapp-float" href="https://wa.me/919270307505" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <span class="ct-whatsapp-float__tooltip">Chat with us</span>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <!-- Page Transition (Enhancement 5) -->
      <div class="ct-page-transition" id="ct-page-transition">
        <span class="ct-page-transition__logo">CT</span>
      </div>

      <!-- Search Overlay -->
      <div class="ct-search-overlay" id="ct-search-overlay" aria-hidden="true">
        <div class="ct-search-overlay__backdrop"></div>
        <div class="ct-search-overlay__modal">
          <div class="ct-search-overlay__header">
            <svg class="ct-search-overlay__icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input class="ct-search-overlay__input" id="ct-search-input" type="text" placeholder="Search pages, products, industries..." autocomplete="off">
            <kbd class="ct-search-overlay__kbd">ESC</kbd>
          </div>
          <div class="ct-search-overlay__results" id="ct-search-results"></div>
          <div class="ct-search-overlay__footer">
            <span><kbd>&uarr;</kbd><kbd>&darr;</kbd> Navigate</span>
            <span><kbd>Enter</kbd> Open</span>
            <span><kbd>Esc</kbd> Close</span>
          </div>
        </div>
      </div>
    `;

    /* ============================================================
     LOADING SCREEN
     ============================================================ */
    const loader = document.getElementById("ct-loader");
    if (loader) {
      setTimeout(() => loader.classList.add("hidden"), 800);
    }

    /* ============================================================
     SCROLL PROGRESS BAR
     ============================================================ */
    const progressBar = document.getElementById("ct-progress");
    if (progressBar) {
      window.addEventListener("scroll", function () {
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
        progressBar.style.width = pct + "%%";
      }, { passive: true });
    }

    /* ============================================================
     NAV SCROLL EFFECT
     ============================================================ */
    const nav = document.getElementById("ct-nav");
    if (nav) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      }, { passive: true });
    }

    /* ============================================================
     BACK TO TOP WITH PROGRESS RING
     ============================================================ */
    const backTop = document.getElementById("ct-back-top");
    if (backTop) {
      // Add SVG progress ring
      var circumference = 2 * Math.PI * 18; // radius 18, diameter 48
      var svgRing = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgRing.setAttribute("class", "ct-back-top__ring");
      svgRing.setAttribute("viewBox", "0 0 48 48");
      svgRing.setAttribute("width", "48");
      svgRing.setAttribute("height", "48");
      var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      var gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
      gradient.setAttribute("id", "ring-gradient");
      gradient.setAttribute("x1", "0%"); gradient.setAttribute("y1", "0%");
      gradient.setAttribute("x2", "100%"); gradient.setAttribute("y2", "100%");
      var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop1.setAttribute("offset", "0%"); stop1.setAttribute("stop-color", "#C85A18");
      var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop2.setAttribute("offset", "100%"); stop2.setAttribute("stop-color", "#1A5BF0");
      gradient.appendChild(stop1); gradient.appendChild(stop2);
      defs.appendChild(gradient);
      svgRing.appendChild(defs);
      // Background circle
      var bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      bgCircle.setAttribute("cx", "24"); bgCircle.setAttribute("cy", "24");
      bgCircle.setAttribute("r", "18"); bgCircle.setAttribute("fill", "none");
      bgCircle.setAttribute("stroke", "currentColor"); bgCircle.setAttribute("stroke-width", "3");
      bgCircle.setAttribute("opacity", "0.12");
      svgRing.appendChild(bgCircle);
      // Progress circle
      var progressCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      progressCircle.setAttribute("cx", "24"); progressCircle.setAttribute("cy", "24");
      progressCircle.setAttribute("r", "18"); progressCircle.setAttribute("fill", "none");
      progressCircle.setAttribute("stroke", "url(#ring-gradient)");
      progressCircle.setAttribute("stroke-width", "3");
      progressCircle.setAttribute("stroke-linecap", "round");
      progressCircle.setAttribute("stroke-dasharray", circumference);
      progressCircle.setAttribute("stroke-dashoffset", circumference);
      progressCircle.setAttribute("transform", "rotate(-90 24 24)");
      svgRing.appendChild(progressCircle);

      // Wrap existing content
      var existingContent = backTop.innerHTML;
      backTop.innerHTML = "";
      backTop.appendChild(svgRing);
      var arrowWrap = document.createElement("span");
      arrowWrap.className = "ct-back-top__arrow";
      arrowWrap.innerHTML = existingContent;
      backTop.appendChild(arrowWrap);

      window.addEventListener("scroll", function () {
        if (window.scrollY > 600) {
          backTop.classList.add("visible");
        } else {
          backTop.classList.remove("visible");
        }
        // Update progress ring
        var docH = document.documentElement.scrollHeight - window.innerHeight;
        var pct = docH > 0 ? (window.scrollY / docH) : 0;
        var offset = circumference - (pct * circumference);
        progressCircle.setAttribute("stroke-dashoffset", offset);
      }, { passive: true });

      backTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    /* ============================================================
     SCROLL ANIMATIONS (Intersection Observer)
     ============================================================ */
    function setupScrollAnimations() {
      const elements = document.querySelectorAll(".ct-animate, .ct-animate-scale, .ct-animate-left");
      if (!elements.length || !("IntersectionObserver" in window)) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("ct-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
      );

      elements.forEach((el) => observer.observe(el));
    }

    /* ============================================================
     ANIMATED COUNTERS
     ============================================================ */
    function setupCounters() {
      const counters = document.querySelectorAll("[data-count]");
      if (!counters.length || !("IntersectionObserver" in window)) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const target = parseInt(el.getAttribute("data-count"), 10);
              if (isNaN(target)) return;
              let current = 0;
              const duration = 1500;
              const step = Math.ceil(target / (duration / 16));
              const suffix = el.textContent.replace(/[0-9]/g, "");

              function update() {
                current += step;
                if (current >= target) {
                  el.textContent = target + suffix;
                } else {
                  el.textContent = current + suffix;
                  requestAnimationFrame(update);
                }
              }
              requestAnimationFrame(update);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach((el) => observer.observe(el));
    }

    /* ============================================================
     MOBILE MENU
     ============================================================ */
    function setupMobileMenu() {
      const toggle = document.querySelector(".ct-mobile-toggle");
      const menu = document.querySelector(".ct-mobile-menu");
      const close = document.querySelector(".ct-mobile-menu__close");
      if (!toggle || !menu) return;

      toggle.addEventListener("click", () => {
        menu.classList.add("ct-mobile-menu--open");
        document.body.style.overflow = "hidden";
      });

      function closeMenu() {
        menu.classList.remove("ct-mobile-menu--open");
        document.body.style.overflow = "";
      }

      if (close) close.addEventListener("click", closeMenu);
      menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    }

    /* ============================================================
     NAV HIGHLIGHT
     ============================================================ */
    function setupNavHighlight() {
      const links = document.querySelectorAll(".ct-nav__links a[href^='#']");
      if (!links.length) return;

      function update() {
        const scrollY = window.scrollY + 120;
        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === "#") return;
          const section = document.querySelector(href);
          if (!section) return;
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }

      window.addEventListener("scroll", update, { passive: true });
      update();
    }

    /* ============================================================
     THEME TOGGLE
     ============================================================ */
    const themeBtn = document.querySelector(".ct-theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => ThemeManager.toggle());
    }

    /* ---- Initialize everything ---- */
    setupScrollAnimations();
    setupCounters();
    setupMobileMenu();
    setupNavHighlight();

    /* ============================================================
       FAQ ACCORDION (Enhancement 3)
       ============================================================ */
    function setupFaq() {
      document.querySelectorAll(".ct-faq__question").forEach(btn => {
        btn.addEventListener("click", () => {
          const item = btn.closest(".ct-faq__item");
          const isOpen = item.classList.contains("ct-faq__item--open");
          // Close all
          document.querySelectorAll(".ct-faq__item--open").forEach(openItem => {
            openItem.classList.remove("ct-faq__item--open");
          });
          // Toggle current
          if (!isOpen) {
            item.classList.add("ct-faq__item--open");
          }
        });
      });
    }
    setupFaq();

    /* ============================================================
       MEGA MENU (Enhancement 6)
       ============================================================ */
    function setupMegaMenu() {
      const navEl = document.getElementById("ct-nav");
      if (!navEl) return;
      const productsLink = navEl.querySelector('.ct-nav__links a[href*="products"]');
      const solutionsLink = navEl.querySelector('.ct-nav__links a[href="#solutions"]');

      function buildMegaMenu(items, type) {
        const grid = items.map(item =>
          '<a class="ct-mega-menu__card" href="' + item.href + '">' +
          '<img class="ct-mega-menu__card-img" src="' + item.img + '" alt="' + item.title + '" loading="lazy">' +
          '<div><h4>' + item.title + '</h4><p>' + item.desc + '</p></div></a>'
        ).join("");
        return '<div class="ct-mega-menu" data-mega="' + type + '"><div class="ct-mega-menu__inner"><div class="ct-mega-menu__grid">' + grid + '</div></div></div>';
      }

      // Add mega menus after nav
      if (productsLink) {
        productsLink.insertAdjacentHTML("afterend", buildMegaMenu(megaMenuProducts, "products"));
        const megaEl = productsLink.parentElement.querySelector('[data-mega="products"]');
        if (megaEl) {
          const wrapper = document.createElement("div");
          wrapper.style.position = "relative";
          wrapper.style.display = "contents";
          productsLink.parentElement.insertBefore(megaEl, productsLink.parentElement.firstChild);
        }
      }

      // Hover logic for products link
      if (productsLink) {
        const productsMega = navEl.querySelector('[data-mega="products"]');
        if (productsMega) {
          let productsTimeout;
          productsLink.addEventListener("mouseenter", () => {
            clearTimeout(productsTimeout);
            navEl.querySelectorAll(".ct-mega-menu--visible").forEach(m => m.classList.remove("ct-mega-menu--visible"));
            productsMega.classList.add("ct-mega-menu--visible");
          });
          productsLink.parentElement.addEventListener("mouseleave", () => {
            productsTimeout = setTimeout(() => productsMega.classList.remove("ct-mega-menu--visible"), 200);
          });
          productsMega.addEventListener("mouseenter", () => clearTimeout(productsTimeout));
          productsMega.addEventListener("mouseleave", () => {
            productsTimeout = setTimeout(() => productsMega.classList.remove("ct-mega-menu--visible"), 200);
          });
        }
      }
    }
    setupMegaMenu();

    /* ============================================================
       PAGE TRANSITIONS (Enhancement 5)
       ============================================================ */
    const ptEl = document.getElementById("ct-page-transition");
    if (ptEl) {
      document.querySelectorAll("a[href]").forEach(link => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http") || href.indexOf("wa.me") !== -1) return;
        link.addEventListener("click", e => {
          e.preventDefault();
          ptEl.classList.add("active");
          setTimeout(() => { window.location.href = href; }, 300);
        });
      });
    }

    /* ============================================================
       AVIF IMAGE SUPPORT (Enhancement 10)
       ============================================================ */
    function checkAvifSupport() {
      return new Promise(function(resolve) {
        var img = new Image();
        img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdQAAAAAAAAAAAAAAAAAAAAAAAADxbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdQAAAAAAAAAAAAAAAAAAAAAAAADxbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdQAAAAAAAAAAAAAAAAAAAAAAAADxbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdQAAAAAAAAAAAAAAAAAAAAAAAADxbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdQAAAAAAAAAAAAAAAAAAAAAAAADxbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdQAAAAAAAAAAAAAAAAAAAAAAAADxbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==';
        img.onload = function() { resolve(true); };
        img.onerror = function() { resolve(false); };
      });
    }
    checkAvifSupport().then(function(supported) {
      if (supported) {
        document.querySelectorAll("img[src$='.webp']").forEach(function(img) {
          img.setAttribute("data-avif-supported", "true");
        });
      }
    });

    /* ============================================================
       3D CARD TILT EFFECT
       ============================================================ */
    function setupTiltCards() {
      const cards = document.querySelectorAll(".ct-card, .ct-trust-item");
      cards.forEach(card => {
        card.classList.add("ct-tilt");
        card.addEventListener("mousemove", e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -4;
          const rotateY = ((x - centerX) / centerX) * 4;
          card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });
        card.addEventListener("mouseleave", () => {
          card.style.transform = "";
        });
      });
    }
    setupTiltCards();

    /* ============================================================
       TEXT REVEAL ANIMATION
       ============================================================ */
    function setupTextReveal() {
      const headings = document.querySelectorAll(".ct-hero h1, .ct-page-hero h1");
      headings.forEach(h => {
        const text = h.innerHTML;
        let charIndex = 0;
        const wrapped = text.replace(/>([^<]+)</g, (match, content) => {
          const chars = content.split("").map(ch => {
            if (ch === " ") return " ";
            charIndex++;
            return `<span class="ct-reveal__char" style="animation-delay:${charIndex * 0.03}s">${ch}</span>`;
          }).join("");
          return `>${chars}<`;
        });
        h.innerHTML = wrapped;
      });
    }
    setupTextReveal();

    /* ============================================================
       IMAGE LIGHTBOX
       ============================================================ */
    function setupLightbox() {
      const lb = document.createElement("div");
      lb.className = "ct-lightbox";
      lb.id = "ct-lightbox";
      lb.innerHTML = `
        <button class="ct-lightbox__close" aria-label="Close">&times;</button>
        <button class="ct-lightbox__nav ct-lightbox__nav--prev" aria-label="Previous">&#8249;</button>
        <button class="ct-lightbox__nav ct-lightbox__nav--next" aria-label="Next">&#8250;</button>
        <img class="ct-lightbox__img" id="ct-lightbox-img" src="" alt="">
        <div class="ct-lightbox__caption" id="ct-lightbox-caption"></div>
      `;
      document.body.appendChild(lb);

      let galleryImages = [];
      let currentIndex = 0;

      function openLightbox(src, alt, images) {
        galleryImages = images || [src];
        currentIndex = galleryImages.indexOf(src);
        if (currentIndex < 0) currentIndex = 0;
        document.getElementById("ct-lightbox-img").src = src;
        document.getElementById("ct-lightbox-caption").textContent = alt || "";
        lb.classList.add("open");
        document.body.style.overflow = "hidden";
      }

      function closeLightbox() {
        lb.classList.remove("open");
        document.body.style.overflow = "";
      }

      lb.querySelector(".ct-lightbox__close").addEventListener("click", closeLightbox);
      lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });

      lb.querySelector(".ct-lightbox__nav--prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        document.getElementById("ct-lightbox-img").src = galleryImages[currentIndex];
      });

      lb.querySelector(".ct-lightbox__nav--next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        document.getElementById("ct-lightbox-img").src = galleryImages[currentIndex];
      });

      document.addEventListener("keydown", e => {
        if (!lb.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") lb.querySelector(".ct-lightbox__nav--prev").click();
        if (e.key === "ArrowRight") lb.querySelector(".ct-lightbox__nav--next").click();
      });

      /* Attach to gallery items and card images */
      document.querySelectorAll(".ct-gallery__item img, .ct-card img, .ct-hero__panel img").forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
          const allImgs = Array.from(document.querySelectorAll(".ct-card img, .ct-gallery__item img")).map(i => i.src);
          openLightbox(img.src, img.alt, allImgs);
        });
      });
    }
    setupLightbox();

    /* ============================================================
       LAZY LOADING ENHANCEMENT
       ============================================================ */
    function setupLazyLoad() {
      const images = document.querySelectorAll("img[loading='lazy']");
      if (!images.length || !("IntersectionObserver" in window)) return;
      images.forEach(img => {
        img.style.opacity = "0";
        img.style.transition = "opacity 0.5s ease";
        img.addEventListener("load", () => { img.style.opacity = "1"; });
        if (img.complete) img.style.opacity = "1";
      });
    }
    setupLazyLoad();

    /* ============================================================
       FORM HANDLER — Real backend + localStorage backup
       ============================================================ */
    var FORM_WEBHOOK = "https://docs.google.com/forms/d/e/FORM_ID/formResponse";

    function showFormState(form, state, retryFn) {
      // Remove previous states
      var old = form.querySelectorAll(".ct-form__success, .ct-form__error, .ct-form__spinner");
      old.forEach(function(el) { el.remove(); });

      if (state === "submitting") {
        form.classList.add("ct-form--submitting");
        form.querySelectorAll("input, textarea, select, button").forEach(function(f) { f.disabled = true; });
        var spinner = document.createElement("div");
        spinner.className = "ct-form__spinner";
        spinner.innerHTML = '<div class="ct-form__spinner-dot"></div><div class="ct-form__spinner-dot"></div><div class="ct-form__spinner-dot"></div>';
        form.appendChild(spinner);
      } else if (state === "success") {
        form.classList.remove("ct-form--submitting");
        form.querySelectorAll("input, textarea, select, button").forEach(function(f) { f.disabled = false; });
        form.querySelectorAll("input, textarea, select").forEach(function(f) { f.value = ""; });
        var successEl = document.createElement("div");
        successEl.className = "ct-form__success";
        successEl.innerHTML = '<svg viewBox="0 0 52 52" class="ct-form__checkmark"><circle cx="26" cy="26" r="25" fill="none"/><path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg><span>Thank you! Your enquiry has been submitted. We\'ll respond within 24 hours.</span>';
        form.appendChild(successEl);
        setTimeout(function() { successEl.classList.add("visible"); }, 50);
        setTimeout(function() {
          successEl.classList.remove("visible");
          setTimeout(function() { successEl.remove(); }, 400);
        }, 5000);
      } else if (state === "error") {
        form.classList.remove("ct-form--submitting");
        form.querySelectorAll("input, textarea, select, button").forEach(function(f) { f.disabled = false; });
        var errorEl = document.createElement("div");
        errorEl.className = "ct-form__error";
        errorEl.innerHTML = '<span>Submission failed. Please try again.</span><button type="button" class="ct-form__retry">Retry</button>';
        form.appendChild(errorEl);
        errorEl.querySelector(".ct-form__retry").addEventListener("click", function() {
          errorEl.remove();
          if (retryFn) retryFn();
        });
      }
    }

    function handleFormSubmit(form) {
      var valid = true;
      form.querySelectorAll("input[required], textarea[required], select[required]").forEach(function(field) {
        if (!field.checkValidity()) {
          valid = false;
          field.style.borderColor = "#ef4444";
          field.style.boxShadow = "0 0 0 3px rgba(239,68,68,0.1)";
        } else {
          field.style.borderColor = "";
          field.style.boxShadow = "";
        }
      });
      if (!valid) return;

      // Collect form data
      var formData = {};
      form.querySelectorAll("input, textarea, select").forEach(function(field) {
        if (field.name) formData[field.name] = field.value;
      });
      formData._timestamp = new Date().toISOString();
      formData._page = window.location.href;

      // Save to localStorage as backup
      try {
        var stored = JSON.parse(localStorage.getItem("cuttech-form-submissions") || "[]");
        stored.push(formData);
        localStorage.setItem("cuttech-form-submissions", JSON.stringify(stored));
      } catch (e) {}

      // Track with dataLayer
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "form_submission",
          form_name: form.id || "ct-form",
          page_url: window.location.href
        });
      }

      showFormState(form, "submitting");

      // Submit to webhook
      var body = new FormData();
      Object.keys(formData).forEach(function(key) { body.append(key, formData[key]); });

      fetch(FORM_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        body: body
      }).then(function() {
        showFormState(form, "success");
      }).catch(function() {
        showFormState(form, "error", function() { handleFormSubmit(form); });
      });
    }

    document.querySelectorAll(".ct-form").forEach(function(form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        handleFormSubmit(form);
      });
    });

    /* ============================================================
       SITE SEARCH
       ============================================================ */
    var searchIndex = [
      { title: "Automatic Cutting Machines", desc: "High-throughput cutting for textiles", url: "automatic-cutting-machines/index.html", cat: "Solutions" },
      { title: "Laser QC & Projection", desc: "Virtek inspection and projection", url: "virtek-laser-qc/index.html", cat: "Solutions" },
      { title: "Advanced Manufacturing", desc: "CNC, CSM, bending, nesting", url: "advanced-manufacturing-solutions/index.html", cat: "Solutions" },
      { title: "CNC Machinery", desc: "Computer numerical control machines", url: "cnc-machinery/index.html", cat: "Products" },
      { title: "CSM Machinery", desc: "Tube bending and forming", url: "csm-machinery/index.html", cat: "Products" },
      { title: "Virtek Iris", desc: "Laser projection system", url: "virtek-iris/index.html", cat: "Products" },
      { title: "Eagle Cutting System", desc: "Automated cutting solution", url: "eagle/index.html", cat: "Products" },
      { title: "Laser Cutting Machine", desc: "Precision laser cutting", url: "laser-cutting-machine/index.html", cat: "Products" },
      { title: "Fabric Roll Loader", desc: "Automated fabric handling", url: "fabric-roll-loader/index.html", cat: "Products" },
      { title: "Process Automation", desc: "Workflow automation solutions", url: "process-automation/index.html", cat: "Services" },
      { title: "Textile Manufacturing Automation", desc: "End-to-end textile automation", url: "automation-for-textile-manufacturing/index.html", cat: "Services" },
      { title: "Manufacturing Automation", desc: "Smart factory solutions", url: "manufacturing-automation/index.html", cat: "Services" },
      { title: "Aerospace", desc: "Precision cutting for aerospace", url: "aerospace/index.html", cat: "Industries" },
      { title: "Automotive", desc: "Automotive manufacturing solutions", url: "automotive/index.html", cat: "Industries" },
      { title: "Apparel", desc: "Fashion and apparel cutting", url: "apparel/index.html", cat: "Industries" },
      { title: "Footwear", desc: "Footwear pattern cutting", url: "footwear/index.html", cat: "Industries" },
      { title: "Sheet Metal", desc: "Sheet metal fabrication", url: "sheet-metal/index.html", cat: "Industries" },
      { title: "Health Care", desc: "Medical material cutting", url: "health-care/index.html", cat: "Industries" },
      { title: "Wind Energy", desc: "Composite cutting for wind", url: "wind/index.html", cat: "Industries" },
      { title: "Home Furnishings", desc: "Furniture and furnishing cutting", url: "home-furnishings/index.html", cat: "Industries" },
      { title: "Hexagon", desc: "CAD/CAM partner", url: "hexagon/index.html", cat: "Partners" },
      { title: "Audaces", desc: "Fashion technology partner", url: "audaces/index.html", cat: "Partners" },
      { title: "Virtek", desc: "Laser systems partner", url: "virtek/index.html", cat: "Partners" },
      { title: "About Cuttech", desc: "Company mission and values", url: "about-us/index.html", cat: "Company" },
      { title: "Contact Us", desc: "Get in touch with Cuttech", url: "contact-us/index.html", cat: "Company" },
      { title: "Products", desc: "Browse all products", url: "products/index.html", cat: "Products" },
      { title: "Resources", desc: "Guides, case studies and more", url: "resources/index.html", cat: "Company" },
      { title: "Demo Booking", desc: "Book a machine demonstration", url: "demo-booking/index.html", cat: "Company" },
      { title: "Case Studies", desc: "Real results from real teams", url: "case-studies/index.html", cat: "Resources" },
      { title: "Career", desc: "Join the Cuttech team", url: "career/index.html", cat: "Company" }
    ];

    function setupSearch() {
      var overlay = document.getElementById("ct-search-overlay");
      var input = document.getElementById("ct-search-input");
      var results = document.getElementById("ct-search-results");
      var toggleBtn = document.querySelector(".ct-search-toggle");
      if (!overlay || !input || !results) return;

      var activeIndex = -1;
      var debounceTimer = null;

      function openSearch() {
        overlay.classList.add("open");
        overlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        setTimeout(function() { input.focus(); }, 100);
      }

      function closeSearch() {
        overlay.classList.remove("open");
        overlay.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        input.value = "";
        results.innerHTML = "";
        activeIndex = -1;
      }

      if (toggleBtn) toggleBtn.addEventListener("click", openSearch);
      overlay.querySelector(".ct-search-overlay__backdrop").addEventListener("click", closeSearch);

      // Keyboard shortcut Ctrl+K / Cmd+K
      document.addEventListener("keydown", function(e) {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
          e.preventDefault();
          if (overlay.classList.contains("open")) closeSearch();
          else openSearch();
          return;
        }
        if (e.key === "Escape" && overlay.classList.contains("open")) {
          closeSearch();
          return;
        }
      });

      function fuzzyMatch(query, text) {
        query = query.toLowerCase();
        text = text.toLowerCase();
        // Simple fuzzy: check if all chars appear in order
        var qi = 0;
        for (var ti = 0; ti < text.length && qi < query.length; ti++) {
          if (text[ti] === query[qi]) qi++;
        }
        return qi === query.length;
      }

      function search(query) {
        if (!query.trim()) { results.innerHTML = ""; return; }
        var matches = searchIndex.filter(function(item) {
          return fuzzyMatch(query, item.title) || fuzzyMatch(query, item.desc) || fuzzyMatch(query, item.cat);
        });

        if (!matches.length) {
          results.innerHTML = '<div class="ct-search-overlay__empty">No results found for "' + query.replace(/"/g, "&quot;") + '"</div>';
          return;
        }

        // Group by category
        var groups = {};
        matches.forEach(function(m) {
          if (!groups[m.cat]) groups[m.cat] = [];
          groups[m.cat].push(m);
        });

        var html = "";
        var catOrder = ["Solutions", "Products", "Services", "Industries", "Partners", "Company", "Resources"];
        catOrder.forEach(function(cat) {
          if (!groups[cat]) return;
          html += '<div class="ct-search-overlay__group"><div class="ct-search-overlay__group-label">' + cat + '</div>';
          groups[cat].forEach(function(item) {
            html += '<a class="ct-search-overlay__item" href="' + item.url + '"><div class="ct-search-overlay__item-title">' + item.title + '</div><div class="ct-search-overlay__item-desc">' + item.desc + '</div></a>';
          });
          html += '</div>';
        });
        results.innerHTML = html;
        activeIndex = -1;
      }

      input.addEventListener("input", function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() { search(input.value); }, 200);
      });

      // Keyboard navigation in results
      input.addEventListener("keydown", function(e) {
        var items = results.querySelectorAll(".ct-search-overlay__item");
        if (!items.length) return;
        if (e.key === "ArrowDown") {
          e.preventDefault();
          activeIndex = Math.min(activeIndex + 1, items.length - 1);
          updateActiveItem(items);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          activeIndex = Math.max(activeIndex - 1, 0);
          updateActiveItem(items);
        } else if (e.key === "Enter" && activeIndex >= 0 && items[activeIndex]) {
          e.preventDefault();
          items[activeIndex].click();
        }
      });

      function updateActiveItem(items) {
        items.forEach(function(item, i) {
          item.classList.toggle("active", i === activeIndex);
        });
        if (items[activeIndex]) items[activeIndex].scrollIntoView({ block: "nearest" });
      }
    }
    setupSearch();

    /* ============================================================
       TESTIMONIAL CAROUSEL
       ============================================================ */
    function setupTestimonialCarousel() {
      var carousel = document.getElementById("ct-testimonial-carousel");
      var track = document.getElementById("ct-testimonial-track");
      var dotsContainer = document.getElementById("ct-testimonial-dots");
      if (!carousel || !track) return;

      var slides = Array.from(track.querySelectorAll(".ct-testimonial"));
      var total = slides.length;
      if (!total) return;

      var isMobile = window.innerWidth < 768;
      var perView = isMobile ? 1 : 3;
      var totalPages = Math.ceil(total / perView);
      var currentPage = 0;
      var autoTimer = null;
      var isPaused = false;

      // Create dots
      function buildDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = "";
        for (var i = 0; i < totalPages; i++) {
          var dot = document.createElement("button");
          dot.className = "ct-testimonial-carousel__dot" + (i === currentPage ? " active" : "");
          dot.setAttribute("aria-label", "Go to slide " + (i + 1));
          (function(idx) {
            dot.addEventListener("click", function() { goTo(idx); });
          })(i);
          dotsContainer.appendChild(dot);
        }
      }

      function goTo(page) {
        currentPage = page;
        if (currentPage >= totalPages) currentPage = 0;
        if (currentPage < 0) currentPage = totalPages - 1;
        var pct = (currentPage * perView * (100 / total));
        track.style.transform = "translateX(-" + pct + "%)";
        // Update dots
        if (dotsContainer) {
          var dots = dotsContainer.querySelectorAll(".ct-testimonial-carousel__dot");
          dots.forEach(function(d, i) { d.classList.toggle("active", i === currentPage); });
        }
      }

      function next() { goTo(currentPage + 1); }
      function prev() { goTo(currentPage - 1); }

      // Set slide widths
      slides.forEach(function(s) { s.style.minWidth = (100 / total) + "%"; s.style.flex = "0 0 " + (100 / total) + "%"; });

      buildDots();
      goTo(0);

      // Arrow buttons
      var prevBtn = carousel.querySelector(".ct-testimonial-carousel__arrow--prev");
      var nextBtn = carousel.querySelector(".ct-testimonial-carousel__arrow--next");
      if (prevBtn) prevBtn.addEventListener("click", function() { prev(); resetAuto(); });
      if (nextBtn) nextBtn.addEventListener("click", function() { next(); resetAuto(); });

      // Auto-rotate
      function startAuto() { autoTimer = setInterval(function() { if (!isPaused) next(); }, 5000); }
      function resetAuto() { clearInterval(autoTimer); startAuto(); }
      startAuto();

      // Pause on hover
      carousel.addEventListener("mouseenter", function() { isPaused = true; });
      carousel.addEventListener("mouseleave", function() { isPaused = false; });

      // Touch swipe
      var touchStartX = 0;
      track.addEventListener("touchstart", function(e) { touchStartX = e.touches[0].clientX; }, { passive: true });
      track.addEventListener("touchend", function(e) {
        var diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); resetAuto(); }
      }, { passive: true });

      // Resize handler
      window.addEventListener("resize", function() {
        var newMobile = window.innerWidth < 768;
        if (newMobile !== isMobile) {
          isMobile = newMobile;
          perView = isMobile ? 1 : 3;
          totalPages = Math.ceil(total / perView);
          buildDots();
          goTo(0);
        }
      });
    }
    setupTestimonialCarousel();

    /* ============================================================
       INDUSTRY EXPLORER INTERACTIVITY
       ============================================================ */
    function setupExplorer() {
      const grid = document.getElementById("ct-explorer-grid");
      if (!grid) return;

      const rows = grid.querySelectorAll(".ct-explorer__row:not(.ct-explorer__row--header)");
      const headerCells = grid.querySelectorAll(".ct-explorer__row--header .ct-explorer__cell[data-machine]");

      function clearHighlights() {
        rows.forEach(r => r.classList.remove("ct-explorer__row--highlight"));
        grid.querySelectorAll(".ct-explorer__cell--active").forEach(c => c.classList.remove("ct-explorer__cell--active"));
        grid.querySelectorAll(".ct-explorer__dot--match").forEach(d => d.classList.remove("ct-explorer__dot--match"));
      }

      // Click on industry row
      rows.forEach(row => {
        row.querySelector(".ct-explorer__cell--industry").addEventListener("click", () => {
          const isActive = row.classList.contains("ct-explorer__row--highlight");
          clearHighlights();
          if (!isActive) {
            row.classList.add("ct-explorer__row--highlight");
            // Highlight all active dots in this row
            row.querySelectorAll(".ct-explorer__dot--active").forEach(dot => {
              dot.classList.add("ct-explorer__dot--match");
            });
            // Highlight matching machine columns
            const machines = Array.from(row.querySelectorAll(".ct-explorer__dot--active")).map(d => d.getAttribute("data-machine"));
            headerCells.forEach(cell => {
              if (machines.includes(cell.getAttribute("data-machine"))) {
                cell.classList.add("ct-explorer__cell--active");
              }
            });
          }
        });
      });

      // Click on machine column header
      headerCells.forEach(cell => {
        cell.addEventListener("click", () => {
          const machine = cell.getAttribute("data-machine");
          const isActive = cell.classList.contains("ct-explorer__cell--active");
          clearHighlights();
          if (!isActive) {
            cell.classList.add("ct-explorer__cell--active");
            // Highlight rows that have this machine
            rows.forEach(row => {
              const hasMachine = row.querySelector(`.ct-explorer__dot--active[data-machine="${machine}"]`);
              if (hasMachine) {
                row.classList.add("ct-explorer__row--highlight");
                hasMachine.classList.add("ct-explorer__dot--match");
              }
            });
          }
        });
      });
    }
    setupExplorer();

    /* ============================================================
       REMOVE PWA / SERVICE WORKER — Block install prompts
       ============================================================ */
    // Unregister any existing service workers
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        registrations.forEach(function(registration) {
          registration.unregister();
        });
      }).catch(function() {});
    }

    // Block native PWA install prompt
    window.addEventListener("beforeinstallprompt", function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }, { capture: true });

    // Block appinstalled event
    window.addEventListener("appinstalled", function(e) {
      e.preventDefault();
    });

    /* ============================================================
       BOTTOM MOBILE NAV (App-like)
       ============================================================ */
    function setupBottomNav() {
      const nav = document.createElement("div");
      nav.className = "ct-bottom-nav";
      nav.innerHTML = `
        <div class="ct-bottom-nav__inner">
          <a class="ct-bottom-nav__item" href="index.html"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Home</a>
          <a class="ct-bottom-nav__item" href="products/index.html"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>Products</a>
          <a class="ct-bottom-nav__item" href="contact-us/index.html"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Contact</a>
          <a class="ct-bottom-nav__item" href="about-us/index.html"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>About</a>
          <a class="ct-bottom-nav__item" href="tel:+919270307505"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Call</a>
        </div>
      `;
      document.body.appendChild(nav);
    }
    setupBottomNav();

    /* ============================================================
       PULL TO REFRESH (Mobile)
       ============================================================ */
    let touchStartY = 0;
    let pulling = false;
    document.addEventListener("touchstart", e => {
      if (window.scrollY === 0) touchStartY = e.touches[0].clientY;
    }, { passive: true });
    document.addEventListener("touchmove", e => {
      const diff = e.touches[0].clientY - touchStartY;
      if (diff > 80 && window.scrollY === 0 && !pulling) {
        pulling = true;
        location.reload();
      }
    }, { passive: true });

    /* ============================================================
       DYNAMIC COPYRIGHT YEAR
       ============================================================ */
    document.querySelectorAll('.ct-footer__bottom span, .ct-footer__copy').forEach(function(el) {
      el.innerHTML = el.innerHTML.replace(/©\s*\d{4}/, '© ' + new Date().getFullYear());
    });

  });
})();
