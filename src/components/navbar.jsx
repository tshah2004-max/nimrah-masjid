import { Link } from 'react-router-dom'

function Navbar() {
return <nav className="bg-green-800 p-4 text-white flex justify-between items-center"><span className="text-2xl font-bold tracking-wide">🕌 Nimrah Masjid</span>
    <ul className="flex gap-6">
        <li><Link className="hover:text-green-300 transition-colors duration-200" to="/">Home</Link></li>
        <li><Link className="hover:text-green-300 transition-colors duration-200" to="/prayer-times">Prayer Times</Link></li>
        <li><Link className="hover:text-green-300 transition-colors duration-200" to="/events">Events</Link></li>
        <li><Link className="hover:text-green-300 transition-colors duration-200" to="/donate">Donate</Link></li>
        <li><Link className="hover:text-green-300 transition-colors duration-200" to="/contact">Contact</Link></li>
    </ul>
</nav>
}

export default Navbar; 