(function showChatbotDisclaimer() {
  const KEY = "sciunit_chatbot_disclaimer_seen";
  if (localStorage.getItem(KEY)) return;

  const overlay = document.createElement("div");
  overlay.className = "chat-disclaimer-overlay";
  overlay.innerHTML = `
    <div class="chat-disclaimer-modal" role="dialog" aria-modal="true">
      <h3>⚠️ แจ้งให้ทราบก่อนใช้งาน</h3>
      <p>
        หน้านี้เป็น <b>แชทบอทแบบเดโม่</b><br />
        ไม่ใช่ระบบ AI จริง<br /><br />
        คำตอบมาจากข้อมูลที่เตรียมไว้ล่วงหน้า
        อาจไม่ครบถ้วนหรือไม่ถูกต้อง 100%
      </p>

      <ul>
        <li>ใช้เพื่อให้ข้อมูลเบื้องต้นเท่านั้น</li>
        <li>หากต้องการความถูกต้อง กรุณาติดต่อพรรคโดยตรง</li>
      </ul>

      <button id="acceptChatbot">เข้าใจแล้ว</button>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById("acceptChatbot").addEventListener("click", () => {
    localStorage.setItem(KEY, "1");
    overlay.remove();
  });
})();

(function initChatbotPage() {
  const body = document.getElementById("chatBody");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatText");
  const suggest = document.getElementById("chatSuggest");
  const toggle = document.getElementById("chatToggle");
  const widget = document.getElementById("chatWidget");
  const clearBtn = document.getElementById("chatClear");

  if (!body || !form || !input || !suggest || !toggle || !widget) return;

  // ===== Knowledge (Demo) =====
  const knowledge = [
    {
      title: "นโยบายพรรค",
      keywords: ["นโยบาย", "policy", "ทำอะไร", "เป้าหมาย"],
      answer:
        "นโยบายหลัก (สรุป):\n• ส่งเสริมกิจกรรมและความสามัคคี\n• กิจกรรมจิตอาสาและ กยศ.\n• เสริมความกล้าแสดงออก\n• รับฟังทุกความคิดเห็น\n• สิทธิเสรีภาพและความเท่าเทียม\n• เพิ่มความปลอดภัยพื้นที่อ่านหนังสือ",
    },
    {
      title: "ทำไมต้องเลือกพรรคเรา",
      keywords: ["ทำไม", "ทำไมต้องเลือก", "เลือกเรา", "เหตุผล"],
      answer:
        "เหตุผลที่ SCI UNIT แตกต่าง:\n• โปร่งใส ตรวจสอบได้\n• ทำได้จริง วัดผลได้\n• เข้าใจปัญหาจากประสบการณ์จริง\n• ไม่ทิ้งใครไว้ข้างหลัง",
    },
    {
      title: "ช่องทางติดต่อ",
      keywords: ["ติดต่อ", "โทร", "เบอร์", "อีเมล", "facebook", "ig", "tiktok"],
      answer:
        "ติดต่อ & ติดตาม:\n• โทร: 093-526-2414\n• อีเมล: sciunit.partylist@gmail.com\n• Facebook / IG / TikTok: พรรค SCI UNIT",
    },
    {
      title: "วันเลือกตั้ง",
      keywords: ["วันเลือกตั้ง", "เลือกตั้ง"],
      answer:
        "วันเลือกตั้ง: 27 กุมภาพันธ์ 2569\nเวลา: 09:00 - 17:00 น.\nอย่าลืมมาใช้สิทธิ์กันนะครับ!",
    },
    {
      title: "ทักทาย",
      keywords: ["สวัสดี", "ดีครับ", "ดีค่ะ", "hi", "hello"],
      answer: "สวัสดีครับ! มีอะไรให้ SCI UNIT ช่วยตอบไหมครับ?",
    },
  ];

  const normalize = (s) =>
    String(s || "")
      .toLowerCase()
      .trim();

  const levenshtein = (a, b) => {
    a = String(a || "");
    b = String(b || "");
    if (!a.length) return b.length;
    if (!b.length) return a.length;

    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1,
          );
        }
      }
    }
    return matrix[b.length][a.length];
  };

  const findBestAnswer = (query) => {
    let best = null;
    let maxScore = 0;
    const q = normalize(query);

    knowledge.forEach((item) => {
      let score = 0;
      item.keywords.forEach((kw) => {
        const nkw = normalize(kw);
        if (q.includes(nkw)) score += 5;
        else if (levenshtein(q, nkw) <= 2 && q.length > 3) score += 3;
      });

      if (score > maxScore) {
        maxScore = score;
        best = item;
      }
    });

    return { best, score: maxScore };
  };

  const scrollToBottom = () => {
    body.scrollTop = body.scrollHeight;
  };

  const addBubble = (text, type) => {
    const div = document.createElement("div");
    div.className = `bubble ${type}`;
    div.textContent = text;
    body.appendChild(div);
    scrollToBottom();
    return div;
  };

  // typing bubble (simple)
  const addTyping = () => {
    const div = document.createElement("div");
    div.className = "bubble bot";
    div.textContent = "กำลังพิมพ์…";
    body.appendChild(div);
    scrollToBottom();
    return div;
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const typeTextIntoBubble = async (bubbleEl, fullText, speedMs = 12) => {
    const text = String(fullText || "");
    bubbleEl.textContent = "";
    for (let i = 0; i < text.length; i++) {
      bubbleEl.textContent += text[i];
      const ch = text[i];
      if (ch === "\n") await sleep(90);
      else if (ch === "!" || ch === "?" || ch === ".") await sleep(60);
      else await sleep(speedMs);
      scrollToBottom();
    }
  };

  let isBotBusy = false;

  const handleSend = async (text) => {
    const msg = String(text || "").trim();
    if (!msg || isBotBusy) return;

    addBubble(msg, "user");

    const { best, score } = findBestAnswer(msg);

    isBotBusy = true;
    const typing = addTyping();

    const thinkDelay = Math.min(900, 300 + msg.length * 18);
    await sleep(thinkDelay);

    // replace typing with real reply
    typing.textContent = "";
    const reply =
      best && score > 0
        ? best.answer
        : "ขออภัยครับ ผมยังไม่แน่ใจคำถาม\nลองถามเกี่ยวกับ “นโยบาย” หรือ “วันเลือกตั้ง” ดูนะครับ";

    await typeTextIntoBubble(typing, reply, 10);
    isBotBusy = false;
  };

  const clearChat = () => {
    body.innerHTML = "";
    intro();
  };

  const intro = async () => {
    const introText =
      "สวัสดีครับ! ผมคือ SCI UNIT Assistant (โหมดเดโม่)\nถามได้เลย เช่น: “วันเลือกตั้ง”, “นโยบาย”, “ช่องทางติดต่อ”";
    const bubble = document.createElement("div");
    bubble.className = "bubble bot";
    body.appendChild(bubble);
    await typeTextIntoBubble(bubble, introText, 10);
  };

  // ===== Events =====
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    handleSend(val);
    input.value = "";
    input.focus();
  });

  suggest.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    handleSend(btn.dataset.q);
  });

  toggle.addEventListener("click", () => {
    widget.classList.toggle("collapsed");
    toggle.innerHTML = widget.classList.contains("collapsed")
      ? '<i class="fa-solid fa-plus"></i>'
      : '<i class="fa-solid fa-minus"></i>';
  });

  clearBtn?.addEventListener("click", clearChat);

  // init
  intro();
})();
