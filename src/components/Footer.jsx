import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-20 p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10">
        
        <div>
          <h3 className="font-bold text-lg mb-3">🕌 Nimrah Education & Community Centre</h3>
          <p className="text-green-200">Serving the community of Levenshulme, Manchester.</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-green-200 hover:text-white">Home</Link></li>
            <li><Link to="/prayer-times" className="text-green-200 hover:text-white">Prayer Times</Link></li>
            <li><Link to="/events" className="text-green-200 hover:text-white">Events</Link></li>
            <li><Link to="/donate" className="text-green-200 hover:text-white">Donate</Link></li>
            <li><Link to="/contact" className="text-green-200 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p className="text-green-200">2 Park Grove, Levenshulme</p>
          <p className="text-green-200">Manchester M19 3AQ</p>
          <p className="text-green-200 mt-2">07307 535874</p>
        </div>

      </div>
      <p className="text-center text-green-300 mt-10 text-sm">© 2026 Nimrah Education & Community Centre. All rights reserved.</p>
    </footer>
  )
}
export default Footer