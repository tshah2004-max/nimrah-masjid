import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="text-center py-20 bg-green-50">
        <h1 className="text-4xl font-bold">Welcome to Nimrah Education and Community Center</h1>
        <p className="text-xl text-gray-600 mt-4">Your community mosque in Levenshulme, Manchester</p>
      </div>
      <div 
  style={{ backgroundImage: "url('/mosque.png')" }}
  className="bg-cover bg-center text-center py-40 h-96"
></div>
      <div className="max-w-2xl mx-auto mt-10 p-6">
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <p className="mb-4 text-gray-700">Nimrah Masjid is a community mosque located in the heart of Levenshulme, Manchester. We welcome Muslims from all backgrounds to worship, learn, and grow together.</p>
        <p className="mb-4 text-gray-700">Our mission is to serve the local Muslim community by providing a welcoming place of worship, Islamic education, and community support.</p>
        <p className="mb-4 text-gray-700">We are located on 2 Park Grove, Levenshulme, Manchester M19 3AQ.</p>
      </div>
    </div>
  )
}
export default Home