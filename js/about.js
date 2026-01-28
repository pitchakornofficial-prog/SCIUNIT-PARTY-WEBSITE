// =========================
// ABOUT DATA (การ์ดเกี่ยวกับพรรค)
// =========================
const aboutCardsData = [
  {
    title: "วิสัยทัศน์",
    shortDesc:
      "มุ่งมั่นพิทักษ์สิทธิ เสรีภาพ และความเท่าเทียม พร้อมพัฒนาคุณภาพชีวิตนักศึกษาคณะวิทยาศาสตร์",
    detail:
      "พรรค SCI UNIT มุ่งมั่นพิทักษ์รักษาสิทธิ เสรีภาพ และความเท่าเทียมของนักศึกษาคณะวิทยาศาสตร์ พร้อมทั้งพัฒนาคุณภาพชีวิตและสภาพแวดล้อมในการเรียนรู้ ผ่านกิจกรรมที่สร้างสรรค์และเป็นประโยชน์แก่นักศึกษา เปิดพื้นที่ให้ทุกเสียงได้มีส่วนร่วม และเสริมสร้างความสามัคคีในคณะ เพื่อพานักศึกษาคณะวิทยาศาสตร์ก้าวไปข้างหน้าอย่างมั่นคงและยั่งยืน ภายใต้แนวคิด Together We Move Forward",
    icon: "fa-regular fa-eye",
    img: "",
  },
  {
    title: "พันธกิจ",
    shortDesc: "ลงมือทำให้เกิดขึ้นจริง ผ่านงานที่ชัดเจน วัดผลได้ และตรวจสอบได้",
    detail:
      "• เปิดช่องทางรับฟังปัญหาและข้อเสนอแนะของนักศึกษาอย่างต่อเนื่อง\n• ผลักดันกิจกรรมที่เป็นประโยชน์และเข้าถึงได้ทุกสาขา\n• ส่งเสริมความปลอดภัย สภาพแวดล้อมการอ่านหนังสือ และคุณภาพชีวิตในคณะ\n• รายงานความคืบหน้า/ผลลัพธ์อย่างโปร่งใส ตรวจสอบได้",
    icon: "fa-solid fa-bullseye",
  },
  {
    title: "อุดมการณ์",
    shortDesc:
      "ยึดนักศึกษาเป็นศูนย์กลาง โปร่งใส เท่าเทียม และไม่ทิ้งใครไว้ข้างหลัง",
    detail:
      "เราเชื่อว่าทุกคนควรมีพื้นที่ มีโอกาส และเข้าถึงทรัพยากร/กิจกรรมได้อย่างเท่าเทียม โดยยึดหลัก\n• โปร่งใส ตรวจสอบได้\n• ทำได้จริง วัดผลได้\n• รับฟังเสียงนักศึกษา\n• ไม่ทิ้งใครไว้ข้างหลัง",
    icon: "fa-solid fa-handshake",
  },
  {
    title: "แนวคิดหลักของพรรค",
    shortDesc: "Together We Move Forward | เราจะก้าวไปข้างหน้าด้วยกัน",
    detail:
      "SCI UNIT คือการรวมพลังของนักศึกษาคณะวิทยาศาสตร์ที่อยากเห็นการเปลี่ยนแปลงที่เป็นรูปธรรม เราอยากให้คณะเป็นพื้นที่ที่ปลอดภัย เป็นมิตร และเปิดโอกาสให้ทุกคนเติบโตไปด้วยกัน",
    icon: "fa-solid fa-people-group",
  },
];

// =========================
// TIMELINE DATA
// =========================
const timelineData = [
  {
    date: "8 มกราคม 2569",
    head: "ประชุมพรรคครั้งแรก",
    summary: "เริ่มต้นก่อตั้งพรรค SCI UNIT อย่างเป็นทางการ",
    img: "",
    detail: "รายละเอียดการประชุมก่อตั้งพรรค และแผนงานในอนาคต",
    // link: "https://example.com/source1",
  },
  {
    date: "22 มกราคม 2569",
    head: "ถ่ายรูปสมาชิกพรรค",
    summary: "ถ่ายภาพหมู่สมาชิกพรรคเพื่อใช้ในสื่อประชาสัมพันธ์",
    img: "",
    detail: "รายละเอียดการถ่ายภาพและการจัดเตรียมสื่อ",
    // link: "https://example.com/source2",
  },
];

// =========================
// UTIL
// =========================
const esc = (s) =>
  String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function nl2br(s) {
  return esc(s).replaceAll("\n", "<br>");
}

// =========================
// ABOUT GRID (render cards)
// =========================
(function renderAboutCards() {
  const root = document.getElementById("about-root");
  if (!root) return;

  // ใช้ .card เดิม + จัด grid แบบ inline style เพื่อไม่ต้องแก้ css
  root.innerHTML = `
    <section
      style="
        display:grid;
        gap:16px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      "
      class="about-grid"
      id="aboutGrid"
    >
      ${aboutCardsData
        .map(
          (it, idx) => `
        <article
          class="card about-item"
          data-idx="${idx}"
          tabindex="0"
          role="button"
          aria-label="อ่านรายละเอียด ${esc(it.title)}"
          style="cursor:pointer;"
        >
          <div style="display:flex; align-items:flex-start; gap:12px;">
            <div
              style="
                width:40px; height:40px;
                border-radius:12px;
                display:flex; align-items:center; justify-content:center;
                background: rgba(15,23,42,0.06);
                border: 1px solid rgba(15,23,42,0.08);
                flex: 0 0 auto;
              "
              aria-hidden="true"
            >
              <i class="${esc(it.icon)}"></i>
            </div>

            <div style="min-width:0;">
              <h3 style="margin:0 0 6px; font-weight:900; font-size:18px;">
                ${esc(it.title)}
              </h3>
              <p style="margin:0; color: rgba(15,23,42,0.72); line-height:1.55;">
                ${esc(it.shortDesc)}
              </p>

              <div style="margin-top:10px; font-weight:900; color: var(--active); display:inline-flex; gap:8px; align-items:center;">
                อ่านรายละเอียด <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </article>
      `,
        )
        .join("")}
    </section>
  `;

  // มือถือให้เป็น 1 คอลัมน์ (ทำ inline ใน JS กันพัง)
  const grid = document.getElementById("aboutGrid");
  const mq = window.matchMedia("(max-width: 820px)");
  const applyCols = () => {
    if (!grid) return;
    grid.style.gridTemplateColumns = mq.matches
      ? "1fr"
      : "repeat(2, minmax(0, 1fr))";
  };
  applyCols();
  mq.addEventListener?.("change", applyCols);

  // bind open modal
  root.addEventListener("click", (e) => {
    const card = e.target.closest(".about-item");
    if (!card) return;
    openAboutModal(Number(card.dataset.idx));
  });

  root.addEventListener("keydown", (e) => {
    const card = e.target.closest(".about-item");
    if (!card) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openAboutModal(Number(card.dataset.idx));
    }
  });
})();

// =========================
// ABOUT MODAL (reuse your modal style)
// =========================
let aboutOverlay = null;

function mountAboutModalOnce() {
  if (aboutOverlay) return;

  aboutOverlay = document.createElement("div");
  aboutOverlay.className = "modal-overlay";

  // ✅ ทำ modal เหมือนหน้า "ทำไมถึงเลือกเรา" (ซ้ายไว้สำหรับรูป)
  aboutOverlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="รายละเอียดเกี่ยวกับพรรค">
      <div class="modal-inner" id="aboutModalInner">

        <!-- ซ้าย: รูป (จะแสดง/ซ่อนตามมีรูปจริง) -->
        <div class="modal-left" id="aboutModalLeft">
          <img id="aboutModalImg" alt="" />
        </div>

        <!-- ขวา: เนื้อหา -->
        <div class="modal-right">
          <button class="modal-close" id="aboutClose" aria-label="ปิด">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div class="modal-title">
            <h2 class="big" id="aboutTitle"></h2>
            <p class="sub" id="aboutSub"></p>
          </div>

          <div class="info-block">
            <h4><i class="fa-regular fa-file-lines"></i> รายละเอียด</h4>
            <div id="aboutDetail" style="line-height:1.75; color: rgba(15,23,42,.92);"></div>
          </div>
        </div>

      </div>
    </div>
  `;

  document.body.appendChild(aboutOverlay);

  aboutOverlay
    .querySelector("#aboutClose")
    ?.addEventListener("click", closeAboutModal);

  aboutOverlay.addEventListener("click", (e) => {
    if (e.target === aboutOverlay) closeAboutModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && aboutOverlay.classList.contains("open")) {
      closeAboutModal();
    }
  });
}

function openAboutModal(idx) {
  mountAboutModalOnce();

  const it = aboutCardsData[idx];
  if (!it) return;

  aboutOverlay.classList.add("open");
  document.body.style.overflow = "hidden";

  aboutOverlay.querySelector("#aboutTitle").textContent = it.title || "";
  aboutOverlay.querySelector("#aboutSub").textContent = it.shortDesc || "";
  aboutOverlay.querySelector("#aboutDetail").innerHTML = nl2br(
    it.detail || "-",
  );

  // ✅ ซ่อน/โชว์ฝั่งซ้ายแบบไม่ลบ DOM
  const inner = aboutOverlay.querySelector("#aboutModalInner");
  const left = aboutOverlay.querySelector("#aboutModalLeft");
  const img = aboutOverlay.querySelector("#aboutModalImg");

  if (it.img) {
    img.src = it.img;
    img.alt = it.title || "รูปประกอบ";

    left.classList.remove("is-hidden");
    inner.classList.remove("no-left");
  } else {
    // ไม่มีรูป -> ซ่อนซ้าย + เปลี่ยนเป็น 1 คอลัมน์
    left.classList.add("is-hidden");
    inner.classList.add("no-left");

    // กันรูปค้างจากอันก่อน
    img.removeAttribute("src");
    img.alt = "";
  }

  setTimeout(() => aboutOverlay.querySelector("#aboutClose")?.focus(), 0);
}

function closeAboutModal() {
  if (!aboutOverlay) return;
  aboutOverlay.classList.remove("open");
  document.body.style.overflow = "";

  // ✅ reset เผื่อเปิดรอบต่อไป
  const inner = aboutOverlay.querySelector("#aboutModalInner");
  const left = aboutOverlay.querySelector("#aboutModalLeft");
  inner?.classList.remove("no-left");
  left?.classList.remove("is-hidden");
}

// =========================
// TIMELINE (your favorite part)
// =========================
(function initTimeline() {
  const container = document.getElementById("timeline-section");
  if (!container) return;

  injectTimelineStylesOnce();

  const generateHTML = () => {
    const itemsHTML = timelineData
      .map((item, index) => {
        const position = index % 2 === 0 ? "left" : "right";
        const linkHTML = item.link
          ? `<a class="tl-ref" href="${esc(item.link)}" target="_blank" rel="noopener">ลิงก์อ้างอิง</a>`
          : "";

        return `
          <div class="tl-item ${position} tl-item-collapsed" tabindex="0" role="button" aria-label="ดูรายละเอียด ${esc(item.head)}">
            <span class="tl-dot"></span>

            <div class="tl-card">
              <div class="tl-date">${esc(item.date)}</div>
              <div class="tl-head">${esc(item.head)}</div>
              <div class="tl-summary">${esc(item.summary)}</div>

              ${
                item.img
                  ? `<img class="tl-img" src="${esc(item.img)}" alt="${esc(
                      item.head,
                    )}" loading="lazy" />`
                  : ""
              }

              <div class="tl-detail">
                ${esc(item.detail || "")}
                ${linkHTML}
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <article class="card tl">
        <div class="tl-header" id="tlToggle" role="button" tabindex="0" aria-label="เปิด/ปิด Timeline">
          <div>
            <h3 class="tl-title">ความเป็นมาของพรรค (Timeline)</h3>
            <p class="tl-sub">เลื่อนดูจากบนลงล่าง • กดหัวข้อนี้เพื่อพับ/กางทั้งหมด</p>
          </div>
          <span class="tl-arrow"><i class="fa-solid fa-chevron-down"></i></span>
        </div>

        <div class="tl-body tl-collapsed" id="tlBody">
          <div class="tl-line"></div>
          ${itemsHTML}
        </div>
      </article>
    `;
  };

  container.innerHTML = generateHTML();

  const tlArticle = container.querySelector(".tl");
  const toggleBtn = document.getElementById("tlToggle");
  const tlBody = document.getElementById("tlBody");

  const toggleAll = () => {
    tlBody.classList.toggle("tl-collapsed");
    tlArticle.classList.toggle("open");
  };

  toggleBtn?.addEventListener("click", toggleAll);
  toggleBtn?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAll();
    }
  });

  // per item toggle
  container.querySelectorAll(".tl-item").forEach((item) => {
    const card = item.querySelector(".tl-card");
    const toggleItem = (e) => {
      if (e?.target?.closest?.(".tl-ref")) return;
      item.classList.toggle("tl-item-collapsed");
    };

    card.addEventListener("click", toggleItem);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleItem(e);
      }
    });
  });

  function injectTimelineStylesOnce() {
    if (document.getElementById("timelineStyles")) return;

    const style = document.createElement("style");
    style.id = "timelineStyles";
    style.textContent = `
      /* ===== Timeline (neutral theme, no orange) ===== */
      .tl { padding: 0; overflow: hidden; }
      .tl-header {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:14px;
        padding: 18px 18px;
        cursor:pointer;
        user-select:none;
        border-bottom: 1px solid rgba(15,23,42,0.06);
        background: rgba(255,255,255,0.86);
      }
      .tl-title { margin:0; font-size:18px; font-weight:900; }
      .tl-sub { margin:6px 0 0; color: rgba(15,23,42,0.65); font-size:13px; }
      .tl-arrow { width:40px; height:40px; display:flex; align-items:center; justify-content:center;
        border-radius:999px; background: rgba(15,23,42,0.06); border: 1px solid rgba(15,23,42,0.08);
      }
      .tl.open .tl-arrow { transform: rotate(180deg); transition: transform .18s ease; }
      .tl-body { position: relative; padding: 16px 18px 22px; }
      .tl-body.tl-collapsed { display: none; }

      .tl-line {
        position:absolute;
        left: 50%;
        top: 16px;
        bottom: 22px;
        width: 2px;
        transform: translateX(-50%);
        background: rgba(15,23,42,0.12);
        border-radius: 999px;
      }

      .tl-item { position: relative; display:flex; margin: 14px 0; }
      .tl-item.left { justify-content: flex-start; padding-right: calc(50% + 18px); }
      .tl-item.right { justify-content: flex-end; padding-left: calc(50% + 18px); }

      .tl-dot {
        position:absolute;
        left: 50%;
        top: 18px;
        width: 12px;
        height: 12px;
        transform: translateX(-50%);
        background: var(--active);
        border: 3px solid rgba(255,255,255,0.95);
        box-shadow: 0 10px 24px rgba(2,6,23,0.12);
        border-radius: 999px;
      }

      .tl-card {
        width: min(460px, 100%);
        background: rgba(255,255,255,0.92);
        border: 1px solid rgba(15,23,42,0.06);
        border-radius: 16px;
        padding: 14px 14px;
        box-shadow: 0 10px 24px rgba(2,6,23,0.06);
        cursor:pointer;
      }

      .tl-date { font-size: 12px; font-weight: 900; color: rgba(15,23,42,0.65); }
      .tl-head { margin-top: 6px; font-size: 16px; font-weight: 900; }
      .tl-summary { margin-top: 6px; color: rgba(15,23,42,0.75); line-height: 1.5; }

      .tl-img {
        width: 100%;
        margin-top: 10px;
        border-radius: 14px;
        border: 1px solid rgba(15,23,42,0.06);
        display:block;
      }

      .tl-detail {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px dashed rgba(15,23,42,0.14);
        color: rgba(15,23,42,0.85);
        line-height: 1.65;
      }

      .tl-item.tl-item-collapsed .tl-detail { display:none; }
      .tl-item.tl-item-collapsed .tl-img { display:none; }

      .tl-ref {
        display:inline-flex;
        margin-top: 10px;
        font-weight: 900;
        color: var(--active);
        text-decoration: none;
      }

      /* Mobile: line to left, single column */
      @media (max-width: 860px) {
        .tl-line { left: 14px; transform: none; }
        .tl-dot { left: 14px; transform: none; }
        .tl-item.left, .tl-item.right {
          padding: 0 0 0 26px;
          justify-content: flex-start;
        }
        .tl-card { width: 100%; }
      }
    `;
    document.head.appendChild(style);
  }
})();
