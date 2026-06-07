import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import PrayerTimes from './pages/PrayerTimes'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

function App() {
    return (
        <BrowserRouter>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/prayer-times" element={<PrayerTimes />} />
  <Route path="/events" element={<Events />} />
  <Route path="/donate" element={<Donate />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </BrowserRouter>
    )
}

export default App