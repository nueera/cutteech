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
    }
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
              <a href="resources/index.html">Resources</a>
              <a href="about-us/index.html">About</a>
            </nav>
            <div class="ct-nav__actions">
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
                  <button class="ct-btn ct-btn--secondary ct-btn--lg ct-hidden" id="pwa-install-btn" type="button">Install Cuttech</button>
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

          <!-- Process -->
          <section class="ct-section">
            <div class="ct-process">
              <div class="ct-process__media ct-animate-left">
                <img src="wp-content/uploads/2024/11/Untitled-design-2024-11-18T150950.270.png" alt="Manufacturing automation equipment" loading="lazy">
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

          <!-- Testimonials -->
          <section class="ct-section ct-section--dark">
            <div class="ct-section__head ct-animate">
              <h2>What our <span class="ct-copper">clients</span> say.</h2>
              <p>Real results from real manufacturing teams across India.</p>
            </div>
            <div class="ct-testimonials ct-stagger">${testimonialCards}</div>
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
     BACK TO TOP
     ============================================================ */
    const backTop = document.getElementById("ct-back-top");
    if (backTop) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 600) {
          backTop.classList.add("visible");
        } else {
          backTop.classList.remove("visible");
        }
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
       PAGE TRANSITIONS
       ============================================================ */
    const transition = document.createElement("div");
    transition.className = "ct-page-transition";
    document.body.appendChild(transition);

    document.querySelectorAll("a[href]").forEach(link => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http") || href.startsWith("wa.me")) return;
      link.addEventListener("click", e => {
        e.preventDefault();
        transition.classList.add("active");
        setTimeout(() => { window.location.href = href; }, 300);
      });
    });

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
       FORM VALIDATION
       ============================================================ */
    document.querySelectorAll(".ct-form").forEach(form => {
      form.addEventListener("submit", e => {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll("input[required], textarea[required], select[required]").forEach(field => {
          if (!field.checkValidity()) {
            valid = false;
            field.style.borderColor = "#ef4444";
            field.style.boxShadow = "0 0 0 3px rgba(239,68,68,0.1)";
          } else {
            field.style.borderColor = "";
            field.style.boxShadow = "";
          }
        });
        if (valid) {
          const successEl = form.querySelector(".ct-form__success") || (() => {
            const el = document.createElement("div");
            el.className = "ct-form__success";
            el.textContent = "Thank you! Your enquiry has been submitted. We'll respond within 24 hours.";
            form.appendChild(el);
            return el;
          })();
          successEl.classList.add("visible");
          form.querySelectorAll("input, textarea, select").forEach(f => f.value = "");
          setTimeout(() => successEl.classList.remove("visible"), 5000);
        }
      });
    });

    /* ============================================================
       PWA REGISTRATION
       ============================================================ */
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }

    /* PWA install prompt */
    let deferredPrompt = null;
    const installButton = document.getElementById("pwa-install-btn");

    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      deferredPrompt = e;
      if (installButton) {
        installButton.classList.remove("ct-hidden");
      }
    });

    if (installButton) {
      installButton.addEventListener("click", async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === "accepted") {
          installButton.classList.add("ct-hidden");
        }
        deferredPrompt = null;
      });
    }

    window.addEventListener("appinstalled", () => {
      if (installButton) {
        installButton.classList.add("ct-hidden");
      }
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

  });
})();
