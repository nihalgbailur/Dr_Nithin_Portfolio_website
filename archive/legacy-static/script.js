const localePaths = {
  en: "locales/en.json",
  kn: "locales/kn.json",
};

const state = {
  lang: "en",
  translations: {},
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const applyTranslations = (dict) => {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (dict[key]) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) {
      el.setAttribute("alt", dict[key]);
    }
  });

  if (dict.meta_title) {
    document.title = dict.meta_title;
  }

  if (dict.meta_description) {
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", dict.meta_description);
    }
  }
};

const loadLocale = async (lang) => {
  if (state.translations[lang]) {
    return state.translations[lang];
  }

  const response = await fetch(localePaths[lang]);
  if (!response.ok) {
    throw new Error(`Failed to load locale ${lang}`);
  }

  const data = await response.json();
  state.translations[lang] = data;
  return data;
};

const updateLangButtons = (lang) => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
};

const setLanguage = async (lang) => {
  const dict = await loadLocale(lang);
  state.lang = lang;
  localStorage.setItem("preferredLang", lang);
  document.documentElement.lang = lang === "kn" ? "kn" : "en";
  applyTranslations(dict);
  updateLangButtons(lang);
};

const initLanguage = async () => {
  const saved = localStorage.getItem("preferredLang");
  const browserPref = (navigator.language || "").toLowerCase().includes("kn") ? "kn" : "en";
  const initial = saved || browserPref;
  await setLanguage(initial);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
};

const initHeader = () => {
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
};

const initMobileMenu = () => {
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (!toggle || !mobileMenu) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
};

const initReveal = () => {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const initParallax = () => {
  if (prefersReducedMotion.matches) return;
  const items = document.querySelectorAll("[data-parallax]");
  if (!items.length) return;

  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;
    items.forEach((item) => {
      const speed = parseFloat(item.dataset.parallax);
      if (!Number.isNaN(speed)) {
        item.style.transform = `translateY(${scrollY * speed}px)`;
      }
    });
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
};

const initForm = () => {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const success = form.querySelector(".form-success");
  const progressSteps = form.querySelectorAll(".progress-step");
  const progressLines = form.querySelectorAll(".progress-line");

  // Validation messages
  const validationMessages = {
    "full-name": {
      invalid: "Please enter at least 2 characters",
      valid: "✓ Looks good!"
    },
    phone: {
      invalid: "Please enter a 10-digit phone number",
      valid: "✓ Valid phone number"
    },
    email: {
      invalid: "Please enter a valid email address",
      valid: "✓ Email looks correct"
    },
    concern: {
      invalid: "Please select a concern",
      valid: "✓ Got it!"
    },
    message: {
      invalid: "",
      valid: ""
    }
  };

  // Update progress based on filled steps
  const updateProgress = () => {
    const step1Fields = form.querySelectorAll('[data-step="1"] input, [data-step="1"] select');
    const step2Fields = form.querySelectorAll('[data-step="2"] select');
    const step3Fields = form.querySelectorAll('[data-step="3"] textarea');

    let step1Complete = true;
    step1Fields.forEach((field) => {
      if (field.required && !field.value) step1Complete = false;
    });

    let step2Complete = true;
    step2Fields.forEach((field) => {
      if (field.required && !field.value) step2Complete = false;
    });

    let step3Touched = false;
    step3Fields.forEach((field) => {
      if (field.value) step3Touched = true;
    });

    // Update step indicators
    if (step1Complete) {
      progressSteps[0]?.classList.add("completed");
      progressLines[0]?.classList.add("active");
      progressSteps[1]?.classList.add("active");
    } else {
      progressSteps[0]?.classList.remove("completed");
      progressLines[0]?.classList.remove("active");
    }

    if (step2Complete) {
      progressSteps[1]?.classList.add("completed");
      progressLines[1]?.classList.add("active");
      progressSteps[2]?.classList.add("active");
    } else {
      progressSteps[1]?.classList.remove("completed");
      progressLines[1]?.classList.remove("active");
    }

    if (step3Touched) {
      progressSteps[2]?.classList.add("completed");
    } else {
      progressSteps[2]?.classList.remove("completed");
    }
  };

  // Real-time field validation
  const validateField = (field) => {
    const fieldParent = field.closest(".form-field");
    const validation = fieldParent?.querySelector(".field-validation");
    const fieldName = field.name || field.id;
    const messages = validationMessages[fieldName] || {};

    if (!validation) return;

    // Skip validation if empty and not required
    if (!field.value && !field.required) {
      validation.textContent = "";
      validation.className = "field-validation";
      fieldParent.classList.remove("valid", "invalid");
      return;
    }

    // Check validity
    const isValid = field.checkValidity();

    if (!field.value && field.required) {
      validation.textContent = "";
      validation.className = "field-validation";
      fieldParent.classList.remove("valid", "invalid");
    } else if (isValid) {
      validation.textContent = messages.valid || "";
      validation.className = "field-validation success";
      fieldParent.classList.remove("invalid");
      fieldParent.classList.add("valid");
    } else {
      validation.textContent = messages.invalid || "Please check this field";
      validation.className = "field-validation error";
      fieldParent.classList.remove("valid");
      fieldParent.classList.add("invalid");
    }
  };

  // Add event listeners to all form fields
  const allFields = form.querySelectorAll("input, select, textarea");
  allFields.forEach((field) => {
    field.addEventListener("input", () => {
      validateField(field);
      updateProgress();
      if (success) success.classList.remove("is-visible");
    });

    field.addEventListener("blur", () => {
      validateField(field);
    });

    field.addEventListener("change", () => {
      validateField(field);
      updateProgress();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate all fields on submit
    let hasErrors = false;
    allFields.forEach((field) => {
      validateField(field);
      if (!field.checkValidity()) hasErrors = true;
    });

    if (hasErrors) {
      form.reportValidity();
      return;
    }

    if (success) {
      success.classList.add("is-visible");
    }

    // Reset form and progress
    form.reset();
    progressSteps.forEach((step, i) => {
      step.classList.remove("completed");
      if (i === 0) step.classList.add("active");
      else step.classList.remove("active");
    });
    progressLines.forEach((line) => line.classList.remove("active"));

    // Clear validations
    form.querySelectorAll(".field-validation").forEach((el) => {
      el.textContent = "";
      el.className = "field-validation";
    });
    form.querySelectorAll(".form-field").forEach((el) => {
      el.classList.remove("valid", "invalid");
    });
  });
};

const initWhatsApp = () => {
  const button = document.querySelector(".whatsapp-button");
  const panel = document.querySelector(".whatsapp-panel");
  const close = document.querySelector(".whatsapp-close");
  if (!button || !panel || !close) return;

  const togglePanel = (open) => {
    panel.hidden = !open;
    button.setAttribute("aria-expanded", open ? "true" : "false");
  };

  button.addEventListener("click", () => {
    togglePanel(panel.hidden);
  });

  close.addEventListener("click", () => togglePanel(false));

  document.addEventListener("click", (event) => {
    if (!panel.hidden && !panel.contains(event.target) && !button.contains(event.target)) {
      togglePanel(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      togglePanel(false);
    }
  });

  const phone = "919876543210";
  document.querySelectorAll(".whatsapp-option").forEach((option) => {
    option.addEventListener("click", () => {
      const key = option.dataset.whatsapp;
      const message = state.translations[state.lang]?.[key] || "";
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener");
      togglePanel(false);
    });
  });
};

const initStatCounters = () => {
  const statValues = document.querySelectorAll(".stat-value");
  if (!statValues.length || prefersReducedMotion.matches) return;

  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const animateValue = (el, start, end, duration, suffix = "") => {
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = Math.round(start + (end - start) * easedProgress);

      el.textContent = current + suffix;

      if (progress < 1) {
        el.classList.add("counting");
        requestAnimationFrame(update);
      } else {
        el.classList.remove("counting");
      }
    };

    requestAnimationFrame(update);
  };

  const parseStatValue = (text) => {
    const match = text.match(/^(\d+)(.*)/);
    if (match) {
      return { number: parseInt(match[1], 10), suffix: match[2] };
    }
    return null;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const originalText = el.dataset.originalValue || el.textContent;
          el.dataset.originalValue = originalText;

          const parsed = parseStatValue(originalText);
          if (parsed) {
            el.textContent = "0" + parsed.suffix;
            setTimeout(() => {
              animateValue(el, 0, parsed.number, 2000, parsed.suffix);
            }, 200);
          }
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statValues.forEach((el) => observer.observe(el));
};

document.addEventListener("DOMContentLoaded", async () => {
  await initLanguage();
  initHeader();
  initMobileMenu();
  initReveal();
  initParallax();
  initForm();
  initWhatsApp();
  initStatCounters();
});
