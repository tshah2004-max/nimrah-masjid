import { Link } from "react-router-dom";
import EventSlider from "../components/EventSlider"; // adjust path

const SERVICES = [
  { icon: "🕌", title: "Five Daily Prayers", text: "Conducted in congregation." },
  { icon: "📖", title: "Qur'an Dars", text: "Regular Qur'an Dars and Islamic learning sessions for spiritual growth and understanding." },
  { icon: "🎓", title: "Educational Programmes", text: "Programmes for children, youth, and adults." },
  { icon: "🤝", title: "Community Events", text: "Activities and events that bring people together in faith and fellowship." },
  { icon: "🌙", title: "Ramadan Programmes", text: "Congregational fasting activities, iftar gatherings, Taraweeh prayers, and special lectures." },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <div
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/nimrahbg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative h-full flex items-center justify-center px-4 text-center">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Welcome to Nimrah Masjid & Education Centre
            </h1>
            <p className="text-white/90 text-lg mt-4 leading-relaxed">
              Dedicated to nurturing faith, knowledge, and community.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/prayer-times"
                className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Prayer Times
              </Link>
              <Link
                to="/events"
                className="bg-white/90 hover:bg-white text-green-900 px-6 py-3 rounded-lg font-semibold"
              >
                Events & Classes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">Our Services</h2>
        <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-8"></div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow p-5 border-t-4 border-green-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 mt-8 leading-relaxed max-w-2xl mx-auto">
          Whether you are seeking knowledge, spiritual development, or a sense of community,
          Nimrah Masjid & Education Centre welcomes you.
        </p>
      </div>

      {/* EVENTS SLIDER */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">What's On</h2>
        <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-8"></div>
        <EventSlider className="max-w-xs" />
        <div className="text-center mt-4">
          <Link to="/events" className="text-green-800 font-semibold hover:underline">
            See all events & classes →
          </Link>
        </div>
      </div>

      {/* QUOTE */}
      <div className="bg-green-950 text-white mt-12 py-10 px-6 text-center">
        <p className="text-xl italic max-w-2xl mx-auto">
          "And say, 'My Lord, increase me in knowledge.'"
        </p>
        <p className="text-green-300 mt-2 text-sm">Qur'an 20:114</p>
      </div>
    </div>
  );
}

export default Home;