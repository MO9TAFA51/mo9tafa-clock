function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // حساب الزوايا
    // كل ثانية = 6 درجات (360 / 60)
    const secondsDegrees = (seconds * 6);
    // كل دقيقة = 6 درجات + جزء بسيط من الثواني لانسيابية الحركة
    const minutesDegrees = (minutes * 6) + (seconds / 10);
    // كل ساعة = 30 درجة (360 / 12) + جزء من الدقائق
    const hoursDegrees = (hours * 30) + (minutes / 2);

    document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
    document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
    document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
}

// تشغيل الدالة كل ثانية
setInterval(updateClock, 1000);

// استدعاء أولي لتجنب التأخير عند التحميل
updateClock();