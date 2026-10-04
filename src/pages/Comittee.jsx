import { Link } from "react-router-dom";

const COMMITTEES = [
  {
    icon: "🕌",
    title: "General Committee",
    text: "The general committee oversees the day-to-day running of Nimrah Education & Community Centre, ensuring the masjid serves the community effectively.",
  },
  {
    icon: "🌟",
    title: "Youth Committee",
    text: "The youth committee organises activities and programmes for young people in the community, including the Youth Circle every Friday at 7:15pm.",
  },
  {
    icon: "🤲",
    title: "Death Committee",
    text: "The death committee provides support and assistance to families during bereavement, helping with funeral arrangements and Islamic burial proceedings.",
  },
];

function Committee() {
  return (
    <div className="pb-12">
      {/* HEADER */}
      <div className="bg-green-950 text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Committee</h1>
        <p className="text-white/90 mt-4 max-w-2xl mx-auto leading-relaxed">
          The teams who work together to serve Nimrah Education & Community Centre
          and the wider community.
        </p>
      </div>

      {/* COMMITTEES */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">Our Committees</h2>
        <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-8"></div>

        <div className="grid gap-4 md:grid-cols-3">
          {COMMITTEES.map(({ icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow p-5 border-t-4 border-green-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="max-w-3xl mx-auto mt-12 px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-700 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            For more information, please contact us on{" "}
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

export default Committee;