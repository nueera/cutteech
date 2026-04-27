/**
 * Cuttech "FORGE" Inner Pages
 * Theme Toggle + Scroll Animations + Nav Effects + Back to Top
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

  initTheme();

  /* ---- SVG Icons ---- */
  var sunSVG = '<svg class="icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var moonSVG = '<svg class="icon-moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var arrowUpSVG = '<svg viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>';

  document.addEventListener("DOMContentLoaded", function () {
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
  });
})();
