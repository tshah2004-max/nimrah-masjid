import { Link } from "react-router-dom";

const ROLES = [
  { icon: "📚", title: "Madrassa Teaching Assistant" },
  { icon: "🎉", title: "Events Organiser" },
  { icon: "🔧", title: "Maintenance & Facilities" },
  { icon: "🌟", title: "Youth Circle Facilitator" },
  { icon: "🤲", title: "Death Committee Support" },
  { icon: "🤝", title: "General Community Support" },
];

function Volunteer() {
  return (
    <div className="pb-12">
      {/* HEADER */}
      <div className="bg-green-950 text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Volunteer</h1>
        <p className="text-white/90 mt-4 max-w-2xl mx-auto leading-relaxed">
          Nimrah Education & Community Centre relies on the support of dedicated
          volunteers to help run and maintain our services. Whether you have a few
          hours a week or want to take on a bigger role, we welcome all contributions.
        </p>
      </div>

      {/* ROLES */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">Volunteer Roles</h2>
        <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-8"></div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map(({ icon, title }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow p-5 border-t-4 border-green-700 hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-semibold text-gray-800">{title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* HOW TO SIGN UP */}
      <div className="max-w-3xl mx-auto mt-12 px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-700 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-2">How to Sign Up</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            If you are interested in volunteering, please speak to us after any
            prayer or contact us directly.
          </p>

          <div className="text-gray-700 space-y-1 mb-6">
            <p>
              <span className="font-semibold">Phone:</span> 07307 535874
            </p>
            <p>
              <span className="font-semibold">Address:</span> 2 Park Grove,
              Levenshulme, Manchester M19 3AQ
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:07307535874"
              className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Call us
            </a>
            <Link
              to="/contact"
              className="bg-green-950 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Contact page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;