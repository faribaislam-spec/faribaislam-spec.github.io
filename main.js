// Draws the winding "route line" signature element used across pages.
// A visual nod to the Dijkstra-based safe-route algorithm in RunGirlRun.
function drawRoute(containerId, waypointCount) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const width = 1000;
  const height = 90;
  const points = [];
  const segments = waypointCount || 4;

  for (let i = 0; i <= segments; i++) {
    const x = (width / segments) * i;
    const y = i % 2 === 0 ? 20 : 68;
    points.push([x, y]);
  }

  let path = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const [px, py] = points[i - 1];
    const [x, y] = points[i];
    const midX = (px + x) / 2;
    path += ` Q ${midX} ${py}, ${x} ${y}`;
  }

  const dots = points
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5"></circle>`)
    .join("");

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8B6FB5" />
          <stop offset="100%" stop-color="#F0A8C0" />
        </linearGradient>
      </defs>
      <path d="${path}"></path>
      ${dots}
    </svg>
  `;
}

// Renders a set of project cards into a container.
function renderProjects(containerId, projects) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projects
    .map((p) => {
      const role = p.role ? `<div class="card-role">${p.role}</div>` : "";
      const tags = p.tags
        .map((t) => `<span class="tag">${t}</span>`)
        .join("");
      return `
        <article class="card" data-category="${p.category}">
          <span class="card-cat">${p.category}</span>
          <h3>${p.title}</h3>
          ${role}
          <p class="card-desc">${p.description}</p>
          <div class="tag-row">${tags}</div>
        </article>
      `;
    })
    .join("");
}

// Sets up category filter buttons on the projects page.
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll("#all-projects .card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.category;

      cards.forEach((card) => {
        const show = category === "All" || card.dataset.category === category;
        card.style.display = show ? "flex" : "none";
      });
    });
  });
}
