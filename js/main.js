/* Bee's Water UK — site script
   1. Mobile navigation toggle
   2. Cookie consent (UK GDPR / PECR): nothing non-essential loads until the visitor opts in
   3. Footer year
   4. Contact form placeholder */

(function () {
  "use strict";

  /* 1. Navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* 2. Cookie consent
     The choice itself is kept in localStorage, which is strictly necessary to remember it.
     Analytics only loads after "Accept". */
  var CONSENT_KEY = "bw-cookie-consent";
  var banner = document.getElementById("cookie-banner");

  function readConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function saveConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* storage blocked: ask again next visit */ }
  }
  function loadAnalytics() {
    // TODO: add your analytics snippet here (e.g. a privacy-friendly tool or GA4),
    // and list its cookies in the table on cookies.html. Do not load it anywhere else.
  }
  function showBanner() { if (banner) banner.hidden = false; }
  function hideBanner() { if (banner) banner.hidden = true; }

  function applyConsent(value) {
    saveConsent(value);
    hideBanner();
    if (value === "accepted") loadAnalytics();
    var status = document.getElementById("cookie-status");
    if (status) status.textContent = value === "accepted" ? "Analytics cookies: allowed" : "Analytics cookies: not allowed";
  }

  if (banner) {
    var current = readConsent();
    if (current === "accepted") loadAnalytics();
    else if (current !== "rejected") showBanner();

    banner.querySelector("[data-consent='accept']").addEventListener("click", function () { applyConsent("accepted"); });
    banner.querySelector("[data-consent='reject']").addEventListener("click", function () { applyConsent("rejected"); });
  }

  // Any "Cookie settings" button re-opens the banner so visitors can change their mind.
  document.querySelectorAll("[data-cookie-settings]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      showBanner();
      var first = banner && banner.querySelector("button");
      if (first) first.focus();
    });
  });

  var statusEl = document.getElementById("cookie-status");
  if (statusEl) {
    var c = readConsent();
    statusEl.textContent = c === "accepted" ? "Analytics cookies: allowed"
      : c === "rejected" ? "Analytics cookies: not allowed" : "You have not made a choice yet.";
  }

  /* 3. Year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* 4. Contact form
     TODO: connect the form to a form service or your email (e.g. Formspree, Netlify Forms)
     by setting its action attribute. Until then it shows a friendly message instead of sending. */
  var form = document.getElementById("contact-form");
  if (form && !form.getAttribute("action")) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var out = document.getElementById("form-status");
      if (out) out.textContent = "Thank you. Our contact form is not live yet, so please email us at the address on this page.";
    });
  }
})();
