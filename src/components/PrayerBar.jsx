import calendar from "./prayerCalendar.json";
import iqamaCalendar from "./iqamaCalendar.json";

// adhan index in calendar.json (it includes sunrise), iqama index in iqamaCalendar.json (it doesn't)
const PRAYERS = [
  { name: "Fajr", adhan: 0, iqama: 0 },
  { name: "Dhuhr", adhan: 2, iqama: 1 },
  { name: "Asr", adhan: 3, iqama: 2 },
  { name: "Maghrib", adhan: 4, iqama: 3 },
  { name: "Isha", adhan: 5, iqama: 4 },
];

function jamaatTime(adhanTime, iqama) {
  if (!iqama) return adhanTime; // no jamaat set, fall back to the start time
  if (iqama.startsWith("+")) {
    const [h, m] = adhanTime.split(":").map(Number);
    const total = h * 60 + m + parseInt(iqama.slice(1), 10);
    const hh = String(Math.floor(total / 60) % 24).padStart(2, "0");
    const mm = String(total % 60).padStart(2, "0");
    return `${hh}:${mm}`;
  }
  return iqama; // already a fixed time like "13:30"
}

function PrayerBar() {
  const now = new Date();
  const month = now.getMonth();
  const day = String(now.getDate());
  const adhanToday = calendar[month]?.[day];
  const iqamaToday = iqamaCalendar[month]?.[day];

  if (!adhanToday || !iqamaToday) return null;

  return (
<div className="bg-green-950 text-white py-2 px-6 flex justify-end items-center text-sm">
        <div className="flex gap-6">
        {PRAYERS.map(({ name, adhan, iqama }) => (
          <span key={name}>
             {name}:{" "}
            <strong>{jamaatTime(adhanToday[adhan], iqamaToday[iqama])}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}

export default PrayerBar;