import { Link } from "react-router-dom";

const COURSES = [
  { icon: "📖", title: "Quran Recitation", text: "Learn to recite with Tajweed." },
  { icon: "🕌", title: "Islamic Studies", text: "Understanding the faith and its teachings." },
  { icon: "🔤", title: "Arabic Basics", text: "Arabic language fundamentals." },
  { icon: "🤲", title: "Duas & Daily Prayers", text: "Learn the duas and how to pray." },
];

const DETAILS = [
  { icon: "📅", label: "Days", value: "Monday to Friday" },
  { icon: "🕔", label: "Time", value: "5:00pm – 7:00pm" },
  { icon: "👧", label: "Ages", value: "5–16" },
];

function QuranSchool() {
  return (
    <div className="pb-12">
      {/* HEADER */}
      <div className="bg-green-950 text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Quran School</h1>
        <p className="text-white/90 mt-4 max-w-2xl mx-auto leading-relaxed">
          Nimrah Education & Community Centre runs a daily Madrassa for children,
          providing quality Islamic education in a nurturing environment.
        </p>
      </div>

      {/* COURSES */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">Courses & Subjects</h2>
        <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-8"></div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map(({ icon, title, text }) => (
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
      </div>

      {/* CLASS DETAILS */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">Class Details</h2>
        <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-8"></div>

        <div className="grid gap-4 sm:grid-cols-3">
          {DETAILS.map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-white rounded-xl shadow p-5 border-t-4 border-green-700 text-center"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="font-semibold text-gray-800">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PARENT INFORMATION */}
      <div className="max-w-3xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">Parent Information</h2>
        <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-6"></div>
        <p className="text-gray-700 text-center leading-relaxed">
          Parents are welcome to speak to our teachers regarding their child's progress.
          Please contact us for more information.
        </p>
      </div>

      {/* REGISTER */}
      <div className="max-w-3xl mx-auto mt-12 px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-700 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Register / Enquire</h2>
          <p className="text-gray-700 mb-4">
            To register or enquire, please contact us on{" "}
            <span className="font-semibold">07307 535874</span>
          </p>
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

export default QuranSchool;