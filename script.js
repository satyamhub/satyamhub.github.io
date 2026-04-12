// Portfolio Enhancement Script
// Smooth scroll animations and interactive effects

document.addEventListener("DOMContentLoaded", () => {
  initSkillBars();
  initScrollAnimations();
  initSmoothScroll();
  initInteractiveElements();
  initAppleStyleScrolling();
});

/**
 * Initialize skill bars with animation
 */
function initSkillBars() {
  const observerOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillElement = entry.target.closest(".skill");
        if (skillElement) {
          const skillTitle =
            skillElement.querySelector(".skill-title")?.textContent || "";

          // Create progress bar
          let progBar = skillElement.querySelector(".skill-proficiency");
          if (!progBar) {
            progBar = document.createElement("div");
            progBar.className = "skill-proficiency";
            const bar = document.createElement("div");
            bar.className = "skill-bar";

            // Vary the proficiency level by skill
            let width = 90;
            if (skillTitle.includes("Database")) width = 80;
            else if (skillTitle.includes("Core")) width = 85;
            else if (skillTitle.includes("Tools")) width = 85;

            bar.style.width = width + "%";
            progBar.appendChild(bar);
            skillElement.appendChild(progBar);
          }
          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll(".skill").forEach((skill) => {
    observer.observe(skill);
  });
}

/**
 * Initialize scroll-triggered animations
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Animate sections on scroll
  document.querySelectorAll(".section").forEach((section, index) => {
    section.style.setProperty("--animation-delay", `${index * 0.1}s`);
    observer.observe(section);
  });

  // Animate cards with stagger effect
  document
    .querySelectorAll(".about-card, .skill, .leetcode-item, .contact-card")
    .forEach((card, index) => {
      if (index < 5) {
        card.classList.add(`stagger-${index + 1}`);
      }
      observer.observe(card);
    });

  // Animate project cards
  document.querySelectorAll(".project-card").forEach((card, index) => {
    card.style.setProperty("--delay", `${index * 0.15}s`);
    observer.observe(card);
  });

  // Animate hero elements
  const heroElements = document.querySelectorAll(".hero-grid > div");
  heroElements.forEach((el, index) => {
    el.style.animation = `slideUp 0.6s var(--timing) ${index * 0.2}s forwards`;
    el.style.opacity = "0";
  });
}

/**
 * Enhance smooth scroll behavior
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href !== "#top") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

/**
 * Add interactive enhancements
 */
function initInteractiveElements() {
  // Enhance buttons with ripple effect
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.zIndex = "1";
    });
  });

  // Add focus styles for accessibility
  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("focus", function () {
      this.style.outline = "none";
      this.style.boxShadow = `0 0 0 2px var(--bg), 0 0 0 4px var(--accent)`;
    });

    el.addEventListener("blur", function () {
      this.style.boxShadow = "none";
    });
  });

  // Add hover state management for cards
  initCardHoverEffects();

  // Initialize parallax for hero section
  initHeroParallax();
}

/**
 * Enhanced card hover effects
 */
function initCardHoverEffects() {
  const cards = document.querySelectorAll(
    ".about-card, .skill, .project-card, .contact-card, .resume-card",
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.backdropFilter = "blur(12px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.backdropFilter = "blur(10px)";
    });
  });
}

/**
 * Subtle parallax effect for hero section
 */
function initHeroParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const accent = hero.querySelector(".accent");
  if (!accent) return;

  window.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 900) {
      const x = (e.clientX / window.innerWidth) * 10;
      const y = (e.clientY / window.innerHeight) * 10;
      accent.style.transform = `translate(${x}px, ${y}px)`;
    }
  });
}

/**
 * Throttle function for performance
 */
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Scroll event optimization
let scrolling = false;
window.addEventListener(
  "scroll",
  throttle(() => {
    scrolling = true;
    setTimeout(() => (scrolling = false), 100);
  }, 100),
);

// Performance: Lazy load images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Add page visibility optimization
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Reduce animations when tab is hidden
    document.body.style.animation = "none";
  } else {
    // Resume animations when tab is visible
    document.body.style.animation = "";
  }
});

/**
 * Apple-style scrolling effects
 */
function initAppleStyleScrolling() {
  // Section scroll reveal and transitions
  const sections = document.querySelectorAll(".section");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "-50px",
    },
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Scroll reveal for elements
  const revealElements = document.querySelectorAll(
    ".about-card, .skill, .project-card, .contact-card, .leetcode-item, .resume-card",
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-reveal", "revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  revealElements.forEach((el) => {
    el.classList.add("scroll-reveal");
    revealObserver.observe(el);
  });

  // Parallax effect on scroll
  const parallaxElements = document.querySelectorAll(".hero-card");

  window.addEventListener(
    "scroll",
    throttle(() => {
      const scrollY = window.scrollY;

      parallaxElements.forEach((el, index) => {
        const elementTop = el.getBoundingClientRect().top + scrollY;
        const distance = scrollY - elementTop;

        // Only apply parallax if element is in view
        if (Math.abs(distance) < window.innerHeight) {
          el.style.transform = `translateY(${distance * 0.3}px)`;
        }
      });

      // Update section backgrounds based on scroll
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const progress = Math.max(
          0,
          Math.min(1, (window.innerHeight - sectionTop) / window.innerHeight),
        );

        // Subtle opacity change for depth effect
        section.style.opacity = 0.95 + progress * 0.05;
      });
    }, 20),
  );

  // Add scroll-triggered animations to hero
  const heroElements = document.querySelectorAll(".hero-grid > div");
  heroElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.animation = `slideUp 0.8s var(--timing) ${index * 0.25}s forwards`;
  });

  // Animate sections on view
  document.querySelectorAll(".section-title h2").forEach((heading, index) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.letterSpacing = "1px";
            entry.target.style.opacity = "1";
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(heading);
  });

  // Add scroll progress indicator (optional subtle effect)
  const updateScrollProgress = throttle(() => {
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    document.documentElement.style.setProperty(
      "--scroll-progress",
      scrolled + "%",
    );
  }, 50);

  window.addEventListener("scroll", updateScrollProgress);
}
