
import calendar from "../components/prayerCalendar.json";
import iqamaCalendar from "../components/iqamaCalendar.json";
import React from "react";

const PRAYERS = [
  { name: "Fajr", adhan: 0, iqama: 0 },
  { name: "Sunrise", adhan: 1, iqama: null },
  { name: "Dhuhr", adhan: 2, iqama: 1 },
  { name: "Asr", adhan: 3, iqama: 2 },
  { name: "Maghrib", adhan: 4, iqama: null },
  { name: "Isha", adhan: 5, iqama: 4 },
];

function jamaatTime(adhanTime, iqama) {
  if (!iqama) return adhanTime;
  if (!adhanTime) return "—";

  if (iqama.startsWith("+")) {
    const [h, m] = adhanTime.split(":").map(Number);
    const total = h * 60 + m + parseInt(iqama.slice(1), 10);

    const hh = String(Math.floor(total / 60) % 24).padStart(2, "0");
    const mm = String(total % 60).padStart(2, "0");

    return `${hh}:${mm}`;
  }

  return iqama;
}

function PrayerTimes() {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = now.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mt-10 p-6">
      <h1 className="text-3xl font-bold text-center mb-2">
        Prayer Times
      </h1>

      <h2 className="text-xl text-center text-gray-600 mb-6">
        Nimrah Masjid - {monthName}
      </h2>

      <div className="max-w-full mx-auto overflow-x-auto rounded-lg border border-green-800">
        <table className="w-full text-sm text-center whitespace-nowrap">
          
<thead className="bg-green-950 text-white">
  <tr>
    <th className="p-3">Date</th>
    {PRAYERS.map(({ name, iqama }) => (
      <React.Fragment key={name}>
        <th className="p-3">{name}</th>
        {iqama !== null && (
          <th className="p-3">{name} Iqama</th>
        )}
      </React.Fragment>
    ))}
  </tr>
</thead>

<tbody>
  {Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const key = String(day);

    const adhanToday = calendar[month]?.[key];
    const iqamaToday = iqamaCalendar[month]?.[key];

    const isToday = day === now.getDate();

    return (
      <tr
        key={day}
        className={`border-b ${
          isToday
            ? "bg-green-100 font-bold"
            : index % 2 === 0
            ? "bg-white"
            : "bg-gray-50"
        }`}
      >
        <td className="p-3 whitespace-nowrap">
          {new Date(year, month, day).toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </td>

        {PRAYERS.map(({ name, adhan, iqama }) => (
          <React.Fragment key={name}>
            <td className="p-3 whitespace-nowrap">
              {adhanToday?.[adhan] || "—"}
            </td>

            {iqama !== null && (
              <td className="p-3 whitespace-nowrap">
                {jamaatTime(adhanToday?.[adhan], iqamaToday?.[iqama])}
              </td>
            )}
          </React.Fragment>
        ))}
      </tr>
    );
  })}
</tbody>

        </table>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        Adhan = Prayer start time | Jamaat = Congregational prayer time
      </p>

      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          For more details and to download the prayer timetable app:
        </p>

        <a
          href="https://www.mawaqit.net/#cta"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-800 text-white px-6 py-3 rounded-lg inline-block hover:bg-green-900"
        >
          Download Mawaqit App
        </a>
      </div>
    </div>
  );
}

export default PrayerTimes;
