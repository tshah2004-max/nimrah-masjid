import Carousel from '../components/Carousel'

function Home() {
  return (
    <div>

      {/* HERO (full bleed, centered content) */}
      <div
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/nimrahbg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative h-full flex items-center justify-center px-4 text-center">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl font-bold">
              Welcome to Nimrah Education and Community Center
            </h1>

            <p className="text-white/90 text-lg mt-4 leading-relaxed">
              Nimrah Education & Communication Centre is dedicated to nurturing faith,
              knowledge, and community.
            </p>
          </div>
        </div>
      </div>

      {/* CAROUSEL (full width media section) */}
      <div className="mt-10">
        <Carousel />
      </div>

      {/* SERVICES (contained content section — but FIXED TEXT STRUCTURE) */}
      <div className="max-w-2xl mx-auto mt-10 p-6">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>Five Daily Prayers conducted in congregation.</p>

          <p>Regular Qur'an Dars and Islamic learning sessions for spiritual growth and understanding.</p>

          <p>Educational Programmes for children, youth, and adults.</p>

          <p>Community Activities and Events that bring people together in faith and fellowship.</p>

          <p>
            Ramadan Programmes, including congregational fasting activities, iftar gatherings,
            Taraweeh prayers, and special lectures.
          </p>

          <p>
            Whether you are seeking knowledge, spiritual development, or a sense of community,
            Nimrah Education & Communication Centre welcomes you.
          </p>

          <p>
            "And say, 'My Lord, increase me in knowledge.'" (Qur'an 20:114)
          </p>
        </div>
      </div>

    </div>
  )
}

export default Home