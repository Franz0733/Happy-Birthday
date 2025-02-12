function createFloatingEmoji() {
    const emojis = ["🎂", "💖", "✨", "🎉", "🎊"];
    const emoji = document.createElement("div");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.classList.add("floating");
    document.body.appendChild(emoji);

    // ตั้งค่าตำแหน่งเริ่มต้นและปลายทางแบบสุ่ม
    const startX = Math.random() * 100; // ตำแหน่งเริ่ม (0-100vw)
    const startY = Math.random() * 100; // ตำแหน่งเริ่ม (0-100vh)
    const endX = Math.random() * 200 - 100; // วิ่งออกด้านข้าง (-100vw ถึง 100vw)
    const endY = Math.random() * -100 - 50; // วิ่งขึ้นบน (-50vh ถึง -150vh)

    emoji.style.left = `${startX}vw`;
    emoji.style.top = `${startY}vh`;
    emoji.style.setProperty('--x', `${endX}vw`);
    emoji.style.setProperty('--y', `${endY}vh`);

    // สุ่มขนาดและความเร็ว
    const size = Math.random() * 30 + 20; // ขนาด 20px - 50px
    emoji.style.fontSize = `${size}px`;
    emoji.style.animationDuration = `${Math.random() * 4 + 3}s`; // ความเร็ว 3-7 วินาที
    emoji.style.animationDelay = `${Math.random() * 2}s`; // ดีเลย์บางส่วน

    // ลบออกจาก DOM เมื่อจบแอนิเมชัน
    setTimeout(() => {
        emoji.remove();
    }, 8000);
}

// สร้างเอฟเฟกต์ทุก 300ms (เร็วขึ้น)
setInterval(createFloatingEmoji, 300);
