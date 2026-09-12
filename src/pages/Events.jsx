function Events() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Events & Classes</h1>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
      <p className="font-semibold text-gray-800">Daily Madrassa Class</p>
      <p className="text-gray-600">Monday - Friday, 5:00pm - 7:00pm</p>
      <p className="text-gray-600">Quraan classes for children</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
      <p className="font-semibold text-gray-800">Jummah</p>
      <p className="text-gray-600">First Jummah in Urdu at 1:30</p>
      <p className="text-gray-600">Second Jummah in English at 2:30</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
      <p className="font-semibold text-gray-800">Youth Circle</p>
      <p className="text-gray-600">Every Friday at 7:15pm</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
      <p className="font-semibold text-gray-800">Urdu Quraan Class</p>
      <p className="text-gray-600">After Maghrib On Sunday</p>
      </div>
       <img src="/event.png" className="w-full rounded-lg mt-4" alt="Event" />
    </div>
  )
}
export default Events