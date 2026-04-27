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

    /* ---- Inject theme toggle into nav ---- */
    var navActions = document.querySelector(".ct-nav__actions");
    if (navActions) {
      var btn = document.createElement("button");
      btn.className = "ct-theme-toggle";
      btn.setAttribute("aria-label", "Toggle theme");
      btn.setAttribute("title", "Toggle theme");
      btn.innerHTML = sunSVG + moonSVG;
      btn.addEventListener("click", toggleTheme);
      navActions.insertBefore(btn, navActions.firstChild);
    }

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

    /* ---- Back to top button ---- */
    var backTop = document.createElement("button");
    backTop.className = "ct-back-top";
    backTop.id = "ct-back-top";
    backTop.setAttribute("aria-label", "Back to top");
    backTop.innerHTML = arrowUpSVG;
    document.body.appendChild(backTop);

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

    /* ---- Form Validation ---- */
    document.querySelectorAll(".ct-form").forEach(function(form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
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
        if (valid) {
          var el = form.querySelector(".ct-form__success") || (function() {
            var d = document.createElement("div");
            d.className = "ct-form__success";
            d.textContent = "Thank you! Your enquiry has been submitted. We'll respond within 24 hours.";
            form.appendChild(d);
            return d;
          })();
          el.classList.add("visible");
          form.querySelectorAll("input, textarea, select").forEach(function(f) { f.value = ""; });
          setTimeout(function() { el.classList.remove("visible"); }, 5000);
        }
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

  });
})();
