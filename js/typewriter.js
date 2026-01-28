(function () {
  const el = document.getElementById("typeTarget");
  if (!el) return;

  const path = location.pathname.split("/").pop() || "index.html";

  const wordConfigs = {
    "index.html": [
      "ขับเคลื่อนคณะวิทยาศาสตร์ให้ก้าวไปข้างหน้า",
      "ทำงานเพื่อประโยชน์ของนักศึกษาทุกคน",
      "ยกระดับคณะวิทยาศาสตร์ด้วยแผนงานที่ชัดเจน",
      "เปิดพื้นที่รับฟังความคิดเห็นของนักศึกษา",
      "ร่วมกันสร้างอนาคตที่ดีกว่าสำหรับทุกคน",
    ],

    "about.html": [
      "ความซื่อตรงในการปฏิบัติหน้าที่",
      "ความจริงใจในการสื่อสารกับนักศึกษา",
      "การทำงานร่วมกันอย่างมีพลังและสร้างสรรค์",
      "ความโปร่งใสในทุกกระบวนการทำงาน",
    ],

    "members.html": [
      "คนรุ่นใหม่ที่เข้าใจชีวิตนักศึกษา",
      "ทีมที่เต็มไปด้วยความสามารถและความมุ่งมั่น",
      "ตัวแทนนักศึกษาที่พร้อมลงมือทำอย่างจริงจัง",
      "กลุ่มคนที่พร้อมทำงานเพื่อคณะวิทยาศาสตร์",
    ],

    "policies.html": [
      "นโยบายที่มีเป้าหมายชัดเจนและตรวจสอบได้",
      "นโยบายที่วางอยู่บนความเป็นไปได้จริง",
      "นโยบายที่ตอบโจทย์นักศึกษาคณะวิทยาศาสตร์โดยตรง",
      "นโยบายที่สะท้อนเสียงและความต้องการของนักศึกษา",
    ],

    "why-us.html": [
      "ทีมงานที่มีศักยภาพและความพร้อมในการทำงาน",
      "วิสัยทัศน์ที่มองไกลถึงอนาคตคณะวิทยาศาสตร์",
      "รูปแบบการทำงานที่เป็นขั้นตอนและมีระบบ",
      "ความมุ่งมั่นตั้งใจที่จะสร้างการเปลี่ยนแปลง",
    ],

    "contact.html": [
      "พร้อมรับฟังความคิดเห็นจากนักศึกษาทุกคน",
      "ตอบคำถามด้วยความจริงใจและตรงไปตรงมา",
      "ใส่ใจทุกปัญหาที่นักศึกษาพบเจอ",
      "เปิดโอกาสให้เสนอแนวคิดและข้อเสนอแนะ",
    ],

    "chatbot.html": [
      "พื้นที่พูดคุยและสอบถามข้อมูลเบื้องต้น",
      "ช่วยแนะนำข้อมูลเกี่ยวกับพรรคและนโยบาย",
      "ตอบคำถามทั่วไปเพื่อความสะดวกของนักศึกษา",
      "เป็นอีกหนึ่งช่องทางในการสื่อสารกับพวกเรา",
    ],
  };

  const words = wordConfigs[path] || wordConfigs["index.html"];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeSpeed = 70;
  const deleteSpeed = 40;
  const pauseAfterType = 900;
  const pauseAfterDelete = 250;

  function tick() {
    const current = words[wordIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        deleting = true;
        return setTimeout(tick, pauseAfterType);
      }
      return setTimeout(tick, typeSpeed);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        return setTimeout(tick, pauseAfterDelete);
      }
      return setTimeout(tick, deleteSpeed);
    }
  }

  tick();
})();
