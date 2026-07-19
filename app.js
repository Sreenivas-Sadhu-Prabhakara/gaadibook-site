/* GaadiBook explainer — tiny progressive enhancements.
   No dependencies. Everything degrades gracefully without JS. */
(function () {
  "use strict";

  /* 1. Sticky-nav shadow once you scroll past the top */
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* 2. Smooth scroll for in-page anchors (respects reduced-motion) */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });

  /* 3. Interactive touch: the hero "next expiry" ticket counts down
        a few days when it scrolls into view — a small nod to the
        real product's staged reminders. Purely cosmetic. */
  var el = document.getElementById("countdown");
  if (el && "IntersectionObserver" in window && !reduce) {
    var started = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || started) return;
        started = true;
        var n = 9;                 // start value
        el.textContent = n;
        var tick = setInterval(function () {
          n -= 1;
          if (n <= 6) {            // settle on the real headline value
            n = 6;
            clearInterval(tick);
          }
          el.textContent = n;
        }, 260);
      });
    }, { threshold: 0.6 });
    io.observe(el);
  }
})();
