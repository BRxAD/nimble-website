(function () {
  const SPRITE = `
<svg class="svg-sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <symbol id="icon-baseline" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="15.5" stroke="currentColor" stroke-width="2.25"/>
    <path d="M13.4 13.4 L34.6 34.6" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
  </symbol>
  <symbol id="icon-hand-right" viewBox="0 0 48 48">
    <g fill="currentColor" transform="translate(0.9 0) scale(0.1034)">
      <path d="M448 128c0-17.67-14.33-32-32-32s-32 14.33-32 32v48h-16V80c0-26.51-21.49-48-48-48s-48 21.49-48 48v96h-16V48c0-26.51-21.49-48-48-48S160 21.49 160 48v176.62L84.69 162.34c-15.12-16.51-39.84-19.19-58.36-6.24C7.81 170.27-1.17 197.3 6.18 221.01l56.16 180.5C74.99 435.5 108.61 464 147.34 464H352c53.02 0 96-42.98 96-96V128z"/>
    </g>
  </symbol>
  <symbol id="icon-selective" viewBox="0 0 48 48">
    <use href="#icon-hand-right"/>
  </symbol>
  <symbol id="icon-framing" viewBox="0 0 48 48" fill="none">
    <path d="M10 12.5h28c2.2 0 4 1.8 4 4v14c0 2.2-1.8 4-4 4H22l-8.5 7v-7H10c-2.2 0-4-1.8-4-4v-14c0-2.2 1.8-4 4-4z" stroke="currentColor" stroke-width="2.25" stroke-linejoin="round"/>
    <path d="M16 20.5h16M16 26.5h10" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
  </symbol>
  <symbol id="icon-combination" viewBox="0 0 48 48" fill="none">
    <path d="M8.5 11h31c2.2 0 4 1.8 4 4v16.5c0 2.2-1.8 4-4 4H22.5l-8 6.5v-6.5H8.5c-2.2 0-4-1.8-4-4V15c0-2.2 1.8-4 4-4z" stroke="currentColor" stroke-width="2.25" stroke-linejoin="round"/>
    <g transform="translate(11.2 13.4) scale(0.52)">
      <use href="#icon-hand-right"/>
    </g>
  </symbol>
  <symbol id="icon-eye" viewBox="0 0 48 48" fill="none">
    <path d="M6.5 24c4.2-9.2 11.2-14 17.5-14S37.3 14.8 41.5 24c-4.2 9.2-11.2 14-17.5 14S10.7 33.2 6.5 24z" stroke="currentColor" stroke-width="2.25" stroke-linejoin="round"/>
    <circle cx="24" cy="24" r="6.2" stroke="currentColor" stroke-width="2.25"/>
    <circle cx="24" cy="24" r="2.1" fill="currentColor"/>
  </symbol>
  <symbol id="icon-report" viewBox="0 0 48 48" fill="none">
    <path d="M14 8.5h14.5L39 19v20.5H14z" stroke="currentColor" stroke-width="2.25" stroke-linejoin="round"/>
    <path d="M28.5 8.5V19H39" stroke="currentColor" stroke-width="2.25" stroke-linejoin="round"/>
    <path d="M20 26h12M20 31.5h8" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
  </symbol>
  <symbol id="icon-display" viewBox="0 0 48 48" fill="none">
    <rect x="8" y="10" width="32" height="22" rx="2.2" stroke="currentColor" stroke-width="2.25"/>
    <path d="M16 38h16M24 32v6" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
    <path d="M14 18h8M14 24h12" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
  </symbol>
  <symbol id="icon-choice" viewBox="0 0 48 48" fill="none">
    <path d="M8 24h26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M24.5 13.5 L39.5 24 24.5 34.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="icon-survey" viewBox="0 0 48 48" fill="none">
    <rect x="11" y="8" width="26" height="32" rx="2.2" stroke="currentColor" stroke-width="2.25"/>
    <path d="M18 18.5h12M18 25h12M18 31.5h7" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
    <path d="M18 18.5l2.2 2.2 4.3-4.7" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="icon-interview" viewBox="0 0 48 48" fill="none">
    <path d="M8 14h16c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3h-5l-6 5v-5H8c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3z" stroke="currentColor" stroke-width="2.25" stroke-linejoin="round"/>
    <path d="M27 21h13c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3h-3l-5 4.5v-4.5h-2c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3z" stroke="currentColor" stroke-width="2.25" stroke-linejoin="round"/>
  </symbol>
  <symbol id="icon-trial" viewBox="0 0 48 48" fill="none">
    <path d="M18 8h12M20 8v8L10.5 38.5h27L27.5 16V8" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 28h16" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
  </symbol>
  <symbol id="icon-podcast" viewBox="0 0 48 48" fill="none">
    <path d="M16 20a8 8 0 0 1 16 0v4a8 8 0 0 1-16 0z" stroke="currentColor" stroke-width="2.25"/>
    <path d="M12 22.5v1.5a12 12 0 0 0 24 0v-1.5M24 32.5V40M18 40h12" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
  </symbol>
  <symbol id="icon-article" viewBox="0 0 48 48" fill="none">
    <path d="M12 9.5h20l8 8V38.5H12z" stroke="currentColor" stroke-width="2.25" stroke-linejoin="round"/>
    <path d="M32 9.5v8h8" stroke="currentColor" stroke-width="2.25" stroke-linejoin="round"/>
    <path d="M18 24h12M18 29.5h8" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
  </symbol>
  <symbol id="icon-mail" viewBox="0 0 48 48" fill="none">
    <rect x="7.5" y="12.5" width="33" height="23" rx="2.2" stroke="currentColor" stroke-width="2.25"/>
    <path d="M8.5 14.5 L24 26.5 39.5 14.5" stroke="currentColor" stroke-width="2.25" stroke-linejoin="round"/>
  </symbol>
  <symbol id="icon-idea" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="20" r="11" stroke="currentColor" stroke-width="2.25"/>
    <path d="M20 30.5h8M19.5 34.5h9M21.5 38.5h5" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
    <path d="M24 15v5M21 18.5h6" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/>
  </symbol>
</svg>`;

  const holder = document.createElement("div");
  holder.className = "svg-sprite-holder";
  holder.innerHTML = SPRITE;
  document.body.insertBefore(holder, document.body.firstChild);

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!nav) return;
    if (toggle) {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      return;
    }
    if (event.target.closest(".site-nav a")) {
      nav.classList.remove("is-open");
      const btn = document.querySelector(".nav-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }
  });

  const AGENTS = [
    { name: "Amoxicillin-clavulanate", interp: "S", preferred: false },
    { name: "Ampicillin", interp: "S", preferred: false },
    { name: "Cefazolin", interp: "S", preferred: false },
    { name: "Ciprofloxacin", interp: "S", preferred: false },
    { name: "Nitrofurantoin", interp: "S", preferred: true },
    { name: "Trimethoprim-sulfamethoxazole", interp: "S", preferred: true }
  ];

  const slip = document.getElementById("slip");
  const astBody = document.getElementById("ast-body");
  if (slip && astBody) {
    const tabs = document.querySelectorAll(".nudge-tab");

    function orderFor(mode) {
      if (mode === "eye") {
        return [...AGENTS.filter((a) => a.preferred), ...AGENTS.filter((a) => !a.preferred)];
      }
      return AGENTS;
    }

    function render(mode) {
      slip.dataset.mode = mode;
      astBody.replaceChildren();
      orderFor(mode).forEach((agent) => {
        const tr = document.createElement("tr");
        if (mode === "eye" && agent.preferred) tr.classList.add("preferred");
        if (!agent.preferred) tr.classList.add("hide");
        const drug = document.createElement("td");
        drug.textContent = agent.name;
        const interp = document.createElement("td");
        interp.className = "s";
        interp.textContent = agent.interp;
        tr.append(drug, interp);
        astBody.append(tr);
      });
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const mode = tab.dataset.nudge;
        tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
        slip.setAttribute("aria-labelledby", tab.id);
        render(mode);
      });
    });

    render("default");
  }

  const TYPE_LABEL = {
    selective: "Selective",
    framing: "Framing",
    combination: "Combination of selective and framing"
  };
  const TYPE_ICON = {
    selective: "icon-selective",
    framing: "icon-framing",
    combination: "icon-combination"
  };
  const SETTING_LABEL = {
    inpatient: "Inpatient",
    outpatient: "Outpatient",
    mixed: "Inpatient and outpatient",
    other: "Other"
  };

  const results = document.getElementById("results");
  const count = document.getElementById("count");
  const filters = document.getElementById("filters");
  const typeSelect = document.getElementById("type");
  const legend = document.getElementById("type-legend");

  function syncLegend() {
    if (!legend || !typeSelect) return;
    legend.querySelectorAll("[data-type]").forEach((btn) => {
      const on = btn.dataset.type === typeSelect.value;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", String(on));
    });
  }

  if (legend && typeSelect) {
    legend.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-type]");
      if (!btn) return;
      typeSelect.value = btn.dataset.type;
      typeSelect.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }

  if (results && count && filters && Array.isArray(window.NIMBLE_STUDIES)) {
    function matches(study, state) {
      if (state.type && study.type !== state.type) return false;
      if (state.setting && study.setting !== state.setting) return false;
      if (state.focus) {
        const specs = study.specimens || [];
        const hit =
          state.focus === "sterile"
            ? specs.some((s) => s === "sterile" || s === "blood")
            : state.focus === "other"
              ? specs.some((s) => s === "other" || s === "not-stated")
              : specs.includes(state.focus);
        if (!hit) return false;
      }
      if (state.q) {
        const blob = [study.authors, study.title, study.journal, study.detail, study.country, study.applied, study.year]
          .join(" ")
          .toLowerCase();
        if (!blob.includes(state.q)) return false;
      }
      return true;
    }

    function card(study) {
      const article = document.createElement("article");
      article.className = "lit-card";
      const doi = study.doi
        ? `<a href="https://doi.org/${study.doi}">doi:${study.doi}</a>`
        : "No DOI listed";
      const authors = study.authors.replace(/\.$/, "");
      const icon = TYPE_ICON[study.type] || "icon-baseline";
      article.innerHTML = `
        <div class="type-mark type-${study.type}" aria-hidden="true">
          <svg class="glyph"><use href="#${icon}"></use></svg>
        </div>
        <div class="lit-body">
          <header>
            <span class="badge badge-${study.type}">${TYPE_LABEL[study.type]}</span>
            <span>${study.year}</span>
            <span>${SETTING_LABEL[study.setting] || study.setting}</span>
            <span>${study.applied}</span>
          </header>
          <h3>${study.title}</h3>
          <p class="byline">${authors}. ${study.country}. <em>${study.journal}</em>. ${doi}</p>
          <p class="finding">${study.detail}</p>
        </div>
      `;
      return article;
    }

    function draw() {
      const state = {
        q: document.getElementById("q").value.trim().toLowerCase(),
        type: document.getElementById("type").value,
        setting: document.getElementById("setting").value,
        focus: document.getElementById("focus").value
      };
      syncLegend();
      const list = window.NIMBLE_STUDIES.filter((s) => matches(s, state))
        .slice()
        .sort((a, b) => b.year - a.year || a.authors.localeCompare(b.authors));
      results.replaceChildren();
      if (!list.length) {
        const empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = "No studies match these filters. Clear a dropdown or the search box.";
        results.append(empty);
        count.textContent = "0 of " + window.NIMBLE_STUDIES.length + " studies";
        return;
      }
      list.forEach((study) => results.append(card(study)));
      count.textContent = list.length + " of " + window.NIMBLE_STUDIES.length + " studies";
    }

    filters.addEventListener("input", draw);
    filters.addEventListener("change", draw);
    draw();
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const orgInput = document.getElementById("contact-org");
    const messageInput = document.getElementById("contact-message");
    const topicError = document.getElementById("topic-error");
    const status = document.getElementById("form-status");
    const submit = contactForm.querySelector("[type=submit]");
    const thanks = document.getElementById("contact-thanks");

    function setError(input, msg) {
      const err = document.getElementById(input.id + "-error");
      if (err) err.textContent = msg || "";
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      if (msg) input.setAttribute("aria-describedby", input.id + "-error");
      else input.removeAttribute("aria-describedby");
    }

    function validEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    contactForm.querySelectorAll("input[name=topic]").forEach((radio) => {
      radio.addEventListener("change", () => {
        if (topicError) topicError.textContent = "";
        if (radio.value === "idea") {
          messageInput.placeholder = "Setting, specimen or organism, and the reporting change you have in mind.";
        } else {
          messageInput.placeholder = "Your comment or question.";
        }
      });
    });

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const org = orgInput.value.trim();
      const message = messageInput.value.trim();
      const topicInput = contactForm.querySelector("input[name=topic]:checked");
      let ok = true;

      if (!name) {
        setError(nameInput, "Enter your name.");
        ok = false;
      } else setError(nameInput, "");

      if (!email || !validEmail(email)) {
        setError(emailInput, "Enter a valid email address.");
        ok = false;
      } else setError(emailInput, "");

      if (!topicInput) {
        if (topicError) topicError.textContent = "Choose comments and questions, or a project idea.";
        ok = false;
      } else if (topicError) topicError.textContent = "";

      if (!message || message.length < 10) {
        setError(messageInput, "Write a few sentences so we can respond.");
        ok = false;
      } else setError(messageInput, "");

      if (!ok) {
        const invalid = contactForm.querySelector("[aria-invalid=true]");
        if (invalid) invalid.focus();
        else {
          const firstTopic = contactForm.querySelector("input[name=topic]");
          if (firstTopic) firstTopic.focus();
        }
        return;
      }

      const topic = topicInput.value;
      const subject =
        topic === "idea"
          ? "NiMBLE website: idea for a new project"
          : "NiMBLE website: comment or question";
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        org ? `Organization: ${org}` : null,
        `Topic: ${topic === "idea" ? "New project idea" : "General comments or questions"}`,
        "",
        message
      ]
        .filter(Boolean)
        .join("\n");
      const mailto =
        "mailto:brad.langford@gmail.com,larissa.matukas@utoronto.ca?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      submit.disabled = true;
      submit.textContent = "Sending…";
      if (status) status.textContent = "";

      let sent = false;
      try {
        const res = await fetch("https://formsubmit.co/ajax/brad.langford@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            organization: org || "Not provided",
            topic: topic === "idea" ? "New project idea" : "General comments or questions",
            message,
            _replyto: email,
            _cc: "larissa.matukas@utoronto.ca",
            _subject: subject,
            _template: "table",
            _captcha: "false"
          })
        });
        const json = await res.json();
        if (json && json.success) sent = true;
      } catch (err) {
        sent = false;
      }

      if (sent) {
        contactForm.hidden = true;
        if (thanks) {
          thanks.hidden = false;
          thanks.focus();
        }
        return;
      }

      window.location.href = mailto;
      if (status) {
        status.innerHTML =
          'If your email app did not open, write to <a href="mailto:brad.langford@gmail.com">brad.langford@gmail.com</a> and <a href="mailto:larissa.matukas@utoronto.ca">larissa.matukas@utoronto.ca</a>.';
      }
      submit.disabled = false;
      submit.textContent = "Send message";
    });
  }
})();
