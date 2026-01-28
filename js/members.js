const MEMBERS = [
  {
    id: "a-01",
    category: "แคนดิเดตหัวหน้าพรรค",
    hero: true,
    role: "แคนดิเดตหัวหน้าพรรค",
    name: "นายธเนศ เฉลียวยิ่ง",
    img: "assets/members/a01.JPG",
    personal: ["ชื่อเล่น: มะอะอุ", "สาขา: คณิตศาสตร์", "ชั้นปี: 2"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "b-01",
    category: "รองหัวหน้าพรรค",
    hero: true,
    role: "รองหัวหน้าพรรคคนที่ 1",
    name: "นายวงศธร นามประกอบ",
    img: "assets/members/b01.JPG",
    personal: ["ชื่อเล่น: ซี", "สาขา: คณิตศาสตร์", "ชั้นปี: 2"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "b-02",
    category: "รองหัวหน้าพรรค",
    hero: true,
    role: "รองหัวหน้าพรรคคนที่ 2",
    name: "นางสาววราภรณ์ ฟอมไธสง",
    img: "assets/members/b02.JPG",
    personal: ["ชื่อเล่น: วาลา", "สาขา: ชีววิทยา", "ชั้นปี: 2"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "c-01",
    category: "ฝ่ายงาน",
    hero: true,
    role: "การเงินและงบประมาณ",
    name: "นางสาวอัญชลี คุมดี",
    img: "assets/members/c01.JPG",
    personal: [
      "ชื่อเล่น: จ๊ะจ๋า",
      "สาขา: อาชีวอนามัยและความปลอดภัย",
      "ชั้นปี: 3",
    ],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "c-02",
    category: "ฝ่ายงาน",
    hero: true,
    role: "ฝ่ายประชาสัมพันธ์",
    name: "นายพิชชากร คำพรม",
    img: "assets/members/c02.JPG",
    personal: [
      "ชื่อเล่น: เฟิร์ส",
      "สาขา: วิทยาการข้อมูลและนวัตกรรมซอฟแวร์",
      "ชั้นปี: 1",
    ],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "c-03",
    category: "ฝ่ายงาน",
    hero: true,
    role: "เลขานุการพรรค",
    name: "นางสาวรุจิศยา อุปนิ",
    img: "assets/members/c03.JPG",
    personal: ["ชื่อเล่น: มิ้นท์", "สาขา: คณิตศาสตร์", "ชั้นปี: 2"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "c-04",
    category: "ฝ่ายงาน",
    hero: true,
    role: "ฝ่ายยุทธศาสตร์การเลือกตั้ง",
    name: "นายอานนท์ เมืองโคตร อานนท์",
    img: "assets/members/c04.JPG",
    personal: ["ชื่อเล่น: อานนท์", "สาขา: คณิตศาสตร์", "ชั้นปี: 2"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "c-05",
    category: "ฝ่ายงาน",
    hero: true,
    role: "นายทะเบียนพรรค",
    name: "นางสาวญานิกา คำศิลา",
    img: "assets/members/c05.JPG",
    personal: ["ชื่อเล่น: แพรไหม", "สาขา: คณิตศาสตร์", "ชั้นปี: 3"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "c-06",
    category: "ฝ่ายงาน",
    hero: true,
    role: "โฆษกพรรค",
    name: "นายรัฐศาสตร์ ครองยุติ",
    img: "assets/members/c06.JPG",
    personal: ["ชื่อเล่น: ทะเล", "สาขา: ชีววิทยา", "ชั้นปี: 2"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "c-07",
    category: "ฝ่ายงาน",
    hero: true,
    role: "ที่ปรึกษาพรรค",
    name: "นายปิยพงษ์ หมื่นขัน",
    img: "assets/members/c07.JPG",
    personal: ["ชื่อเล่น: แมททิว", "สาขา: จุลชีววิทยา", "ชั้นปี: 1"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "d-01",
    category: "กรรมการบริหาร",
    hero: true,
    role: "กรรมการบริหาร",
    name: "นางสาวรุจินทรา บุษราคัม",
    img: "assets/members/d01.JPG",
    personal: ["ชื่อเล่น: น้ำขิง", "สาขา: จุลชีววิทยา", "ชั้นปี: 1"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "d-02",
    category: "กรรมการบริหาร",
    hero: true,
    role: "กรรมการบริหาร",
    name: "นางสาวโยษิตา กองสุข",
    img: "assets/members/d02.JPG",
    personal: ["ชื่อเล่น: โย", "สาขา: ฟิสิกส์ชีวการแพทย์", "ชั้นปี: 1"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "d-03",
    category: "กรรมการบริหาร",
    hero: true,
    role: "กรรมการบริหาร",
    name: "นายธนากร ศรีคำ",
    img: "assets/members/d03.JPG",
    personal: ["ชื่อเล่น: นานิ", "สาขา: จุลชีววิทยา", "ชั้นปี: 1"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "d-04",
    category: "กรรมการบริหาร",
    hero: true,
    role: "กรรมการบริหาร",
    name: "นายอนันต์โชคไพฑูรย์ ยืนยง",
    img: "assets/members/d04.JPG",
    personal: ["ชื่อเล่น: ฟิลม์", "สาขา: คณิตศาสตร์", "ชั้นปี: 2"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
  {
    id: "d-05",
    category: "กรรมการบริหาร",
    hero: true,
    role: "กรรมการบริหาร",
    name: "นายจักรพันธ์ แก่นลา",
    img: "assets/members/d05.JPG",
    personal: ["ชื่อเล่น: เปตอง", "สาขา: ชีววิทยา", "ชั้นปี: 1"],
    work: ["อนุกรรมการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
    education: ["ปัจจุบัน: มหาวิทยาลัยราชภัฏอุบลราชธานี"],
  },
];

const CATEGORY_ORDER = [
  "แคนดิเดตหัวหน้าพรรค",
  "รองหัวหน้าพรรค",
  "ฝ่ายงาน",
  "กรรมการบริหาร",
];

(function () {
  const root = document.getElementById("members-root");
  if (!root) return;

  const escapeHtml = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const iconFor = (type) => {
    if (type === "personal") return "fa-regular fa-user";
    if (type === "work") return "fa-regular fa-briefcase";
    if (type === "edu") return "fa-regular fa-graduation-cap";
    return "fa-regular fa-circle";
  };

  const groupByCategory = (items) => {
    const map = new Map();
    items.forEach((m) => {
      const key = m.category || "อื่น ๆ";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(m);
    });
    return map;
  };

  const catMap = groupByCategory(MEMBERS);
  const orderedCats = [
    ...CATEGORY_ORDER.filter((c) => catMap.has(c)),
    ...[...catMap.keys()].filter((c) => !CATEGORY_ORDER.includes(c)),
  ];

  // =========================
  // RENDER
  // =========================
  root.innerHTML = orderedCats
    .map((cat) => {
      const list = catMap.get(cat) || [];
      return `
        <section class="members-section">
          <h2 class="members-section-title">${escapeHtml(cat)}</h2>

          <div class="members-grid">
            ${list
              .map(
                (m) => `
                <article class="member-item" data-id="${escapeHtml(
                  m.id,
                )}" tabindex="0" role="button" aria-label="เปิดรายละเอียด ${escapeHtml(
                  m.name,
                )}">
                  
                  <!-- การ์ด: รูปล้วน -->
                  <div class="member-card">
                    <div class="shine"></div>
                    <img src="${escapeHtml(m.img)}" alt="${escapeHtml(
                      m.name,
                    )}" loading="lazy"/>
                  </div>

                  <!-- ข้อความ: อยู่นอกการ์ด -->
                  <div class="member-meta">
                    <div class="role">${escapeHtml(m.role || "")}</div>
                    <div class="name">${escapeHtml(m.name || "")}</div>
                  </div>

                </article>
              `,
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");

  // =========================
  // MODAL
  // =========================
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
  <div class="modal" role="dialog" aria-modal="true" aria-label="รายละเอียดสมาชิก">
    <div class="modal-inner">

      <!-- ฝั่งซ้าย : รูป -->
      <div class="modal-left">
        <img id="modalImg" alt="" />
      </div>

      <!-- ฝั่งขวา : รายละเอียด -->
      <div class="modal-right">

        <!-- ปุ่มปิด (มุมขวาบนจริง) -->
        <button class="modal-close" id="modalClose" aria-label="ปิด">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <!-- ชื่อ + ตำแหน่ง -->
        <div class="modal-title">
          <h2 class="big" id="modalName"></h2>
          <p class="sub" id="modalRole"></p>
        </div>

        <!-- ข้อมูลส่วนตัว -->
        <div class="info-block">
          <h4>
            <i class="fa-solid fa-id-card"></i>
            ข้อมูลส่วนตัว
          </h4>
          <ul class="info-list" id="modalPersonal"></ul>
        </div>

        <!-- ประวัติการทำงาน -->
        <div class="info-block">
          <h4>
            <i class="fa-solid fa-briefcase"></i>
            ประวัติการทำงาน
          </h4>
          <ul class="info-list" id="modalWork"></ul>
        </div>

        <!-- ประวัติการศึกษา -->
        <div class="info-block">
          <h4>
            <i class="fa-solid fa-graduation-cap"></i>
            ประวัติการศึกษา
          </h4>
          <ul class="info-list" id="modalEdu"></ul>
        </div>

      </div>
    </div>
  </div>
`;

  document.body.appendChild(overlay);

  // refs
  const modalImg = overlay.querySelector("#modalImg");
  const modalName = overlay.querySelector("#modalName");
  const modalRole = overlay.querySelector("#modalRole");
  const modalPersonal = overlay.querySelector("#modalPersonal");
  const modalWork = overlay.querySelector("#modalWork");
  const modalEdu = overlay.querySelector("#modalEdu");
  const modalClose = overlay.querySelector("#modalClose");

  // helper: fill list
  const fillList = (ul, arr) => {
    const items = Array.isArray(arr) ? arr : [];
    ul.innerHTML = items.length
      ? items.map((t) => `<li>${escapeHtml(t)}</li>`).join("")
      : "<li>-</li>";
  };

  const openModal = (member) => {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";

    modalImg.src = member.img || "";
    modalImg.alt = member.name || "";

    modalName.textContent = member.name || "";
    modalRole.textContent = member.role
      ? `${member.role}${member.category ? " • " + member.category : ""}`
      : member.category || "";

    fillList(modalPersonal, member.personal);
    fillList(modalWork, member.work);
    fillList(modalEdu, member.education);

    setTimeout(() => modalClose.focus(), 0);
  };

  const closeModal = () => {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  // open by click
  root.addEventListener("click", (e) => {
    const item = e.target.closest(".member-item");
    if (!item) return;
    const id = item.dataset.id;
    const member = MEMBERS.find((m) => m.id === id);
    if (member) openModal(member);
  });

  // open by Enter / Space
  root.addEventListener("keydown", (e) => {
    const item = e.target.closest(".member-item");
    if (!item) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const id = item.dataset.id;
      const member = MEMBERS.find((m) => m.id === id);
      if (member) openModal(member);
    }
  });

  // close
  modalClose.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
  });
})();
