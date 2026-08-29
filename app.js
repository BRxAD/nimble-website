(function () {
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
  const SETTING_LABEL = {
    inpatient: "Inpatient",
    outpatient: "Outpatient",
    mixed: "Inpatient and outpatient",
    other: "Other"
  };

  const results = document.getElementById("results");
  const count = document.getElementById("count");
  const form = document.getElementById("filters");
  if (results && count && form && Array.isArray(window.NIMBLE_STUDIES)) {
    function matches(study, state) {
      if (state.type && study.type !== state.type) return false;
      if (state.setting && study.setting !== state.setting) return false;
      if (state.focus && !(study.specimens || []).includes(state.focus)) return false;
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
      article.innerHTML = `
        <header>
          <span class="badge badge-${study.type}">${TYPE_LABEL[study.type]}</span>
          <span>${study.year}</span>
          <span>${SETTING_LABEL[study.setting] || study.setting}</span>
          <span>${study.applied}</span>
        </header>
        <h3>${study.title}</h3>
        <p class="byline">${authors}. ${study.country}. <em>${study.journal}</em>. ${doi}</p>
        <p class="finding">${study.detail}</p>
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

    form.addEventListener("input", draw);
    form.addEventListener("change", draw);
    draw();
  }
})();
