(() => {
  const MENU = [
    { href: "index.html", label: "หน้าแรก", icon: "fa-house" },
    { href: "about.html", label: "เกี่ยวกับพรรค", icon: "fa-circle-info" },
    { href: "members.html", label: "ทำเนียบสมาชิก", icon: "fa-address-book" },
    { href: "policies.html", label: "นโยบายพรรค", icon: "fa-clipboard-list" },
    {
      href: "why-us.html",
      label: "ทำไมต้องเลือกพรรคเรา",
      icon: "fa-check-to-slot",
    },
    { href: "contact.html", label: "ติดต่อสอบถาม", icon: "fa-envelope" },
  ];

  const root = document.getElementById("nav-root");
  if (!root) return;

  const nav = document.createElement("nav");
  nav.className = "floating-nav";
  nav.setAttribute("aria-label", "เมนูหลัก");

  MENU.forEach((item) => {
    const a = document.createElement("a");
    a.className = "nav-item";
    a.href = item.href;
    a.innerHTML = `<i class="fa-solid ${item.icon}"></i><span>${item.label}</span>`;
    nav.appendChild(a);
  });

  root.appendChild(nav);

  // active ตามหน้าปัจจุบัน
  const current = (
    location.pathname.split("/").pop() || "index.html"
  ).toLowerCase();
  const links = [...nav.querySelectorAll(".nav-item")];

  let active = links.find(
    (a) => (a.getAttribute("href") || "").toLowerCase() === current,
  );
  if (!active) active = links[0];
  active.classList.add("is-active");

  // เลื่อนให้แท็บ active อยู่กลางแถบ
  function centerActive() {
    if (!active) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = active.getBoundingClientRect();

    const navCenter = navRect.left + navRect.width / 2;
    const itemCenter = itemRect.left + itemRect.width / 2;

    const delta = itemCenter - navCenter;
    const target = nav.scrollLeft + delta;

    const max = nav.scrollWidth - nav.clientWidth;
    nav.scrollTo({
      left: Math.max(0, Math.min(target, max)),
      behavior: "smooth",
    });
  }

  window.addEventListener("load", () => setTimeout(centerActive, 0));
  window.addEventListener("resize", () => setTimeout(centerActive, 50));
})();
