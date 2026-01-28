// js/index.js
(function () {
  // =========================
  // DATA (แก้ข้อความได้ที่นี่)
  // =========================
  const HOME_DATA = {
    who: {
      title: "SCI UNIT คือใคร",
      desc: `เราคือกลุ่มนักศึกษาที่รวมตัวกันเพื่อพัฒนาคณะวิทยาศาสตร์
ทำงานอย่างโปร่งใส และรับฟังทุกเสียงของนักศึกษา`,
      buttonText: "ทำความรู้จักพรรค",
      buttonHref: "about.html",
    },

    stance: {
      title: "จุดยืนของเรา",
      items: [
        {
          icon: "fa-solid fa-shield-halved",
          head: "โปร่งใส ตรวจสอบได้",
          sub: "ทุกการทำงานมีเหตุผลและรายงานได้",
        },
        {
          icon: "fa-solid fa-ear-listen",
          head: "รับฟังเสียงนักศึกษา",
          sub: "เปิดพื้นที่ให้ทุกคนเสนอปัญหา/แนวคิด",
        },
        {
          icon: "fa-solid fa-bolt",
          head: "พร้อมลงมือทำจริง",
          sub: "ทำได้จริง วัดผลได้ ไม่ขายฝัน",
        },
        {
          icon: "fa-solid fa-diagram-project",
          head: "พัฒนาอย่างเป็นระบบ",
          sub: "วางแผนเป็นขั้นตอน ทำต่อเนื่อง",
        },
      ],
    },

    teaser: {
      title: "นโยบายเด่นที่อยากทำทันที",
      items: [
        "ช่องทางรับเรื่อง/ปัญหานักศึกษาแบบชัดเจนและติดตามได้",
        "สรุปข่าวสาร/ประกาศสำคัญของคณะให้อ่านง่ายขึ้น",
        "สนับสนุนกิจกรรมและพื้นที่ของนักศึกษามากขึ้น",
      ],
      buttonText: "ดูนโยบายทั้งหมด",
      buttonHref: "policies.html",
    },

    team: {
      title: "ทีมงานของเรา",
      // เพิ่มรายละเอียดตามที่ขอ
      desc: `ทีมของเราเป็นนักศึกษาคณะวิทยาศาสตร์จากหลายสาขา
แบ่งหน้าที่ชัดเจน ทำงานต่อเนื่อง และพร้อมรับฟังข้อเสนอแนะเพื่อปรับปรุงตลอดเวลา`,
      statsMode: true,
      stats: [
        { head: "สมาชิก", sub: "หลายคนร่วมกันทำงาน" },
        { head: "หลากหลายสาขา", sub: "ช่วยกันมองปัญหารอบด้าน" },
        { head: "ทำงานเป็นทีม", sub: "แบ่งหน้าที่ชัด ทำต่อเนื่อง" },
      ],
      buttonText: "ดูทีมงาน",
      buttonHref: "members.html",
    },

    finalCta: {
      title: "คุณอยากให้คณะวิทยาศาสตร์ดีขึ้นแบบไหน?",
      desc: "คุยกับแชทบอทเพื่อดูข้อมูลเบื้องต้น หรือหาเมนูที่คุณต้องการได้เร็วขึ้น",
      // ลบ “ส่งความคิดเห็น” ออกตามที่ขอ
      onlyText: "คุยกับแชทบอท",
      onlyHref: "chatbot.html",
    },
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

  const nl2br = (s) => esc(s).replaceAll("\n", "<br>");

  // =========================
  // RENDER HELPERS
  // =========================
  function renderWho(data) {
    const el = document.getElementById("homeWho");
    if (!el) return;

    el.innerHTML = `
      <div class="home-block">
        <div class="home-block-head">
          <h2 class="home-h2">${esc(data.title)}</h2>
        </div>

        <div class="home-card wide">
          <p class="home-p">${nl2br(data.desc)}</p>
          <a class="home-link" href="${esc(data.buttonHref)}">
            ${esc(data.buttonText)} <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
  }

  function renderStance(data) {
    const el = document.getElementById("homeStance");
    if (!el) return;

    el.innerHTML = `
      <div class="home-block">
        <div class="home-block-head">
          <h2 class="home-h2">${esc(data.title)}</h2>
        </div>

        <div class="home-grid4">
          ${(data.items || [])
            .map(
              (it) => `
              <article class="home-mini-card">
                <div class="home-mini-ico"><i class="${esc(it.icon)}"></i></div>
                <div class="home-mini-text">
                  <div class="home-mini-head">${esc(it.head)}</div>
                  <div class="home-mini-sub">${esc(it.sub)}</div>
                </div>
              </article>
            `,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderTeaser(data) {
    const el = document.getElementById("homeTeaser");
    if (!el) return;

    el.innerHTML = `
      <div class="home-block">
        <div class="home-block-head">
          <h2 class="home-h2">${esc(data.title)}</h2>
        </div>

        <div class="home-card wide">
          <ul class="home-list">
            ${(data.items || [])
              .map(
                (t) =>
                  `<li><i class="fa-regular fa-circle-check"></i> ${esc(t)}</li>`,
              )
              .join("")}
          </ul>

          <a class="home-link" href="${esc(data.buttonHref)}">
            ${esc(data.buttonText)} <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
  }

  function renderTeam(data) {
    const el = document.getElementById("homeTeam");
    if (!el) return;

    const statsHtml = (data.stats || [])
      .map(
        (s) => `
        <div class="home-stat">
          <div class="home-stat-head">${esc(s.head)}</div>
          <div class="home-stat-sub">${esc(s.sub)}</div>
        </div>
      `,
      )
      .join("");

    el.innerHTML = `
      <div class="home-block">
        <div class="home-block-head">
          <h2 class="home-h2">${esc(data.title)}</h2>
        </div>

        <div class="home-card wide">
          <p class="home-p" style="margin:0 0 12px;">${nl2br(data.desc || "")}</p>

          ${
            data.statsMode
              ? `<div class="home-stats">${statsHtml}</div>`
              : `
                <div class="home-team-media">
                  <img class="home-team-img" src="${esc(
                    data.img,
                  )}" alt="${esc(data.imgCaption || "ทีมงาน")}" loading="lazy" />
                  <div class="home-team-cap">${esc(data.imgCaption || "")}</div>
                </div>
              `
          }

          <a class="home-link" href="${esc(data.buttonHref)}">
            ${esc(data.buttonText)} <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
  }

  function renderFinalCta(data) {
    const el = document.getElementById("homeFinalCta");
    if (!el) return;

    el.innerHTML = `
      <div class="home-cta-box">
        <div>
          <h2 class="home-h2" style="margin:0 0 6px;">${esc(data.title)}</h2>
          <p class="home-p" style="margin:0;">${esc(data.desc)}</p>
        </div>

        <div class="home-cta-actions">
          <a class="btn-ghost" href="${esc(data.onlyHref)}">
            ${esc(data.onlyText)} <i class="fa-solid fa-robot"></i>
          </a>
        </div>
      </div>
    `;
  }

  function renderAll() {
    renderWho(HOME_DATA.who);
    renderStance(HOME_DATA.stance);
    renderTeaser(HOME_DATA.teaser);
    renderTeam(HOME_DATA.team);
    renderFinalCta(HOME_DATA.finalCta);
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
  });
})();
