// js/countdown.js
(function initCountdown() {
  const placeholder = document.getElementById("countdown-placeholder");
  if (!placeholder) return;

  // ใช้สไตล์การ์ดเดียวกับหน้าแรก (home-card wide)
  placeholder.innerHTML = `
    <article class="home-card wide countdown-card" id="countdownCard">
      <h3 style="margin:0 0 6px; font-weight:900;">นับถอยหลังวันเลือกตั้ง</h3>
      <p class="countdown-sub" style="margin:0 0 12px;">เหลือเวลาอีก</p>

      <div class="countdown-box">
        <div class="cd-item">
          <div class="cd-num" id="cdDays">0</div>
          <div class="cd-label">วัน</div>
        </div>
        <div class="cd-item">
          <div class="cd-num" id="cdHours">00</div>
          <div class="cd-label">ชั่วโมง</div>
        </div>
        <div class="cd-item">
          <div class="cd-num" id="cdMins">00</div>
          <div class="cd-label">นาที</div>
        </div>
        <div class="cd-item">
          <div class="cd-num" id="cdSecs">00</div>
          <div class="cd-label">วินาที</div>
        </div>
      </div>

      <p class="countdown-note" id="cdNote" style="margin:12px 0 0;">กำลังโหลด...</p>
    </article>
  `;

  const ELECTION_DATE = "2026-02-27T09:00:00+07:00";

  const daysEl = document.getElementById("cdDays");
  const hoursEl = document.getElementById("cdHours");
  const minsEl = document.getElementById("cdMins");
  const secsEl = document.getElementById("cdSecs");
  const noteEl = document.getElementById("cdNote");
  const box = document.getElementById("countdownCard");

  const target = new Date(ELECTION_DATE).getTime();
  const pad2 = (n) => String(n).padStart(2, "0");

  const formatThaiDate = (ms) => {
    const opts = { year: "numeric", month: "long", day: "numeric" };
    return new Date(ms).toLocaleDateString("th-TH", opts);
  };

  if (noteEl) {
    noteEl.textContent = `วันเลือกตั้ง : ${formatThaiDate(
      target,
    )} 09:00 น. - 17:00 น.`;
  }

  let prev = { d: "", h: "", m: "", s: "" };

  const popIfChanged = (el, next, key) => {
    if (!el) return;
    if (prev[key] !== next) {
      el.textContent = next;
      el.classList.remove("pop");
      void el.offsetWidth; // reflow
      el.classList.add("pop");
      prev[key] = next;
    }
  };

  const tick = () => {
    const now = Date.now();
    let diff = target - now;

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = "0";
      if (hoursEl) hoursEl.textContent = "00";
      if (minsEl) minsEl.textContent = "00";
      if (secsEl) secsEl.textContent = "00";
      if (noteEl) noteEl.textContent = "ถึงวันเลือกตั้งแล้ว";
      if (box) box.classList.remove("urgent");
      return;
    }

    const sec = Math.floor(diff / 1000);
    const days = Math.floor(sec / (24 * 3600));
    const hours = Math.floor((sec % (24 * 3600)) / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    popIfChanged(daysEl, String(days), "d");
    popIfChanged(hoursEl, pad2(hours), "h");
    popIfChanged(minsEl, pad2(mins), "m");
    popIfChanged(secsEl, pad2(secs), "s");

    if (box) {
      if (days < 3) box.classList.add("urgent");
      else box.classList.remove("urgent");
    }
  };

  tick();
  setInterval(tick, 1000);
})();
