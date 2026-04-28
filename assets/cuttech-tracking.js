(function () {
  window.dataLayer = window.dataLayer || [];

  function pushEvent(name, params) {
    window.dataLayer.push(Object.assign({
      event: name,
      page_path: window.location.pathname,
      page_title: document.title
    }, params || {}));
  }

  window.cuttechTrack = pushEvent;

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a");
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var label = (link.textContent || "").trim();

    if (href.indexOf("tel:") === 0) {
      pushEvent("phone_click", { link_url: href, link_text: label });
    }

    if (href.indexOf("wa.me") !== -1 || href.indexOf("whatsapp") !== -1) {
      pushEvent("whatsapp_click", { link_url: href, link_text: label });
    }

    if (/quote|quotation|enquiry/i.test(label + " " + href)) {
      pushEvent("quote_request", { link_url: href, link_text: label });
    }

    if (/demo|meeting|consultation/i.test(label + " " + href)) {
      pushEvent("demo_request", { link_url: href, link_text: label });
    }

    if (/download|resource|guide|calculator|brochure/i.test(label + " " + href)) {
      pushEvent("lead_magnet_download", { link_url: href, link_text: label });
    }
  });

  var scrollMarks = { 50: false, 75: false, 90: false };

  function trackScrollDepth() {
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;

    var percent = Math.round((window.scrollY / scrollable) * 100);
    Object.keys(scrollMarks).forEach(function (mark) {
      if (!scrollMarks[mark] && percent >= Number(mark)) {
        scrollMarks[mark] = true;
        pushEvent("page_scroll", { scroll_depth: Number(mark) });
      }
    });
  }

  window.addEventListener("scroll", trackScrollDepth, { passive: true });
})();
