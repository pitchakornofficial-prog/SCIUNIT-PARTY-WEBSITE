// =========================
// WHY-US DATA
// =========================
const reasonsData = [
  {
    title: "โปร่งใส ตรวจสอบได้",
    shortDesc: "อธิบายกลไกหรือแนวคิดด้านความโปร่งใส",
    detail: `อธิบายกลไกหรือแนวคิดด้านความโปร่งใส เช่น
• เปิดเผยการทำงานและการตัดสินใจ
• รับฟังเสียงนักศึกษาและสรุปผลการดำเนินงาน
• ตรวจสอบได้และมีหลักฐานชัดเจน`,
    image: "",
  },
  {
    title: "ทำได้จริง วัดผลได้",
    shortDesc: "ใส่ตัวอย่างแผนงานที่ชัดเจนและมีตัวชี้วัด",
    detail: `ใส่ตัวอย่างแผนงานที่ชัดเจนและมีตัวชี้วัด เช่น
• มีเป้าหมายเป็นรูปธรรม
• มีระยะเวลาและขั้นตอน
• มีวิธีติดตามผลและรายงานความคืบหน้า`,
    image: "",
  },
  {
    title: "เราเข้าใจนักศึกษาจริง",
    shortDesc: "SCI UNIT เกิดจากนักศึกษาคณะวิทยาศาสตร์ที่ล้วนแต่มีประสบการณ์",
    detail:
      "SCI UNIT เกิดจากนักศึกษาคณะวิทยาศาสตร์ที่ล้วนแต่มีประสบการณ์ เรารู้ว่าปัญหาอยู่ตรงไหน ความต้องการคืออะไร และเราพร้อมเป็นเสียงแทนทุกคนอย่างเท่าเทียม",
    image: "",
  },
  {
    title: "เราจะไม่ทิ้งใครไว้ข้างหลัง",
    shortDesc: "ไม่ว่านักศึกษากยศ. รวมถึงนักศึกษาที่ต้องการพื้นที่ในการแสดงออก",
    detail:
      "ไม่ว่านักศึกษากยศ. รวมถึงนักศึกษาที่ต้องการพื้นที่ในการแสดงออก หรือคนที่ไม่เคยมีพื้นที่พูด SCI UNIT จะเป็นพื้นที่ของทุกคน",
  },
  {
    title: "เราสร้างการเปลี่ยนแปลงไม่ใช่แค่สัญญา",
    shortDesc: "นโยบายของเราเน้น ทำเพื่อนักศึกษา ความปลอดภัย",
    detail: `นโยบายของเราเน้น
• ทำเพื่อนักศึกษา
• ความปลอดภัย
• สร้างโอกาส
• พื้นที่แสดงความคิดเห็น
• การพัฒนานักศึกษาอย่างรอบด้าน`,
    image: "",
  },
];

// tags ของการ์ดเหตุผล (ปรับได้)
const TAGS_BY_INDEX = {
  0: ["โปร่งใส", "ตรวจสอบได้"],
  1: ["วัดผลได้"],
  2: ["เสียงนักศึกษา", "ความเท่าเทียม"],
  3: ["เสียงนักศึกษา", "กยศ.", "ความเท่าเทียม"],
  4: ["เสียงนักศึกษา", "ความปลอดภัย", "สร้างโอกาส"],
};

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
// RENDER REASONS (2 columns)
// =========================
// =========================
// RENDER REASONS (2 columns)
// =========================
(function renderWhyUs() {
  const root = document.getElementById("why-root");
  if (!root) return;

  root.innerHTML = reasonsData
    .map((r, idx) => {
      const tags = TAGS_BY_INDEX[idx] || [];

      // ✅ TAG อยู่ด้านบนสุดของการ์ด
      const tagsHtml =
        tags.length > 0
          ? `
            <div class="why-tags why-tags-top">
              ${tags
                .map(
                  (t) =>
                    `<span class="why-tag"><i class="fa-solid fa-tag"></i> ${esc(
                      t,
                    )}</span>`,
                )
                .join("")}
            </div>
          `
          : "";

      return `
        <article class="why-card" data-idx="${idx}" tabindex="0" role="button" aria-label="อ่านรายละเอียด ${esc(
          r.title,
        )}">
          
          ${tagsHtml}

          <h3 class="why-title">${esc(r.title)}</h3>
          <p class="why-desc">${esc(r.shortDesc)}</p>

          <div class="why-footer">
            <a class="why-more" href="javascript:void(0)">
              อ่านรายละเอียด <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

        </article>
      `;
    })
    .join("");

  // click/keyboard open modal
  root.addEventListener("click", (e) => {
    const card = e.target.closest(".why-card");
    if (!card) return;
    const idx = Number(card.dataset.idx);
    openReasonModal(idx);
  });

  root.addEventListener("keydown", (e) => {
    const card = e.target.closest(".why-card");
    if (!card) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const idx = Number(card.dataset.idx);
      openReasonModal(idx);
    }
  });
})();

// =========================
// MODAL for reason detail
// =========================
let reasonOverlay = null;

function mountReasonModalOnce() {
  if (reasonOverlay) return;

  reasonOverlay = document.createElement("div");
  reasonOverlay.className = "modal-overlay";
  reasonOverlay.innerHTML = `
  <div class="modal" role="dialog" aria-modal="true">
    <div class="modal-inner" id="reasonModalInner">
      <!-- modal-left จะถูกใส่ทีหลัง ถ้ามีรูป -->
      <div class="modal-right" id="reasonModalRight">
        <button class="modal-close" id="reasonClose" aria-label="ปิด">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div class="modal-title">
          <h2 class="big" id="reasonTitle"></h2>
          <p class="sub" id="reasonSub"></p>
        </div>

        <div class="info-block">
          <h4><i class="fa-regular fa-file-lines"></i> รายละเอียด</h4>
          <div id="reasonDetail"></div>
        </div>
      </div>
    </div>
  </div>
`;

  document.body.appendChild(reasonOverlay);

  const closeBtn = reasonOverlay.querySelector("#reasonClose");
  closeBtn.addEventListener("click", closeReasonModal);

  reasonOverlay.addEventListener("click", (e) => {
    if (e.target === reasonOverlay) closeReasonModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && reasonOverlay.classList.contains("open")) {
      closeReasonModal();
    }
  });
}

function openReasonModal(idx) {
  mountReasonModalOnce();

  const r = reasonsData[idx];
  if (!r) return;

  reasonOverlay.classList.add("open");
  document.body.style.overflow = "hidden";

  const inner = reasonOverlay.querySelector("#reasonModalInner");
  const right = reasonOverlay.querySelector("#reasonModalRight");

  // ล้าง modal-left เก่าก่อน
  inner.querySelector(".modal-left")?.remove();

  // ✅ ถ้ามีรูป → ใส่ฝั่งซ้าย
  if (r.image) {
    const left = document.createElement("div");
    left.className = "modal-left";
    left.innerHTML = `
      <img src="${r.image}" alt="${r.title}" />
    `;
    inner.prepend(left);

    inner.style.gridTemplateColumns = "420px 1fr";
  } else {
    // ❌ ไม่มีรูป → ใช้คอลัมน์เดียว
    inner.style.gridTemplateColumns = "1fr";
  }

  reasonOverlay.querySelector("#reasonTitle").textContent = r.title || "";
  reasonOverlay.querySelector("#reasonSub").textContent = r.shortDesc || "";
  reasonOverlay.querySelector("#reasonDetail").innerHTML = nl2br(
    r.detail || "-",
  );

  setTimeout(() => reasonOverlay.querySelector("#reasonClose")?.focus(), 0);
}

function closeReasonModal() {
  if (!reasonOverlay) return;
  reasonOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

// =========================
// MINIGAME CARD (append to top slot)
// ใช้โค้ดมินิเกมส์ของคุณ แต่ "ไม่แตะสีส้ม" และวางการ์ดไว้บนสุด
// =========================
(() => {
  const SLOT_ID = "why-minigame-slot";
  const CARD_ID = "minigameWhyUsCard";
  const MODAL_ID = "minigameWhyUsModal";

  // ====== CONFIG ======
  const VALUES = {
    transparency: "โปร่งใส ตรวจสอบได้",
    practical: "ทำได้จริง วัดผลได้",
    studentVoice: "เข้าใจนักศึกษาจริง",
    inclusion: "ไม่ทิ้งใครไว้ข้างหลัง",
  };

  const QUESTIONS = [
    {
      tag: "การสื่อสาร",
      title: "ถ้าพรรคสัญญาไว้ คุณอยากเห็นอะไรที่สุด?",
      choices: [
        {
          title: "อัปเดตความคืบหน้าให้เห็นชัด",
          desc: "ทำถึงไหนแล้ว มีหลักฐาน ตรวจสอบได้",
          score: { transparency: 2, practical: 1 },
        },
        {
          title: "ทำจริงให้เห็นผล",
          desc: "มีตัวชี้วัด งานไม่ค้าง",
          score: { practical: 2 },
        },
        {
          title: "รับฟังและตอบกลับจริง",
          desc: "มีช่องทางเสนอปัญหา และติดตามได้",
          score: { studentVoice: 2, inclusion: 1 },
        },
      ],
    },
    {
      tag: "กิจกรรม",
      title: "กิจกรรมแบบไหนที่คุณรู้สึกว่า ‘ใช่’ สำหรับคณะ?",
      choices: [
        {
          title: "เข้าถึงง่าย ไม่ทับตารางเรียน",
          desc: "ทุกสาขามีโอกาสเข้าร่วม",
          score: { inclusion: 2, practical: 1 },
        },
        {
          title: "พัฒนาทักษะจริง",
          desc: "เวิร์กช็อป/แนะแนว ที่ต่อยอดได้",
          score: { practical: 2 },
        },
        {
          title: "เปิดให้เสนอไอเดียร่วมกัน",
          desc: "อยากให้เสียงนักศึกษามีส่วนร่วม",
          score: { studentVoice: 2, inclusion: 1 },
        },
      ],
    },
    {
      tag: "การแก้ปัญหา",
      title: "ถ้าเจอปัญหาในคณะ คุณคาดหวังอะไรจากพรรค?",
      choices: [
        {
          title: "รวบรวมปัญหาเป็นระบบ แล้วผลักดันต่อ",
          desc: "จัดหมวดหมู่ ชี้ฝ่ายที่เกี่ยวข้องให้ชัด",
          score: { practical: 2, studentVoice: 1 },
        },
        {
          title: "ติดตามเรื่องแบบโปร่งใส",
          desc: "รู้ว่าเรื่องไปถึงไหนแล้ว",
          score: { transparency: 2 },
        },
        {
          title: "ไม่ทิ้งใครไว้ข้างหลัง",
          desc: "ดูแลทั้งคนเก่งและคนที่ต้องการพื้นที่",
          score: { inclusion: 2 },
        },
      ],
    },
    {
      tag: "ทีมเวิร์ก",
      title: "คุณคิดว่า ‘ทีมที่ดี’ ควรเป็นแบบไหน?",
      choices: [
        {
          title: "ทำงานเป็นระบบ แบ่งหน้าที่ชัด",
          desc: "งานเดินต่อได้จริง",
          score: { practical: 2 },
        },
        {
          title: "สื่อสารตรงไปตรงมา ตรวจสอบได้",
          desc: "ไม่พูดลอย ๆ",
          score: { transparency: 2, practical: 1 },
        },
        {
          title: "รับฟังกันและกัน",
          desc: "ให้ทุกคนมีส่วนร่วมจริง",
          score: { studentVoice: 2, inclusion: 1 },
        },
      ],
    },
    {
      tag: "ความคาดหวัง",
      title: "ถ้าเลือกได้ 1 อย่าง คุณอยากเห็นอะไรในคณะมากที่สุด?",
      choices: [
        {
          title: "โอกาสที่เข้าถึงได้สำหรับทุกคน",
          desc: "ไม่ว่าอยู่สาขาไหนก็มีทาง",
          score: { inclusion: 2, studentVoice: 1 },
        },
        {
          title: "งานที่ทำได้จริงและวัดผลได้",
          desc: "เห็นผลเป็นรูปธรรม",
          score: { practical: 2, transparency: 1 },
        },
        {
          title: "การทำงานที่โปร่งใส",
          desc: "ติดตามได้ ตรวจสอบได้",
          score: { transparency: 2 },
        },
      ],
    },
  ];

  const esc2 = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function injectStylesOnce() {
    if (document.getElementById("minigameWhyUsStyles")) return;

    const style = document.createElement("style");
    style.id = "minigameWhyUsStyles";
    style.textContent = `
      /* การ์ดมินิเกมส์: ใช้ธีมเดียวกับเว็บ (ไม่ใช้ส้ม) */
      #${CARD_ID} {
        border-radius: 18px;
        padding: 18px;
        border: 1px solid rgba(15,23,42,0.06);
        box-shadow: 0 10px 24px rgba(2,6,23,0.06);
        background: rgba(255,255,255,0.88);
      }
      #${CARD_ID} .mg-badge {
        display: inline-flex;
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 900;
        background: rgba(15,23,42,0.06);
        border: 1px solid rgba(15,23,42,0.10);
        color: rgba(15,23,42,0.82);
        width: fit-content;
        margin-bottom: 10px;
      }
      #${CARD_ID} .mg-cta {
        font-weight: 900;
        margin-top: 10px;
        color: var(--active);
      }

      /* Modal */
      #${MODAL_ID} { position: fixed; inset: 0; z-index: 9999; }
      #${MODAL_ID}[hidden] { display: none; }
      #${MODAL_ID} .mg-backdrop { position:absolute; inset:0; background: rgba(2,6,23,0.55); backdrop-filter: blur(6px); }
      #${MODAL_ID} .mg-panel {
        position: relative;
        width: min(980px, 94vw);
        height: min(760px, 88vh);
        margin: 6vh auto 0;
        background: rgba(255,255,255,0.94);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 24px 70px rgba(2,6,23,0.35);
        display: grid;
        grid-template-rows: auto 1fr;
        border: 1px solid rgba(15,23,42,0.10);
      }
      #${MODAL_ID} .mg-top {
        display:flex; align-items:center; justify-content:space-between; gap:12px;
        padding: 12px 14px;
        border-bottom: 1px solid rgba(15,23,42,0.08);
        background: rgba(255,255,255,0.96);
      }
      #${MODAL_ID} .mg-title { margin:0; font-size:14px; font-weight:900; }
      #${MODAL_ID} .mg-sub { margin:2px 0 0; font-size:12px; opacity:.7; }
      #${MODAL_ID} .mg-close {
        width: 40px; height: 40px; border-radius: 999px;
        border: 1px solid rgba(15,23,42,0.10);
        background: rgba(15,23,42,0.06);
        cursor: pointer;
        font-weight: 900;
      }
      #${MODAL_ID} .mg-body { padding: 14px; overflow:auto; }

      /* Game UI */
      #${MODAL_ID} .mg-progress { display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:12px; }
      #${MODAL_ID} .mg-pill {
        padding: 6px 10px; border-radius: 999px;
        border: 1px solid rgba(15,23,42,0.10);
        background: rgba(15,23,42,0.04);
        font-size: 12px; font-weight: 900;
      }
      #${MODAL_ID} .mg-bar {
        flex:1; height:10px; border-radius:999px; overflow:hidden;
        border: 1px solid rgba(15,23,42,0.10);
        background: rgba(15,23,42,0.05);
      }
      #${MODAL_ID} .mg-fill { height:100%; width:0%; background: rgba(15,23,42,0.65); transition: width 200ms ease; }

      #${MODAL_ID} .mg-qtag {
        display:inline-flex; padding:6px 10px; border-radius:999px;
        font-size:12px; font-weight:900;
        background: rgba(15,23,42,0.06);
        border: 1px solid rgba(15,23,42,0.10);
        width: fit-content;
        margin-bottom: 10px;
      }
      #${MODAL_ID} .mg-qtitle { margin:0 0 6px; font-size:18px; font-weight:900; }
      #${MODAL_ID} .mg-qsub { margin:0 0 12px; font-size:13px; opacity:.75; }

      #${MODAL_ID} .mg-choices { display:grid; gap:10px; }
      #${MODAL_ID} .mg-choice {
        text-align:left;
        border: 1px solid rgba(15,23,42,0.10);
        background: #fff;
        padding: 12px;
        border-radius: 14px;
        cursor:pointer;
        box-shadow: 0 6px 18px rgba(2,6,23,0.10);
        transition: transform 140ms ease, box-shadow 140ms ease, background 140ms ease;
      }
      #${MODAL_ID} .mg-choice:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(2,6,23,0.14);
        background: rgba(11,58,119,0.06);
      }
      #${MODAL_ID} .mg-choice .t { font-weight:900; margin-bottom:4px; }
      #${MODAL_ID} .mg-choice .d { font-size:13px; opacity:.8; line-height:1.35; }

      #${MODAL_ID} .mg-actions { display:flex; justify-content:space-between; gap:10px; margin-top:12px; flex-wrap:wrap; }
      #${MODAL_ID} .mg-btn {
        border: 1px solid rgba(15,23,42,0.10);
        background: rgba(15,23,42,0.04);
        padding: 10px 12px;
        border-radius: 12px;
        cursor:pointer;
        font-weight: 900;
        box-shadow: 0 6px 16px rgba(2,6,23,0.10);
        transition: transform 140ms ease, box-shadow 140ms ease, background 140ms ease;
      }
      #${MODAL_ID} .mg-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 22px rgba(2,6,23,0.14); background: rgba(15,23,42,0.06); }
      #${MODAL_ID} .mg-btn.primary {
        border: 0;
        background: var(--active);
        color: #fff;
        box-shadow: 0 12px 28px rgba(11,58,119,0.22);
      }

      #${MODAL_ID} .mg-result {
        border: 1px solid rgba(15,23,42,0.10);
        background: rgba(15,23,42,0.03);
        padding: 12px;
        border-radius: 14px;
      }

      body.mg-lock { overflow: hidden; }
    `;
    document.head.appendChild(style);
  }

  function createQuizCard() {
    const card = document.createElement("article");
    card.id = CARD_ID;
    card.className = "why-card why-minigame";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "เปิดแบบทดสอบ 60 วิ");

    card.innerHTML = `
      <div class="mg-badge"><i class="fa-solid fa-gamepad"></i>&nbsp; แบบทดสอบ 60 วิ</div>
      <h3 style="margin:0 0 6px; font-weight:900; font-size:18px;">
        ลองทำแบบทดสอบดูว่า “คุณให้ความสำคัญกับอะไร?”
      </h3>
      <p style="margin:0; opacity:.85; line-height:1.55;">
        ตอบสั้น ๆ 5 ข้อ แล้วดูผลว่าแนวคิดคุณตรงกับ SCI UNIT แค่ไหน
      </p>
      <div class="mg-cta">กดเพื่อเริ่ม <i class="fa-solid fa-arrow-right"></i></div>
    `;
    return card;
  }

  function createModal() {
    if (document.getElementById(MODAL_ID)) return;

    const modal = document.createElement("div");
    modal.id = MODAL_ID;
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
      <div class="mg-backdrop" data-close="1"></div>
      <div class="mg-panel" role="dialog" aria-modal="true" aria-label="แบบทดสอบ 60 วิ">
        <div class="mg-top">
          <div>
            <p class="mg-title">แบบทดสอบ 60 วิ</p>
            <p class="mg-sub">ตอบ 5 ข้อ แล้วดูผลลัพธ์ของคุณ</p>
          </div>
          <button class="mg-close" type="button" data-close="1" aria-label="ปิด">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="mg-body">
          <div id="mgApp"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // ===== Game State =====
  let step = 0;
  let answers = [];
  let totals = {};

  function resetState() {
    step = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    totals = Object.fromEntries(Object.keys(VALUES).map((k) => [k, 0]));
  }

  function pct() {
    const done = answers.filter(Boolean).length;
    return QUESTIONS.length ? (done / QUESTIONS.length) * 100 : 0;
  }

  function applyScore(score, sign) {
    for (const [k, v] of Object.entries(score)) totals[k] += v * sign;
  }

  function renderApp() {
    const app = document.getElementById("mgApp");
    if (!app) return;

    const q = QUESTIONS[step];
    const progress = `
      <div class="mg-progress">
        <div class="mg-pill">ข้อ ${step + 1}/${QUESTIONS.length}</div>
        <div class="mg-bar"><div class="mg-fill" style="width:${pct()}%"></div></div>
      </div>
    `;

    app.innerHTML = `
      ${progress}
      <div class="mg-qtag">${esc2(q.tag)}</div>
      <h2 class="mg-qtitle">${esc2(q.title)}</h2>
      <p class="mg-qsub">เลือกคำตอบที่ใกล้ตัวคุณที่สุด</p>
      <div class="mg-choices">
        ${q.choices
          .map(
            (c, idx) => `
          <button class="mg-choice" type="button" data-choose="${idx}">
            <div class="t">${esc2(c.title)}</div>
            <div class="d">${esc2(c.desc)}</div>
          </button>
        `,
          )
          .join("")}
      </div>
      <div class="mg-actions">
        <button class="mg-btn" type="button" data-back="1" ${
          step === 0 ? "disabled" : ""
        }>ย้อนกลับ</button>
        <button class="mg-btn" type="button" data-skip="1">ข้าม</button>
      </div>
    `;

    app.querySelectorAll("[data-choose]").forEach((btn) => {
      btn.addEventListener("click", () => choose(Number(btn.dataset.choose)));
    });
    app.querySelector("[data-back]")?.addEventListener("click", back);
    app.querySelector("[data-skip]")?.addEventListener("click", skip);
  }

  function showResult() {
    const app = document.getElementById("mgApp");
    if (!app) return;

    const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    const top3 = sorted.slice(0, 3).filter(([, v]) => v > 0);

    const lead =
      top3.length === 0
        ? "คุณข้ามหลายข้อ—ลองเล่นใหม่อีกครั้งเพื่อให้ผลลัพธ์ตรงกับตัวคุณมากขึ้น"
        : "จากคำตอบของคุณ แนวคิดของคุณสอดคล้องกับแนวทางของ SCI UNIT ในหลายมุม";

    const reasons = [];
    if ((totals.transparency || 0) >= 3)
      reasons.push("คุณชอบความโปร่งใส — เราเน้นตรวจสอบได้และสื่อสารชัดเจน");
    if ((totals.practical || 0) >= 3)
      reasons.push(
        "คุณชอบงานที่ทำได้จริง — เรามุ่งเน้นผลลัพธ์และความเป็นรูปธรรม",
      );
    if ((totals.studentVoice || 0) >= 3)
      reasons.push(
        "คุณให้ความสำคัญกับเสียงนักศึกษา — เราเน้นรับฟังและตอบกลับจริง",
      );
    if ((totals.inclusion || 0) >= 3)
      reasons.push(
        "คุณไม่อยากให้ใครถูกทิ้งไว้ข้างหลัง — เราออกแบบให้ทุกคนเข้าถึงได้",
      );

    if (reasons.length === 0) {
      reasons.push(
        "คำตอบของคุณหลากหลาย — เราอยากเปิดพื้นที่รับฟังเพื่อออกแบบงานให้ตรงกับทุกคน",
      );
    }

    app.innerHTML = `
      <div class="mg-result">
        <h3 style="margin:0 0 6px; font-weight:900;">ผลลัพธ์ของคุณ</h3>
        <p style="margin:0 0 12px; opacity:.8;">${esc2(lead)}</p>

        <h4 style="margin:0 0 8px; font-weight:900;">คุณให้ความสำคัญกับ</h4>
        <ul style="margin:0; padding-left:18px;">
          ${
            top3.length === 0
              ? "<li>ยังไม่พอข้อมูล</li>"
              : top3
                  .map(([k, v]) => `<li>${esc2(VALUES[k])} (คะแนน ${v})</li>`)
                  .join("")
          }
        </ul>

        <h4 style="margin:12px 0 8px; font-weight:900;">ทำไม SCI UNIT ถึงเข้ากับคุณ</h4>
        <ul style="margin:0; padding-left:18px;">
          ${reasons.map((r) => `<li>${esc2(r)}</li>`).join("")}
        </ul>

        <div class="mg-actions" style="margin-top:12px;">
          <button class="mg-btn primary" type="button" data-restart="1">เล่นใหม่</button>
          <button class="mg-btn" type="button" data-close="1">ปิด</button>
        </div>
      </div>
    `;

    app.querySelector("[data-restart]")?.addEventListener("click", () => {
      resetState();
      renderApp();
    });
    app
      .querySelectorAll("[data-close]")
      .forEach((el) => el.addEventListener("click", closeModal));
  }

  function choose(idx) {
    const q = QUESTIONS[step];
    if (answers[step]) applyScore(answers[step].score, -1);

    const chosen = q.choices[idx];
    answers[step] = chosen;
    applyScore(chosen.score, +1);
    next();
  }

  function next() {
    if (step < QUESTIONS.length - 1) {
      step += 1;
      renderApp();
      return;
    }
    showResult();
  }

  function back() {
    if (step === 0) return;
    step -= 1;
    renderApp();
  }

  function skip() {
    next();
  }

  function openModal() {
    const modal = document.getElementById(MODAL_ID);
    if (!modal) return;

    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("mg-lock");

    resetState();
    renderApp();
  }

  function closeModal() {
    const modal = document.getElementById(MODAL_ID);
    if (!modal) return;

    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("mg-lock");
  }

  function bindModalCloseEvents() {
    const modal = document.getElementById(MODAL_ID);
    if (!modal) return;

    modal.addEventListener("click", (e) => {
      const target = e.target.closest("[data-close]");
      if (target) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      const m = document.getElementById(MODAL_ID);
      if (e.key === "Escape" && m && !m.hidden) closeModal();
    });
  }

  function appendMinigameToTop() {
    const slot = document.getElementById(SLOT_ID);
    if (!slot) return;

    if (document.getElementById(CARD_ID)) return;

    const card = createQuizCard();
    slot.appendChild(card);

    card.addEventListener("click", openModal);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal();
      }
    });
  }

  function init() {
    injectStylesOnce();
    createModal();
    bindModalCloseEvents();
    appendMinigameToTop();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
