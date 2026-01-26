(() => {
  const MEMBERS = [
    {
      id: "Leader-01",
      category: "แคนดิเดตหัวหน้าพรรค",
      hero: true,
      role: "หัวหน้าพรรค",
      name: "นายธเนศ เฉลียวยิ่ง",
      img: "assets/members/leader-01.png",

      personal: [
        "ชื่อเล่น: มะอะอุ",
        "สาขา: คณิตศาสตร์",
        "ชั้นปีที่ 2",
        "IG: maou_tanet",
      ],
      work: [
        "กรรมการฝ่ายวิชาการสภาเด็กและเยาวชนตำบลสวาย (2565)",
        "ประธานฝ่ายวิชาการสภาเด็กและเยาวชนตำบลสวาย (2566)",
        "ที่ปรึกษาสภาเด็กและเยาวชนตำบลสวาย (2567)",
        "อนุกรรมการฝ่ายวิชาการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2567)",
        "ประธานฝ่ายวิชาการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)",
      ],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },

    {
      id: "DeputyLeader-01",
      category: "รองหัวหน้าพรรค",
      role: "รองหัวหน้าพรรคคนที่ 1",
      name: "นายวงศธร นามประกอบ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ซี", "สาขา: คณิตศาสตร์", "ชั้นปีที่ 2"],
      work: [
        "อนุกรรมการฝ่ายกีฬาสโมสรนักศึกษาคณะวิทยาศาสตร์ (2567)",
        "ประธานฝ่ายกีฬาปี 68 (2568)",
      ],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "DeputyLeader-02",
      category: "รองหัวหน้าพรรค",
      role: "รองหัวหน้าพรรคคนที่ 2",
      name: "นางสาววราภรณ์ ฟอมไธสง",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ลาวา", "สาขา: ชีววิทยา", "ชั้นปีที่ 2"],
      work: [
        "อนุกรรมการฝ่ายประชาสัมพันธ์สโมสรนักศึกษาคณะวิทยาศาสตร์ (2567)",
        "ประธานฝ่ายประชาสัมพันธ์ปี 68 (2568)",
      ],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },

    {
      id: "Department-01",
      category: "ฝ่ายงาน",
      role: "ฝ่ายประชาสัมพันธ์",
      name: "นายพิชชากร คำพรม",
      img: "assets/members/final01.png",

      personal: [
        "ชื่อเล่น: เฟิร์ส",
        "สาขา: วิทยาการข้อมูลและนวัตกรรมซอฟต์แวร์",
        "ชั้นปีที่ 1",
        "IG: p1tch4_a",
      ],
      work: [
        "ประธานแผนกคอมพิวเตอร์ธุรกิจ (2565)",
        "นายทะเบียนองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย (2565)",
        "อนุกรรมการฝ่ายประชาสัมพันธ์สโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)",
      ],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "Department-02",
      category: "ฝ่ายงาน",
      role: "ฝ่ายงาน",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายประชาสัมพันธ์สโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "Department-03",
      category: "ฝ่ายงาน",
      role: "ฝ่ายงาน",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายประชาสัมพันธ์สโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "Department-04",
      category: "ฝ่ายงาน",
      role: "ฝ่ายงาน",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายประชาสัมพันธ์สโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "Department-05",
      category: "ฝ่ายงาน",
      role: "ฝ่ายงาน",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายประชาสัมพันธ์สโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "Department-06",
      category: "ฝ่ายงาน",
      role: "ฝ่ายงาน",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายประชาสัมพันธ์สโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "Department-07",
      category: "ฝ่ายงาน",
      role: "ฝ่ายงาน",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายประชาสัมพันธ์สโมสรนักศึกษาคณะวิทยาศาสตร์ (2568)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },

    {
      id: "Committee-01",
      category: "กรรมการบริหาร",
      role: "กรรมการบริหาร",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายวิชาการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2567)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "Committee-02",
      category: "กรรมการบริหาร",
      role: "กรรมการบริหาร",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายวิชาการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2567)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "Committee-03",
      category: "กรรมการบริหาร",
      role: "กรรมการบริหาร",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายวิชาการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2567)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "Committee-04",
      category: "กรรมการบริหาร",
      role: "กรรมการบริหาร",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายวิชาการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2567)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
    {
      id: "Committee-05",
      category: "กรรมการบริหาร",
      role: "กรรมการบริหาร",
      name: "ชื่อ",
      img: "assets/members/final01.png",

      personal: ["ชื่อเล่น: ", "สาขา: ", "ชั้นปีที่ 1", "IG: "],
      work: ["อนุกรรมการฝ่ายวิชาการสโมสรนักศึกษาคณะวิทยาศาสตร์ (2567)"],
      education: ["ปัจจุบัน: มหาวิทยาลัยอุบลราชธานี"],
    },
  ];

  // กำหนดลำดับหมวด
  const CATEGORY_ORDER = [
    "แคนดิเดตหัวหน้าพรรค",
    "รองหัวหน้าพรรค",
    "ฝ่ายงาน",
    "กรรมการบริหาร",
  ];

  const root = document.getElementById("members-root");
  if (!root) return;

  const heroMember = MEMBERS.find((m) => m.hero);
  const heroCategory = heroMember ? heroMember.category : null;

  const grouped = MEMBERS.reduce((acc, m) => {
    (acc[m.category] ||= []).push(m);
    return acc;
  }, {});

  const existingCategories = Object.keys(grouped);

  const orderedFromList = CATEGORY_ORDER.filter((c) =>
    existingCategories.includes(c),
  );
  const remaining = existingCategories
    .filter((c) => !CATEGORY_ORDER.includes(c))
    .sort((a, b) => a.localeCompare(b, "th"));

  let categories = [...orderedFromList, ...remaining];
  if (heroCategory && !categories.includes(heroCategory))
    categories = [heroCategory, ...categories];

  // render cards
  root.innerHTML = "";

  for (const cat of categories) {
    const isHero = cat === heroCategory;

    const section = document.createElement("section");
    section.className = "category" + (isHero ? " category--hero" : "");

    section.innerHTML = `
      <div class="category-head">
        <div class="category-line"></div>
        <h2 class="category-title">${cat}</h2>
        <div class="category-line"></div>
      </div>
      <div class="member-grid" data-category="${cat}"></div>
    `;

    const grid = section.querySelector(".member-grid");

    const list = isHero
      ? grouped[cat].filter((m) => m.hero)
      : grouped[cat].filter((m) => !m.hero);

    list.forEach((m) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "member-card";
      card.dataset.id = m.id;

      card.innerHTML = `
        <div class="member-media">
          <img src="${m.img}" alt="${m.name}" loading="lazy">
        </div>
        <div class="member-meta">
          <div class="member-role">${m.role}</div>
          <div class="member-name">${m.name}<span class="chev">›</span></div>
        </div>
      `;

      grid.appendChild(card);
    });

    root.appendChild(section);
  }

  // ===== Modal =====
  const backdrop = document.querySelector(".modal-backdrop");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".modal-close");

  const mImg = document.getElementById("mImg");
  const mRole = document.getElementById("mRole");
  const mName = document.getElementById("mName");

  // สร้างพื้นที่เนื้อหา (แทน mDesc เดิม) ให้รองรับหัวข้อ
  // หมายเหตุ: members.html เดิมมี #mDesc อยู่แล้ว ใช้อันนั้นเป็น container ได้
  const mDesc = document.getElementById("mDesc");

  const byId = new Map(MEMBERS.map((m) => [m.id, m]));

  function iconFor(type) {
    if (type === "personal") return '<i class="fa-solid fa-user"></i>';
    if (type === "work") return '<i class="fa-solid fa-briefcase"></i>';
    if (type === "edu") return '<i class="fa-solid fa-graduation-cap"></i>';
    return '<i class="fa-solid fa-circle"></i>';
  }

  function renderList(items, type) {
    if (!items || !items.length) return "";
    return `
      <ul class="section-list">
        ${items
          .map(
            (t) => `
          <li class="section-item">
            <div class="ico">${iconFor(type)}</div>
            <div class="txt">${t}</div>
          </li>
        `,
          )
          .join("")}
      </ul>
    `;
  }

  function openModal(member) {
    mImg.src = member.img;
    mImg.alt = member.name;

    mRole.textContent = member.role || "";
    mName.textContent = member.name || "";

    const personal = member.personal || [];
    const work = member.work || [];
    const education = member.education || [];

    // เนื้อหาด้านขวา
    mDesc.innerHTML = `
      <div class="section-tag">ข้อมูลส่วนตัว</div>
      ${renderList(personal, "personal")}

      <div class="section-divider"></div>

      <div class="section-tag">ประวัติการทำงาน</div>
      ${renderList(work, "work")}

      ${
        education.length
          ? `
        <div class="section-divider"></div>
        <div class="section-tag">ประวัติการศึกษา</div>
        ${renderList(education, "edu")}
      `
          : ""
      }
    `;

    backdrop.hidden = false;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    backdrop.hidden = true;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  root.addEventListener("click", (e) => {
    const btn = e.target.closest(".member-card");
    if (!btn) return;

    btn.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

    const member = byId.get(btn.dataset.id);
    setTimeout(() => openModal(member), 160);
  });

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => {
    if (!modal.hidden && e.key === "Escape") closeModal();
  });
})();
