import { useState, useEffect } from 'react';

export function useLiveStatus() {
  const [status, setStatus] = useState({
    isLiveNow: false,
    currentSessionTitle: '',
    nextSessionTime: '',
    countdownText: '',
    wibTimeStr: ''
  });

  useEffect(() => {
    function calculateLive() {
      // Get current date/time converted to WIB (UTC+7)
      const now = new Date();
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      const wibOffset = 7 * 60 * 60 * 1000;
      const wibDate = new Date(utcTime + wibOffset);

      const hours = wibDate.getHours();
      const minutes = wibDate.getMinutes();
      const seconds = wibDate.getSeconds();
      const currentMinuteOfDay = hours * 60 + minutes;

      // Session 1: 14:30 - 16:30 WIB (870 to 990 minutes)
      const session1Start = 14 * 60 + 30; // 870
      const session1End = 16 * 60 + 30;   // 990

      // Session 2: 18:30 - 21:00 WIB (1110 to 1260 minutes)
      const session2Start = 18 * 60 + 30; // 1110
      const session2End = 21 * 60 + 0;    // 1260

      let isLive = false;
      let activeTitle = '';
      let nextTargetMinute = 0;
      let nextLabel = '';

      if (currentMinuteOfDay >= session1Start && currentMinuteOfDay < session1End) {
        isLive = true;
        activeTitle = 'Sesi Siang (Try-On & Spill Tas)';
      } else if (currentMinuteOfDay >= session2Start && currentMinuteOfDay < session2End) {
        isLive = true;
        activeTitle = 'Sesi Malam (Flash Sale & Bagi Voucher)';
      }

      if (!isLive) {
        if (currentMinuteOfDay < session1Start) {
          nextTargetMinute = session1Start;
          nextLabel = '14.30 WIB Nanti (Sesi Siang)';
        } else if (currentMinuteOfDay < session2Start) {
          nextTargetMinute = session2Start;
          nextLabel = '18.30 WIB Nanti Malam (Sesi Flash Sale)';
        } else {
          nextTargetMinute = 24 * 60 + session1Start;
          nextLabel = '14.30 WIB Besok (Sesi Siang)';
        }

        const diffMinutes = nextTargetMinute - currentMinuteOfDay - 1;
        const diffSeconds = 60 - seconds;
        const h = Math.floor(diffMinutes / 60);
        const m = diffMinutes % 60;
        const countdown = `${h > 0 ? `${h} jam ` : ''}${m} menit lagi`;

        setStatus({
          isLiveNow: false,
          currentSessionTitle: '',
          nextSessionTime: nextLabel,
          countdownText: countdown,
          wibTimeStr: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} WIB`
        });
      } else {
        setStatus({
          isLiveNow: true,
          currentSessionTitle: activeTitle,
          nextSessionTime: '',
          countdownText: 'Lagi Live Sekarang',
          wibTimeStr: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} WIB`
        });
      }
    }

    calculateLive();
    const interval = setInterval(calculateLive, 1000);
    return () => clearInterval(interval);
  }, []);

  return status;
}