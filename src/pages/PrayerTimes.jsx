function PrayerTimes() {
  return (
    <div className="text-center mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Prayer Times</h1>
      <p className="text-gray-600 mb-6">View live prayer times for Nimrah Masjid on Mawaqit</p>
      <div className="max-w-2xl mx-auto border border-green-600 rounded-lg p-4">
        <iframe
          src="//mawaqit.net/en/w/nimrah-masjid-manchester-m19-3aq-united-kingdom?showOnly5PrayerTimes=0"
          frameBorder="0"
          scrolling="no"
          className="w-full h-96"
        />
        <p className="text-gray-600 mt-4">For more details and to download the prayer timetable app, click below:</p>
        
        <a href="https://www.mawaqit.net/#cta"
  target="_blank"
  className="bg-green-800 text-white px-6 py-3 rounded-lg mt-4 inline-block"
>
  Download Mawaqit App
</a>
      </div>
    </div>
  )
}
export default PrayerTimes