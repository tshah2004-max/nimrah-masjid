function PrayerTimes() {
  return (
    <div className="text-center mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Prayer Times</h1>
      <div className="max-w-2xl mx-auto">
        <a href="/PrayerTimetable.png" target="_blank" rel="noopener noreferrer">
          <img
            src="/PrayerTimetable.png"
            alt="Nimrah Masjid prayer timetable for October 2026"
            className="w-full max-w-md mx-auto rounded-lg"
          />
        </a>
        <p className="text-gray-500 text-sm mt-2">Tap the image to view it full size.</p>

        <p className="text-gray-600 mt-4">
          For more details and to download the prayer timetable app, click below:
        </p>

        <a
          href="https://www.mawaqit.net/#cta"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-800 text-white px-6 py-3 rounded-lg mt-4 inline-block"
        >
          Download Mawaqit App
        </a>
      </div>
    </div>
  );
}
export default PrayerTimes;