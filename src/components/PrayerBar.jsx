import { useState } from "react";
import { useEffect } from "react";

function PrayerBar() {
const [prayerTimes, setPrayerTimes] = useState(null)

useEffect(() => {
    fetch("https://api.aladhan.com/v1/timingsByCity?city=Manchester&country=GB&method=2")
    .then(response => response.json())
    .then(data => {
        setPrayerTimes(data.data.timings)
    })
}, [])

if (!prayerTimes) return null

return (
  <div className="bg-green-950 text-white py-2 px-6 flex justify-between items-center text-sm">
    <span className="text-green-300">
      {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
    </span>
    <div className="flex gap-6">
      <span>🕌 Fajr: <strong>{prayerTimes.Fajr}</strong></span>
      <span>🕌 Dhuhr: <strong>{prayerTimes.Dhuhr}</strong></span>
      <span>🕌 Asr: <strong>{prayerTimes.Asr}</strong></span>
      <span>🕌 Maghrib: <strong>{prayerTimes.Maghrib}</strong></span>
      <span>🕌 Isha: <strong>{prayerTimes.Isha}</strong></span>
    </div>
  </div>
)
}

export default PrayerBar