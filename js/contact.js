// =========================================================
// contact.js — ทั้งไฟล์
// Layout คล้ายหน้า "ทำไมถึงเลือกเรา":
// - การ์ดบนสุด (Chatbot) กิน 2 คอลัมน์ และคลิกไป chatbot.html
// - ด้านล่างเป็นการ์ดติดต่อทั่วไป 2 ใบ (ช่องทางติดต่อ / ติดตามเรา)
// - ไม่มี modal (เพราะต้องการหน้าเรียบ ๆ เหมือนตัวอย่างที่ส่งมา)
// =========================================================

(function initContactPage() {
  const root = document.getElementById("contact-root");
  if (!root) return;

  const CONTACT = {
    phone: "093-526-2414",
    email: "sciunit.partylist@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=61587286371344",
    instagram: "https://www.instagram.com/sciunit_official/",
    tiktok: "https://www.tiktok.com/@sciunit_party.sciubu",
  };

  const esc = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  // ✅ เรนเดอร์เหมือนหน้า why-us: ใช้ grid 2 คอลัมน์ + card ใหญ่ 2 คอลัมน์บนสุด
  root.innerHTML = `
    <div class="contact-grid">

      <!-- ===== Chatbot Card (2 columns) ===== -->
      <article class="contact-card contact-chatbot" id="contactChatbotCard" tabindex="0" role="link" aria-label="ไปหน้าแชทบอท">
        <div class="contact-chat-left">
          <div class="contact-chat-icon" aria-hidden="true">
            <i class="fa-solid fa-robot"></i>
          </div>
          <div class="contact-chat-text">
            <div class="contact-chat-title">แชทกับบอท (SCI UNIT Assistant)</div>
            <div class="contact-chat-sub">
              ถามเรื่องนโยบาย, วันเลือกตั้ง, ช่องทางติดต่อ หรือข้อมูลพรรคได้ทันที
            </div>
          </div>
        </div>

        <div class="contact-chat-go">
          ไปหน้าแชท <i class="fa-solid fa-arrow-right"></i>
        </div>
      </article>

      <!-- ===== Divider + Title (เหมือนหน้า members ที่มีเส้นคั่น+หัวข้อ) ===== -->
      <div class="contact-divider" aria-hidden="true"></div>
      <div class="contact-section-title">ช่องทางติดต่อ</div>
      <div class="contact-divider" aria-hidden="true"></div>

      <!-- ===== Card: Contact ===== -->
      <article class="contact-card contact-info">
        <h3 class="contact-h3">ช่องทางติดต่อ</h3>
        <div class="contact-lines">
          <div class="contact-line"><b>โทร</b> : ${esc(CONTACT.phone)}</div>
          <div class="contact-line"><b>อีเมล</b> : ${esc(CONTACT.email)}</div>
        </div>
      </article>

      <!-- ===== Card: Social ===== -->
      <article class="contact-card contact-social">
        <h3 class="contact-h3">ติดตามเรา</h3>
        <div class="contact-lines" style="margin-bottom:10px;">
          Facebook / Instagram / TikTok<br/>
          พรรค SCI UNIT
        </div>

        <div class="contact-actions">
          <a class="contact-btn" href="${esc(CONTACT.facebook)}" target="_blank" rel="noopener">
            <i class="fa-brands fa-facebook"></i> Facebook
          </a>
          <a class="contact-btn" href="${esc(CONTACT.instagram)}" target="_blank" rel="noopener">
            <i class="fa-brands fa-instagram"></i> Instagram
          </a>
          <a class="contact-btn" href="${esc(CONTACT.tiktok)}" target="_blank" rel="noopener">
            <i class="fa-brands fa-tiktok"></i> TikTok
          </a>
        </div>
      </article>

    </div>
  `;

  // ===== Click -> ไปหน้า chatbot.html =====
  const goChatbot = () => {
    window.location.href = "chatbot.html";
  };

  const chatbotCard = document.getElementById("contactChatbotCard");
  chatbotCard?.addEventListener("click", goChatbot);
  chatbotCard?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goChatbot();
    }
  });
})();
