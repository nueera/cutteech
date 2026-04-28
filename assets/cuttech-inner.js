/**
 * Cuttech Premium Corporate — Inner Pages
 * Theme Toggle + Scroll Animations + Nav Effects + Back to Top + Logo
 */
(function () {
  "use strict";

  /* ---- Theme System ---- */
  var KEY = "cuttech-theme";
  function initTheme() {
    var saved = localStorage.getItem(KEY);
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }

  function toggleTheme() {
    var html = document.documentElement;
    html.classList.add("theme-transitioning");
    var current = html.getAttribute("data-theme");
    var next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
    setTimeout(function () { html.classList.remove("theme-transitioning"); }, 500);
  }

  /* Prevent PWA install prompt — Block completely */
  window.addEventListener("beforeinstallprompt", function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, { capture: true });

  window.addEventListener("appinstalled", function(e) {
    e.preventDefault();
  });

  // Unregister any existing service workers
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(registration) {
        registration.unregister();
      });
    }).catch(function() {});
  }

  initTheme();

  /* ---- SVG Icons ---- */
  var sunSVG = '<svg class="icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var moonSVG = '<svg class="icon-moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var arrowUpSVG = '<svg viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>';

  document.addEventListener("DOMContentLoaded", function () {
    /* ---- Replace text brand marks with logo ---- */
    document.querySelectorAll(".ct-brand__mark, .ct-footer__brand-mark").forEach(function(mark) {
      if (mark.querySelector("img")) return; // already has image
      var text = mark.textContent.trim();
      if (text === "CT" || text === "") {
        var img = document.createElement("img");
        // Determine relative path based on depth
        var depth = (window.location.pathname.match(/\//g) || []).length - 1;
        var basePath = "";
        for (var i = 0; i < depth; i++) basePath += "../";
        if (!basePath) basePath = "./";
        img.src = basePath + "assets/cuttech-logo.png";
        img.alt = "Cuttech";
        img.onerror = function() { 
          mark.innerHTML = "CT"; 
          mark.classList.add("ct-brand__mark--text", "ct-footer__brand-mark--text"); 
        };
        mark.innerHTML = "";
        mark.appendChild(img);
      }
    });

    /* ---- Inject theme toggle and search into nav ---- */
    var navActions = document.querySelector(".ct-nav__actions");
    if (navActions) {
      // Search button
      var searchBtn = document.createElement("button");
      searchBtn.className = "ct-search-toggle";
      searchBtn.setAttribute("aria-label", "Search");
      searchBtn.setAttribute("title", "Search (Ctrl+K)");
      searchBtn.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
      navActions.insertBefore(searchBtn, navActions.firstChild);

      // Theme toggle
      var btn = document.createElement("button");
      btn.className = "ct-theme-toggle";
      btn.setAttribute("aria-label", "Toggle theme");
      btn.setAttribute("title", "Toggle theme");
      btn.innerHTML = sunSVG + moonSVG;
      btn.addEventListener("click", toggleTheme);
      navActions.insertBefore(btn, searchBtn.nextSibling);
    }

    /* ---- Search Overlay ---- */
    var searchOverlay = document.createElement("div");
    searchOverlay.className = "ct-search-overlay";
    searchOverlay.id = "ct-search-overlay";
    searchOverlay.setAttribute("aria-hidden", "true");
    searchOverlay.innerHTML = '<div class="ct-search-overlay__backdrop"></div><div class="ct-search-overlay__modal"><div class="ct-search-overlay__header"><svg class="ct-search-overlay__icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input class="ct-search-overlay__input" id="ct-search-input" type="text" placeholder="Search pages, products, industries..." autocomplete="off"><kbd class="ct-search-overlay__kbd">ESC</kbd></div><div class="ct-search-overlay__results" id="ct-search-results"></div><div class="ct-search-overlay__footer"><span><kbd>&uarr;</kbd><kbd>&darr;</kbd> Navigate</span><span><kbd>Enter</kbd> Open</span><span><kbd>Esc</kbd> Close</span></div></div>';
    document.body.appendChild(searchOverlay);

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

    (function setupSearch() {
      var overlay = document.getElementById("ct-search-overlay");
      var input = document.getElementById("ct-search-input");
      var results = document.getElementById("ct-search-results");
      var toggleBtn = document.querySelector(".ct-search-toggle");
      if (!overlay || !input || !results) return;

      var activeIndex = -1;
      var debounceTimer = null;

      // Fix URLs for inner pages (add ../ prefix)
      var depth = (window.location.pathname.match(/\//g) || []).length - 1;
      var prefix = "";
      for (var d = 0; d < depth; d++) prefix += "../";
      searchIndex.forEach(function(item) { item._url = prefix + item.url; });

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

      document.addEventListener("keydown", function(e) {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
          e.preventDefault();
          if (overlay.classList.contains("open")) closeSearch(); else openSearch();
          return;
        }
        if (e.key === "Escape" && overlay.classList.contains("open")) { closeSearch(); return; }
      });

      function fuzzyMatch(query, text) {
        query = query.toLowerCase(); text = text.toLowerCase();
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
        var groups = {};
        matches.forEach(function(m) { if (!groups[m.cat]) groups[m.cat] = []; groups[m.cat].push(m); });
        var html = "";
        var catOrder = ["Solutions", "Products", "Services", "Industries", "Partners", "Company", "Resources"];
        catOrder.forEach(function(cat) {
          if (!groups[cat]) return;
          html += '<div class="ct-search-overlay__group"><div class="ct-search-overlay__group-label">' + cat + '</div>';
          groups[cat].forEach(function(item) {
            html += '<a class="ct-search-overlay__item" href="' + item._url + '"><div class="ct-search-overlay__item-title">' + item.title + '</div><div class="ct-search-overlay__item-desc">' + item.desc + '</div></a>';
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

      input.addEventListener("keydown", function(e) {
        var items = results.querySelectorAll(".ct-search-overlay__item");
        if (!items.length) return;
        if (e.key === "ArrowDown") { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, items.length - 1); updateActive(items); }
        else if (e.key === "ArrowUp") { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); updateActive(items); }
        else if (e.key === "Enter" && activeIndex >= 0 && items[activeIndex]) { e.preventDefault(); items[activeIndex].click(); }
      });

      function updateActive(items) {
        items.forEach(function(item, i) { item.classList.toggle("active", i === activeIndex); });
        if (items[activeIndex]) items[activeIndex].scrollIntoView({ block: "nearest" });
      }
    })();

    /* ---- Scroll progress bar ---- */
    var progressEl = document.createElement("div");
    progressEl.className = "ct-progress";
    progressEl.id = "ct-progress";
    document.body.prepend(progressEl);

    window.addEventListener("scroll", function () {
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      progressEl.style.width = pct + "%";
    }, { passive: true });

    /* ---- Back to top button with progress ring ---- */
    var backTop = document.createElement("button");
    backTop.className = "ct-back-top";
    backTop.id = "ct-back-top";
    backTop.setAttribute("aria-label", "Back to top");
    document.body.appendChild(backTop);

    // Add SVG progress ring
    var circumference = 2 * Math.PI * 18;
    var svgNS = "http://www.w3.org/2000/svg";
    var svgRing = document.createElementNS(svgNS, "svg");
    svgRing.setAttribute("class", "ct-back-top__ring");
    svgRing.setAttribute("viewBox", "0 0 48 48");
    svgRing.setAttribute("width", "48");
    svgRing.setAttribute("height", "48");
    var defs = document.createElementNS(svgNS, "defs");
    var grad = document.createElementNS(svgNS, "linearGradient");
    grad.setAttribute("id", "ring-gradient-inner");
    grad.setAttribute("x1", "0%"); grad.setAttribute("y1", "0%");
    grad.setAttribute("x2", "100%"); grad.setAttribute("y2", "100%");
    var s1 = document.createElementNS(svgNS, "stop");
    s1.setAttribute("offset", "0%"); s1.setAttribute("stop-color", "#C85A18");
    var s2 = document.createElementNS(svgNS, "stop");
    s2.setAttribute("offset", "100%"); s2.setAttribute("stop-color", "#1A5BF0");
    grad.appendChild(s1); grad.appendChild(s2);
    defs.appendChild(grad);
    svgRing.appendChild(defs);
    var bgC = document.createElementNS(svgNS, "circle");
    bgC.setAttribute("cx", "24"); bgC.setAttribute("cy", "24");
    bgC.setAttribute("r", "18"); bgC.setAttribute("fill", "none");
    bgC.setAttribute("stroke", "currentColor"); bgC.setAttribute("stroke-width", "3");
    bgC.setAttribute("opacity", "0.12");
    svgRing.appendChild(bgC);
    var pC = document.createElementNS(svgNS, "circle");
    pC.setAttribute("cx", "24"); pC.setAttribute("cy", "24");
    pC.setAttribute("r", "18"); pC.setAttribute("fill", "none");
    pC.setAttribute("stroke", "url(#ring-gradient-inner)");
    pC.setAttribute("stroke-width", "3");
    pC.setAttribute("stroke-linecap", "round");
    pC.setAttribute("stroke-dasharray", circumference);
    pC.setAttribute("stroke-dashoffset", circumference);
    pC.setAttribute("transform", "rotate(-90 24 24)");
    svgRing.appendChild(pC);
    backTop.appendChild(svgRing);
    var arrowSpan = document.createElement("span");
    arrowSpan.className = "ct-back-top__arrow";
    arrowSpan.innerHTML = arrowUpSVG;
    backTop.appendChild(arrowSpan);

    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) {
        backTop.classList.add("visible");
      } else {
        backTop.classList.remove("visible");
      }
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docH > 0 ? (window.scrollY / docH) : 0;
      var offset = circumference - (pct * circumference);
      pC.setAttribute("stroke-dashoffset", offset);
    }, { passive: true });

    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ---- Nav scroll effect ---- */
    var nav = document.querySelector(".ct-nav");
    if (nav) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      }, { passive: true });
    }

    /* ---- Scroll Animations ---- */
    var elements = document.querySelectorAll(".ct-animate, .ct-animate-scale, .ct-animate-left");
    if (elements.length && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("ct-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
      elements.forEach(function (el) { observer.observe(el); });
    }

    /* ---- Animated Counters ---- */
    var counters = document.querySelectorAll("[data-count]");
    if (counters.length && "IntersectionObserver" in window) {
      var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var target = parseInt(el.getAttribute("data-count"), 10);
            if (isNaN(target)) return;
            var current = 0;
            var step = Math.ceil(target / 94);
            var suffix = el.textContent.replace(/[0-9]/g, "");
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
            counterObserver.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { counterObserver.observe(el); });
    }

    /* ---- Mobile menu ---- */
    var mobileToggle = document.querySelector(".ct-mobile-toggle");
    var mobileMenu = document.querySelector(".ct-mobile-menu");
    var mobileClose = document.querySelector(".ct-mobile-menu__close");
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener("click", function () {
        mobileMenu.classList.add("ct-mobile-menu--open");
        document.body.style.overflow = "hidden";
      });
      function closeMenu() {
        mobileMenu.classList.remove("ct-mobile-menu--open");
        document.body.style.overflow = "";
      }
      if (mobileClose) mobileClose.addEventListener("click", closeMenu);
      mobileMenu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", closeMenu);
      });
    }

    /* ---- 3D Card Tilt Effect ---- */
    document.querySelectorAll(".ct-card, .ct-trust-item, .ct-mini-card").forEach(function(card) {
      card.addEventListener("mousemove", function(e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var rx = ((y - cy) / cy) * -3;
        var ry = ((x - cx) / cx) * 3;
        card.style.transform = "perspective(800px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function() {
        card.style.transform = "";
      });
    });

    /* ---- Text Reveal Animation ---- */
    document.querySelectorAll(".ct-page-hero h1").forEach(function(h) {
      var text = h.innerHTML;
      var ci = 0;
      var wrapped = text.replace(/>([^<]+)</g, function(match, content) {
        var chars = content.split("").map(function(ch) {
          if (ch === " ") return " ";
          ci++;
          return '<span class="ct-reveal__char" style="animation-delay:' + (ci * 0.03) + 's">' + ch + '</span>';
        }).join("");
        return ">" + chars + "<";
      });
      h.innerHTML = wrapped;
    });

    /* ---- Page Transitions ---- */
    var transition = document.createElement("div");
    transition.className = "ct-page-transition";
    transition.innerHTML = '<span class="ct-page-transition__logo">CT</span>';
    document.body.appendChild(transition);

    document.querySelectorAll("a[href]").forEach(function(link) {
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) === "#" || href.indexOf("tel:") === 0 || href.indexOf("mailto:") === 0 || href.indexOf("http") === 0 || href.indexOf("wa.me") !== -1) return;
      link.addEventListener("click", function(e) {
        e.preventDefault();
        transition.classList.add("active");
        setTimeout(function() { window.location.href = href; }, 300);
      });
    });

    /* ---- WhatsApp Float (Enhancement 2) ---- */
    var waFloat = document.createElement("a");
    waFloat.className = "ct-whatsapp-float";
    waFloat.href = "https://wa.me/919270307505";
    waFloat.target = "_blank";
    waFloat.rel = "noopener";
    waFloat.setAttribute("aria-label", "Chat on WhatsApp");
    waFloat.innerHTML = '<span class="ct-whatsapp-float__tooltip">Chat with us</span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
    document.body.appendChild(waFloat);

    /* ---- Mega Menu for inner pages (Enhancement 6) ---- */
    (function setupInnerMegaMenu() {
      var navEl = document.querySelector(".ct-nav");
      if (!navEl) return;
      var productsLink = navEl.querySelector('.ct-nav__links a[href*="products"]');
      if (!productsLink) return;

      var megaMenuProducts = [
        { title: "Virtek Iris", desc: "3D laser projection system", img: "../wp-content/uploads/2024/11/Screenshot-2024-11-22-153628-Photoroom.webp", href: "../virtek-iris/index.html" },
        { title: "Eagle Cutting", desc: "Automated cutting solution", img: "../wp-content/uploads/2024/11/monotower_eagle-scaled.webp", href: "../eagle/index.html" },
        { title: "Laser Cutting", desc: "Precision CO2/fiber laser", img: "../wp-content/uploads/2025/01/Laser-Cutting-Machine.webp", href: "../laser-cutting-machine/index.html" },
        { title: "Fabric Roll Loader", desc: "Automated fabric handling", img: "../wp-content/uploads/2024/11/ezgif.com-gif-maker-10-4.webp", href: "../fabric-roll-loader/index.html" },
        { title: "CSM Tube Bender", desc: "CNC bending & forming", img: "../wp-content/uploads/2025/01/CSM-Machinery.webp", href: "../csm-machinery/index.html" },
        { title: "Virtek Laser QC", desc: "Inspection & reverse eng.", img: "../wp-content/uploads/2025/01/Virtek-Laser-QC.webp", href: "../virtek-laser-qc/index.html" }
      ];

      var grid = megaMenuProducts.map(function(item) {
        return '<a class="ct-mega-menu__card" href="' + item.href + '">' +
          '<img class="ct-mega-menu__card-img" src="' + item.img + '" alt="' + item.title + '" loading="lazy">' +
          '<div><h4>' + item.title + '</h4><p>' + item.desc + '</p></div></a>';
      }).join("");

      var megaDiv = document.createElement("div");
      megaDiv.className = "ct-mega-menu";
      megaDiv.setAttribute("data-mega", "products");
      megaDiv.innerHTML = '<div class="ct-mega-menu__inner"><div class="ct-mega-menu__grid">' + grid + '</div></div>';
      navEl.appendChild(megaDiv);

      var pTimeout;
      productsLink.addEventListener("mouseenter", function() {
        clearTimeout(pTimeout);
        navEl.querySelectorAll(".ct-mega-menu--visible").forEach(function(m) { m.classList.remove("ct-mega-menu--visible"); });
        megaDiv.classList.add("ct-mega-menu--visible");
      });
      navEl.addEventListener("mouseleave", function() {
        pTimeout = setTimeout(function() { megaDiv.classList.remove("ct-mega-menu--visible"); }, 200);
      });
      megaDiv.addEventListener("mouseenter", function() { clearTimeout(pTimeout); });
      megaDiv.addEventListener("mouseleave", function() {
        pTimeout = setTimeout(function() { megaDiv.classList.remove("ct-mega-menu--visible"); }, 200);
      });
    })();

    /* ---- AVIF Image Support (Enhancement 10) ---- */
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

    /* ---- Image Lightbox ---- */
    var lb = document.createElement("div");
    lb.className = "ct-lightbox";
    lb.innerHTML = '<button class="ct-lightbox__close" aria-label="Close">&times;</button><button class="ct-lightbox__nav ct-lightbox__nav--prev" aria-label="Previous">&#8249;</button><button class="ct-lightbox__nav ct-lightbox__nav--next" aria-label="Next">&#8250;</button><img class="ct-lightbox__img" id="ct-lightbox-img" src="" alt=""><div class="ct-lightbox__caption" id="ct-lightbox-caption"></div>';
    document.body.appendChild(lb);

    var galleryImgs = [];
    var curIdx = 0;

    function openLB(src, alt, imgs) {
      galleryImgs = imgs || [src];
      curIdx = galleryImgs.indexOf(src);
      if (curIdx < 0) curIdx = 0;
      document.getElementById("ct-lightbox-img").src = src;
      document.getElementById("ct-lightbox-caption").textContent = alt || "";
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeLB() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    }
    lb.querySelector(".ct-lightbox__close").addEventListener("click", closeLB);
    lb.addEventListener("click", function(e) { if (e.target === lb) closeLB(); });
    lb.querySelector(".ct-lightbox__nav--prev").addEventListener("click", function() {
      curIdx = (curIdx - 1 + galleryImgs.length) % galleryImgs.length;
      document.getElementById("ct-lightbox-img").src = galleryImgs[curIdx];
    });
    lb.querySelector(".ct-lightbox__nav--next").addEventListener("click", function() {
      curIdx = (curIdx + 1) % galleryImgs.length;
      document.getElementById("ct-lightbox-img").src = galleryImgs[curIdx];
    });
    document.addEventListener("keydown", function(e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowLeft") lb.querySelector(".ct-lightbox__nav--prev").click();
      if (e.key === "ArrowRight") lb.querySelector(".ct-lightbox__nav--next").click();
    });

    document.querySelectorAll(".ct-card img, .ct-gallery__item img").forEach(function(img) {
      img.style.cursor = "pointer";
      img.addEventListener("click", function() {
        var all = Array.from(document.querySelectorAll(".ct-card img, .ct-gallery__item img")).map(function(i) { return i.src; });
        openLB(img.src, img.alt, all);
      });
    });

    /* ---- Lazy Loading Enhancement ---- */
    document.querySelectorAll("img[loading='lazy']").forEach(function(img) {
      img.style.opacity = "0";
      img.style.transition = "opacity 0.5s ease";
      img.addEventListener("load", function() { img.style.opacity = "1"; });
      if (img.complete) img.style.opacity = "1";
    });

    /* ---- Form Handler — Real backend + localStorage backup ---- */
    var FORM_WEBHOOK = "https://docs.google.com/forms/d/e/FORM_ID/formResponse";

    function showFormState(form, state, retryFn) {
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

      var formData = {};
      form.querySelectorAll("input, textarea, select").forEach(function(field) {
        if (field.name) formData[field.name] = field.value;
      });
      formData._timestamp = new Date().toISOString();
      formData._page = window.location.href;

      try {
        var stored = JSON.parse(localStorage.getItem("cuttech-form-submissions") || "[]");
        stored.push(formData);
        localStorage.setItem("cuttech-form-submissions", JSON.stringify(stored));
      } catch (e) {}

      if (window.dataLayer) {
        window.dataLayer.push({
          event: "form_submission",
          form_name: form.id || "ct-form",
          page_url: window.location.href
        });
      }

      showFormState(form, "submitting");

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

    /* ---- Product Comparison Tool ---- */
    var compareProducts = {
      "virtek-iris": {
        name: "Virtek Iris",
        type: "Laser Projection",
        accuracy: "\u00B10.25mm",
        operatingTemp: "10\u201350\u00B0C",
        keyFeature1: "3D Projection",
        keyFeature2: "80m\u00B2 coverage",
        category: "Projection"
      },
      "eagle": {
        name: "Eagle",
        type: "Automated Cutting",
        accuracy: "\u00B10.5mm",
        operatingTemp: "5\u201340\u00B0C",
        keyFeature1: "Vacuum hold-down",
        keyFeature2: "1600mm \u00D7 3200mm table",
        category: "Cutting"
      },
      "laser-cutting": {
        name: "Laser Cutting Machine",
        type: "CO2/Fiber Laser",
        accuracy: "\u00B10.1mm",
        operatingTemp: "5\u201335\u00B0C",
        keyFeature1: "4000W max power",
        keyFeature2: "3000mm \u00D7 1500mm table",
        category: "Cutting"
      },
      "fabric-roll-loader": {
        name: "Fabric Roll Loader",
        type: "Auto-loading",
        accuracy: "N/A",
        operatingTemp: "5\u201345\u00B0C",
        keyFeature1: "500kg capacity",
        keyFeature2: "1800mm max width",
        category: "Material Handling"
      },
      "csm-tube-bender": {
        name: "CSM Tube Bender",
        type: "CNC Bending",
        accuracy: "\u00B10.1mm",
        operatingTemp: "5\u201340\u00B0C",
        keyFeature1: "130mm max OD",
        keyFeature2: "Multi-radius, hydraulic",
        category: "Bending"
      },
      "virtek-laser-qc": {
        name: "Virtek Laser QC",
        type: "Inspection System",
        accuracy: "\u00B10.05mm",
        operatingTemp: "10\u201340\u00B0C",
        keyFeature1: "6DOF measurement",
        keyFeature2: "Reverse engineering + SPC",
        category: "Inspection"
      }
    };

    var selectedProducts = [];

    function updateCompareUI() {
      var fab = document.getElementById("ct-compare-fab");
      var count = document.getElementById("ct-compare-fab-count");
      var tableWrap = document.getElementById("ct-compare-table-wrap");

      if (!fab) return;

      count.textContent = selectedProducts.length;

      if (selectedProducts.length >= 2) {
        fab.classList.add("ct-compare__fab--visible");
      } else {
        fab.classList.remove("ct-compare__fab--visible");
      }

      if (selectedProducts.length >= 2) {
        buildCompareTable();
        tableWrap.classList.add("ct-compare__table-wrap--visible");
      } else {
        tableWrap.classList.remove("ct-compare__table-wrap--visible");
      }
    }

    function buildCompareTable() {
      var thead = document.getElementById("ct-compare-thead");
      var tbody = document.getElementById("ct-compare-tbody");
      if (!thead || !tbody) return;

      var headerHTML = "<tr><th>Specification</th>";
      selectedProducts.forEach(function(key) {
        headerHTML += "<th>" + compareProducts[key].name + "</th>";
      });
      headerHTML += "</tr>";
      thead.innerHTML = headerHTML;

      var specs = ["type", "accuracy", "operatingTemp", "keyFeature1", "keyFeature2", "category"];
      var labels = ["Type", "Accuracy", "Operating Temp", "Key Feature 1", "Key Feature 2", "Category"];

      var bodyHTML = "";
      specs.forEach(function(spec, idx) {
        bodyHTML += "<tr><td>" + labels[idx] + "</td>";
        selectedProducts.forEach(function(key) {
          var val = compareProducts[key][spec];
          var isBest = spec === "accuracy" && val === "\u00B10.05mm";
          bodyHTML += '<td class="ct-compare__cell' + (isBest ? " ct-compare__cell--highlight" : "") + '">' + val + "</td>";
        });
        bodyHTML += "</tr>";
      });
      tbody.innerHTML = bodyHTML;
    }

    document.querySelectorAll(".ct-compare__product").forEach(function(card) {
      card.addEventListener("click", function() {
        var key = card.getAttribute("data-product");
        var idx = selectedProducts.indexOf(key);

        if (idx >= 0) {
          selectedProducts.splice(idx, 1);
          card.classList.remove("ct-compare__product--selected");
        } else {
          if (selectedProducts.length >= 3) {
            var removed = selectedProducts.shift();
            var removedCard = document.querySelector('.ct-compare__product[data-product="' + removed + '"]');
            if (removedCard) removedCard.classList.remove("ct-compare__product--selected");
          }
          selectedProducts.push(key);
          card.classList.add("ct-compare__product--selected");
        }
        updateCompareUI();
      });
    });

    var compareFab = document.getElementById("ct-compare-fab");
    if (compareFab) {
      compareFab.addEventListener("click", function() {
        var tableWrap = document.getElementById("ct-compare-table-wrap");
        if (tableWrap) {
          tableWrap.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    }

    /* ---- Video Gallery Modal ---- */
    var videoPlayer = document.createElement("div");
    videoPlayer.className = "ct-video-player";
    videoPlayer.id = "ct-video-player";
    videoPlayer.innerHTML = '<div class="ct-video-player__inner"><div class="ct-video-player__bar"><span class="ct-video-player__title" id="ct-video-player-title"></span><button class="ct-video-player__close" aria-label="Close">&times;</button></div><div class="ct-video-player__content"><svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg><p>Video playback will be available here.</p></div></div>';
    document.body.appendChild(videoPlayer);

    document.querySelectorAll(".ct-video-card").forEach(function(card) {
      card.addEventListener("click", function() {
        var title = card.querySelector("h3");
        if (title) {
          document.getElementById("ct-video-player-title").textContent = title.textContent;
        }
        videoPlayer.classList.add("ct-video-player--open");
        document.body.style.overflow = "hidden";
      });
    });

    videoPlayer.querySelector(".ct-video-player__close").addEventListener("click", function() {
      videoPlayer.classList.remove("ct-video-player--open");
      document.body.style.overflow = "";
    });

    videoPlayer.addEventListener("click", function(e) {
      if (e.target === videoPlayer) {
        videoPlayer.classList.remove("ct-video-player--open");
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && videoPlayer.classList.contains("ct-video-player--open")) {
        videoPlayer.classList.remove("ct-video-player--open");
        document.body.style.overflow = "";
      }
    });

    /* ---- Blog Category Filter ---- */
    document.querySelectorAll(".ct-blog-filter__btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var category = btn.getAttribute("data-category");

        document.querySelectorAll(".ct-blog-filter__btn").forEach(function(b) {
          b.classList.remove("ct-blog-filter__btn--active");
        });
        btn.classList.add("ct-blog-filter__btn--active");

        document.querySelectorAll(".ct-blog-card").forEach(function(card) {
          var cardCategory = card.getAttribute("data-category");
          if (category === "all" || cardCategory === category) {
            card.classList.remove("ct-blog-card--hidden");
          } else {
            card.classList.add("ct-blog-card--hidden");
          }
        });
      });
    });

    /* ---- Inject breadcrumb if not present ---- */
    var pageHero = document.querySelector(".ct-page-hero__inner");
    if (pageHero && !document.querySelector(".ct-breadcrumb")) {
      var bc = document.createElement("div");
      bc.className = "ct-breadcrumb";
      var pathParts = window.location.pathname.replace(/\/index\.html$/, "").split("/").filter(Boolean);
      var bcHTML = '<a href="' + (pathParts.length > 1 ? "../" : "./") + 'index.html">Home</a>';
      var accumulated = "";
      for (var i = 0; i < pathParts.length; i++) {
        bcHTML += ' <span class="ct-breadcrumb__sep">/</span> ';
        accumulated += pathParts[i] + "/";
        if (i === pathParts.length - 1) {
          var name = pathParts[i].replace(/-/g, " ").replace(/\b\w/g, function(c) { return c.toUpperCase(); });
          bcHTML += '<span>' + name + '</span>';
        } else {
          bcHTML += '<a href="' + accumulated + 'index.html">' + pathParts[i].replace(/-/g, " ") + '</a>';
        }
      }
      bc.innerHTML = bcHTML;
      pageHero.insertBefore(bc, pageHero.firstChild);
    }

    /* ---- Dynamic Copyright Year ---- */
    document.querySelectorAll('.ct-footer__bottom span, .ct-footer__copy').forEach(function(el) {
      el.innerHTML = el.innerHTML.replace(/©\s*\d{4}/, '© ' + new Date().getFullYear());
    });

  });
})();
