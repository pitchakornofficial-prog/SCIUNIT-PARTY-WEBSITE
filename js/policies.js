/* =========================================================
   policies.js — ทั้งไฟล์
   ✅ การ์ดด้านหน้า “ไม่แตะ”
   ✅ เปลี่ยนเฉพาะ “ป็อปอัพ” ให้เหมือนหน้าอื่น ๆ (พื้นหลังจุด ๆ + ตัวอักษรเล็กลง)
   ✅ มี tag + กรองได้
   ========================================================= */

// =========================
// POLICIES DATA
// =========================
const policiesData = [
  {
    title: "นโยบายส่งเสริมกิจกรรมและความสามัคคีของนักศึกษา",
    shortDesc:
      "จัดให้มีกิจกรรมที่เป็นประโยชน์และสร้างความสามัคคีให้แก่นักศึกษา",
    detail: `จัดให้มีกิจกรรมที่เป็นประโยชน์และสร้างความสามัคคีให้แก่นักศึกษาคณะวิทยาศาสตร์ เช่น
- กิจกรรมรับน้องอย่างสร้างสรรค์
- กิจกรรมกีฬาของคณะ
- กิจกรรมค่ายต่าง ๆ`,
  },
  {
    title: "นโยบายส่งเสริมกิจกรรมจิตอาสาและนักศึกษากู้ กยศ.",
    shortDesc:
      "จัดให้มีกิจกรรมจิตอาสาและกิจกรรมสร้างสรรค์สำหรับนักศึกษาที่กู้ยืมกองทุน",
    detail:
      "จัดให้มีกิจกรรมจิตอาสาและกิจกรรมสร้างสรรค์สำหรับนักศึกษาที่กู้ยืมกองทุน กยศ. เพื่อเสริมสร้างจิตสาธารณะและการมีส่วนร่วมในสังคม",
  },
  {
    title: "นโยบายเสริมสร้างความกล้าแสดงออกและความมั่นใจ",
    shortDesc:
      "จัดกิจกรรมที่ช่วยส่งเสริมความกล้าแสดงออก พัฒนาความมั่นใจในตนเอง",
    detail:
      "จัดกิจกรรมที่ช่วยส่งเสริมความกล้าแสดงออก พัฒนาความมั่นใจในตนเอง และทักษะการสื่อสารของนักศึกษาคณะวิทยาศาสตร์",
  },
  {
    title: "นโยบายรับฟังความคิดเห็นและปัญหาของนักศึกษา",
    shortDesc: "เปิดช่องทางในการรับฟังปัญหาและข้อเสนอแนะของนักศึกษา",
    detail:
      "เปิดช่องทางในการรับฟังปัญหาและข้อเสนอแนะของนักศึกษา เพื่อให้สามารถพูดคุย ปรึกษา และแลกเปลี่ยนความคิดเห็นได้อย่างเป็นกันเอง",
  },
  {
    title: "นโยบายสนับสนุนสิทธิเสรีภาพและความเท่าเทียม",
    shortDesc: "สนับสนุนสิทธิเสรีภาพ ความเสมอภาค และความเท่าเทียมของนักศึกษา",
    detail:
      "สนับสนุนสิทธิเสรีภาพ ความเสมอภาค และความเท่าเทียมของนักศึกษาคณะวิทยาศาสตร์ทุกคน โดยไม่เลือกปฏิบัติ",
  },
  {
    title: "นโยบายเพิ่มความปลอดภัยและสภาพแวดล้อมการอ่านหนังสือ",
    shortDesc:
      "เพิ่มความสะดวก ความสว่าง และความปลอดภัยในบริเวณพื้นที่อ่านหนังสือ",
    detail:
      "เพิ่มความสะดวก ความสว่าง และความปลอดภัย ในบริเวณพื้นที่อ่านหนังสือของนักศึกษาคณะวิทยาศาสตร์",
  },
  {
    title: "นโยบายสนับสนุนกิจกรรมนักศึกษา",
    shortDesc: "ช่วยส่งเสริมและสนับสนุนกิจกรรมของนักศึกษาคณะวิทยาศาสตร์",
    detail:
      "ช่วยส่งเสริมและสนับสนุนกิจกรรมของนักศึกษาคณะวิทยาศาสตร์ เพื่อเปิดโอกาสให้นักศึกษาได้พัฒนาศักยภาพอย่างรอบด้าน",
  },
];

// =========================
// TAGS DETECT
// =========================
function detectTags(p) {
  const text = `${p.title} ${p.shortDesc} ${p.detail}`.toLowerCase();
  const tags = [];
  const add = (t) => {
    if (!tags.includes(t)) tags.push(t);
  };

  if (text.includes("กิจกรรม")) add("กิจกรรม");
  if (text.includes("จิตอาสา")) add("จิตอาสา");
  if (text.includes("กยศ")) add("กยศ.");
  if (text.includes("สื่อสาร")) add("การสื่อสาร");
  if (text.includes("ความมั่นใจ") || text.includes("กล้าแสดงออก"))
    add("ความมั่นใจ");
  if (
    text.includes("รับฟัง") ||
    text.includes("ความคิดเห็น") ||
    text.includes("ปัญหา")
  )
    add("รับฟัง");
  if (
    text.includes("สิทธิ") ||
    text.includes("เท่าเทียม") ||
    text.includes("เสมอภาค")
  )
    add("ความเท่าเทียม");
  if (text.includes("ปลอดภัย")) add("ความปลอดภัย");
  if (text.includes("สภาพแวดล้อม")) add("สภาพแวดล้อม");
  if (text.includes("อ่านหนังสือ")) add("การอ่าน");

  if (tags.length === 0) add("อื่น ๆ");
  return tags;
}

// =========================
// MAIN
// =========================
(function () {
  const root = document.getElementById("policies-root");
  const filtersEl = document.getElementById("policies-filters");
  if (!root) return;

  // ---------- helpers ----------
  const esc = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const toBr = (s) => esc(s).replaceAll("\n", "<br>");

  // แปลงข้อความเป็น list อัตโนมัติ (รองรับ - / • / 1.)
  function toDetailHTML(text) {
    const raw = String(text ?? "").trim();
    if (!raw) return "<div>-</div>";

    const lines = raw
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    const isBullet = (l) =>
      l.startsWith("- ") || l.startsWith("• ") || /^\d+\.\s+/.test(l);

    const bulletLines = lines.filter(isBullet);
    const normalLines = lines.filter((l) => !isBullet(l));

    // ถ้ามีบรรทัด bullet มากพอ -> ทำเป็น ul
    if (bulletLines.length >= 1) {
      const header = normalLines.length
        ? `<div style="margin-bottom:10px;">${esc(normalLines.join(" "))}</div>`
        : "";
      const items = bulletLines
        .map((l) => {
          const cleaned = l
            .replace(/^-\s+/, "")
            .replace(/^•\s+/, "")
            .replace(/^\d+\.\s+/, "");
          return `<li>${esc(cleaned)}</li>`;
        })
        .join("");
      return `${header}<ul class="pm-list">${items}</ul>`;
    }

    // ไม่ใช่ bullet -> br ปกติ
    return `<div>${toBr(raw)}</div>`;
  }

  // ---------- data enrich ----------
  const POLICIES = policiesData.map((p, idx) => ({
    id: `pol-${String(idx + 1).padStart(2, "0")}`,
    ...p,
    tags: detectTags(p),
  }));

  const uniq = (arr) => [...new Set(arr)];
  const allTags = uniq(POLICIES.flatMap((p) => p.tags)).sort((a, b) =>
    a.localeCompare(b, "th"),
  );

  let activeTag = "ทั้งหมด";

  // =========================
  // POPUP (เหมือนหน้าอื่น ๆ) — inject style เฉพาะ popup
  // =========================
  (function injectPolicyModalStylesOnce() {
    if (document.getElementById("policyModalStyle")) return;
    const style = document.createElement("style");
    style.id = "policyModalStyle";
    style.textContent = `
      /* Overlay */
      .policy-modal-overlay{
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background: rgba(2,6,23,.55);
        backdrop-filter: blur(6px);
      }
      .policy-modal-overlay.open{ display: flex; }

      /* Panel */
      .policy-modal{
        position: relative;
        width: min(1100px, 96vw);
        height: min(760px, 90vh);
        border-radius: 22px;
        overflow: hidden;
        border: 1px solid rgba(15,23,42,.10);
        box-shadow: 0 24px 90px rgba(2,6,23,.35);
        background:
          radial-gradient(circle at 1px 1px, rgba(15,23,42,.14) 1px, transparent 1px) 0 0 / 18px 18px,
          rgba(255,255,255,.96);
      }

      /* Inner layout */
      .policy-modal-inner{
        height: 100%;
        padding: 26px;
        overflow: auto;
      }

      /* Close */
      .policy-modal-close{
        position: absolute;
        top: 14px;
        right: 14px;
        width: 44px;
        height: 44px;
        border-radius: 999px;
        border: 1px solid rgba(15,23,42,.12);
        background: rgba(255,255,255,.92);
        cursor: pointer;
        display: grid;
        place-items: center;
      }

      /* Typography (ลดขนาดตัวอักษร) */
      .pm-title{
        margin: 0;
        font-weight: 900;
        font-size: clamp(22px, 3vw, 36px);
        line-height: 1.15;
        color: rgba(15,23,42,.95);
      }
      .pm-sub{
        margin: 8px 0 0;
        font-size: 14px;
        font-weight: 700;
        color: rgba(15,23,42,.55);
      }

      /* Tags row */
      .pm-tags{
        margin-top: 14px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
      }
      .pm-tag{
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 7px 12px;
        border-radius: 999px;
        border: 1px solid rgba(15,23,42,.14);
        background: rgba(255,255,255,.78);
        font-size: 13px;
        font-weight: 800;
        color: rgba(15,23,42,.88);
      }

      /* Detail box */
      .pm-box{
        margin-top: 14px;
        border-radius: 16px;
        border: 1px solid rgba(15,23,42,.10);
        background: rgba(255,255,255,.78);
        padding: 14px;
      }
      .pm-box-head{
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        margin-bottom: 10px;
        color: rgba(15,23,42,.92);
      }
      .pm-detail{
        font-size: 14px;
        line-height: 1.75;
        color: rgba(15,23,42,.90);
      }
      .pm-list{
        margin: 10px 0 0;
        padding-left: 18px;
      }
      .pm-list li{ margin: 6px 0; }

      /* Mobile padding so text doesn't stick to edge */
      @media (max-width: 520px){
        .policy-modal{ border-radius: 18px; }
        .policy-modal-inner{ padding: 18px; }
      }
    `;
    document.head.appendChild(style);
  })();

  // ---------- Modal mount ----------
  const overlay = document.createElement("div");
  overlay.className = "policy-modal-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div class="policy-modal" role="dialog" aria-modal="true" aria-label="รายละเอียดนโยบาย">
      <button class="policy-modal-close" id="policyModalClose" aria-label="ปิด">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div class="policy-modal-inner">
        <h2 class="pm-title" id="pmTitle"></h2>
        <p class="pm-sub" id="pmSub"></p>

        <!-- tags อยู่ด้านบนข้อความ “อ่านรายละเอียด/รายละเอียด” -->
        <div class="pm-tags" id="pmTags"></div>

        <div class="pm-box">
          <div class="pm-box-head">
            <i class="fa-regular fa-file-lines"></i>
            <span>รายละเอียด</span>
          </div>
          <div class="pm-detail" id="pmDetail"></div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const closeBtn = overlay.querySelector("#policyModalClose");
  const pmTitle = overlay.querySelector("#pmTitle");
  const pmSub = overlay.querySelector("#pmSub");
  const pmTags = overlay.querySelector("#pmTags");
  const pmDetail = overlay.querySelector("#pmDetail");

  function openModal(p) {
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    pmTitle.textContent = p.title || "";
    pmSub.textContent = p.shortDesc || "";

    pmTags.innerHTML = (p.tags || [])
      .map(
        (t) =>
          `<span class="pm-tag"><i class="fa-solid fa-tag"></i> ${esc(t)}</span>`,
      )
      .join("");

    pmDetail.innerHTML = toDetailHTML(p.detail);

    setTimeout(() => closeBtn.focus(), 0);
  }

  function closeModal() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  // ปิดเมื่อคลิกนอกกล่อง
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
  });

  // ---------- Filters ----------
  function renderFilters() {
    if (!filtersEl) return;

    const items = ["ทั้งหมด", ...allTags];
    filtersEl.innerHTML = items
      .map((t) => {
        const isActive = t === activeTag ? "is-active" : "";
        return `
          <button class="filter-chip ${isActive}" data-tag="${esc(t)}" type="button">
            ${esc(t)}
          </button>
        `;
      })
      .join("");
  }

  filtersEl?.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    activeTag = btn.getAttribute("data-tag") || "ทั้งหมด";
    renderFilters();
    renderGrid();
  });

  // ---------- Grid (การ์ดหน้าเดิม ไม่แตะ) ----------
  function renderGrid() {
    const list =
      activeTag === "ทั้งหมด"
        ? POLICIES
        : POLICIES.filter((p) => (p.tags || []).includes(activeTag));

    root.innerHTML = `
      <div class="policies-grid">
        ${list
          .map(
            (p) => `
            <article class="policy-card" data-id="${esc(p.id)}" tabindex="0" role="button"
              aria-label="เปิดรายละเอียด ${esc(p.title)}">
              <div class="policy-card-top">
                <h3 class="policy-title">${esc(p.title)}</h3>
                <div class="policy-tags">
                  ${(p.tags || [])
                    .slice(0, 4)
                    .map((t) => `<span class="tag-chip">${esc(t)}</span>`)
                    .join("")}
                </div>
              </div>

              <p class="policy-short">${esc(p.shortDesc)}</p>

              <div class="policy-more">
                อ่านรายละเอียด <i class="fa-solid fa-arrow-right"></i>
              </div>
            </article>
          `,
          )
          .join("")}
      </div>
    `;
  }

  // click -> open
  root.addEventListener("click", (e) => {
    const card = e.target.closest(".policy-card");
    if (!card) return;
    const id = card.getAttribute("data-id");
    const p = POLICIES.find((x) => x.id === id);
    if (p) openModal(p);
  });

  // enter/space -> open
  root.addEventListener("keydown", (e) => {
    const card = e.target.closest(".policy-card");
    if (!card) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const id = card.getAttribute("data-id");
      const p = POLICIES.find((x) => x.id === id);
      if (p) openModal(p);
    }
  });

  // init
  renderFilters();
  renderGrid();
})();
