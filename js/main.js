const NAV_ITEMS = [
  { label: "หน้าแรก", href: "index.html", icon: "fa-solid fa-house" },
  {
    label: "เกี่ยวกับพรรค",
    href: "about.html",
    icon: "fa-solid fa-circle-info",
  },
  {
    label: "ทำเนียบสมาชิก",
    href: "members.html",
    icon: "fa-solid fa-people-group",
  },
  {
    label: "นโยบายพรรค",
    href: "policies.html",
    icon: "fa-solid fa-clipboard-list",
  },
  { label: "ทำไมถึงเลือกเรา", href: "why-us.html", icon: "fa-solid fa-star" },
  {
    label: "ติดต่อสอบถาม",
    href: "contact.html",
    icon: "fa-solid fa-address-card",
  },
];

const FOOTER_CREDIT = "©2026 SCI UNIT";

function getCurrentFileName() {
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf("/") + 1);
  return file || "index.html";
}

function renderNav() {
  const mount = document.getElementById("app-nav");
  if (!mount) return;

  const current = getCurrentFileName();

  const wrap = document.createElement("div");
  wrap.className = "app-nav-wrap";

  const center = document.createElement("div");
  center.className = "app-nav-center";

  const scroller = document.createElement("div");
  scroller.className = "app-nav-scroller";

  const nav = document.createElement("nav");
  nav.className = "app-nav";
  nav.setAttribute("aria-label", "Main navigation");

  NAV_ITEMS.forEach((item) => {
    const a = document.createElement("a");
    a.className = "nav-item";
    a.href = item.href;

    if (current === item.href) a.classList.add("is-active");

    const icon = document.createElement("i");
    icon.className = item.icon;
    icon.setAttribute("aria-hidden", "true");

    const span = document.createElement("span");
    span.textContent = item.label;

    a.appendChild(icon);
    a.appendChild(span);
    nav.appendChild(a);
  });

  scroller.appendChild(nav);
  center.appendChild(scroller);
  wrap.appendChild(center);
  mount.replaceChildren(wrap);

  scroller.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        scroller.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    },
    { passive: false },
  );
}

function renderFooter() {
  const mount = document.getElementById("app-footer");
  if (!mount) return;

  const footer = document.createElement("footer");
  footer.className = "app-footer";

  const container = document.createElement("div");
  container.className = "container";

  const inner = document.createElement("div");
  inner.className = "footer-inner";

  const credit = document.createElement("div");
  credit.textContent = FOOTER_CREDIT;

  inner.appendChild(credit);
  container.appendChild(inner);
  footer.appendChild(container);

  mount.replaceChildren(footer);
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
});
