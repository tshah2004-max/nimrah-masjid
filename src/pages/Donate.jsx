const FUNDS = [
  { icon: "🏗️", title: "Building Improvements", text: "Refurbishment projects" },
  { icon: "🔧", title: "Maintenance & Repairs", text: "Essential upkeep" },
  { icon: "💡", title: "Running Costs", text: "Daily operational and utility costs" },
  { icon: "🎓", title: "Educational Programmes", text: "Learning for all ages" },
  { icon: "👨‍👩‍👧", title: "Children, Youth & Families", text: "Resources and facilities" },
];

const BANK = [
  { label: "Bank", value: "Barclays" },
  { label: "Account Name", value: "Nimrah Education & Community Centre" },
  { label: "Sort Code", value: "20-55-41" },
  { label: "Account Number", value: "20614351" },
];

function Donate() {
  return (
    <div className="pb-12">
      {/* HEADER */}
<div className="bg-green-950 text-white py-12 px-6 text-center">
  <h1 className="text-3xl md:text-4xl font-bold">
    Support Nimrah Education & Community Centre
  </h1>
</div>

{/* INTRO */}
<div className="max-w-3xl mx-auto mt-12 px-6 text-center">
  <h2 className="text-3xl font-bold text-green-900 mb-2">
    Donate to Support Your Masjid and Community
  </h2>
  <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-6"></div>
  <p className="text-gray-700 leading-relaxed mb-3">
    Nimrah Education & Community Centre serves as a place of worship, learning, and
    community support for people of all ages. Through your generosity, we are able to
    maintain our facilities, provide educational programmes, and continue serving the
    local community.
  </p>
  <p className="text-gray-700 leading-relaxed">
    Every contribution, no matter the amount, helps us fulfil our mission and sustain
    the services that benefit worshippers and families throughout the year.
  </p>
</div>

      {/* WAYS TO DONATE */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">Ways to Donate</h2>
        <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-8"></div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow p-5 border-t-4 border-green-700 flex flex-col">
  <div className="text-3xl mb-2">💻</div>
  <h3 className="font-semibold text-gray-800 mb-1">Online Donations</h3>
  <p className="text-gray-600 text-sm leading-relaxed mb-4">
    Donate securely online by card using our SumUp payment page.
  </p>
  <a
    href="https://pay.sumup.com/b2c/QF5B9XR4"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-auto inline-block text-center bg-green-700 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
  >
    Donate Online
  </a>
</div>

          <div className="bg-white rounded-xl shadow p-5 border-t-4 border-green-700">
            <div className="text-3xl mb-2">💳</div>
            <h3 className="font-semibold text-gray-800 mb-1">In Person</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              In-person card donations can be made using existing Square and SumUp terminals.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-5 border-t-4 border-green-700">
            <div className="text-3xl mb-2">🏦</div>
            <h3 className="font-semibold text-gray-800 mb-1">Bank Transfer</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Details are in the section below.
            </p>
          </div>
        </div>
      </div>

      {/* BANK DETAILS */}
      <div className="max-w-3xl mx-auto mt-12 px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-700">
          <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">
            Donate by Bank Transfer
          </h2>
          <dl className="divide-y divide-gray-100">
            {BANK.map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-4 py-3">
                <dt className="font-semibold text-gray-800">{label}</dt>
                <dd className="text-gray-700 text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* WHAT DONATIONS FUND */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-2">
          Your Donations Help Fund
        </h2>
        <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-8"></div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FUNDS.map(({ icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow p-5 border-t-4 border-green-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTINUOUS REWARD */}
      <div className="bg-green-950 text-white mt-12 py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">A Continuous Reward</h2>
        <p className="text-xl italic max-w-2xl mx-auto leading-relaxed">
          "When a person dies, all their deeds come to an end except three: ongoing charity,
          beneficial knowledge, or a righteous child who prays for them."
        </p>
        <p className="text-green-300 mt-2 text-sm">The Prophet Muhammad ﷺ (Muslim)</p>
        <p className="text-white/90 mt-6 max-w-2xl mx-auto leading-relaxed">
          By supporting Nimrah Education & Community Centre, you contribute towards a place
          where worship, education, and community service continue for the benefit of many,
          earning reward for years to come.
        </p>
      </div>

      {/* THANK YOU */}
      <div className="max-w-3xl mx-auto mt-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-2">Thank You</h2>
        <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-6"></div>
        <p className="text-gray-700 leading-relaxed mb-3">
          We sincerely thank all donors, volunteers, and supporters for their continued
          generosity. Your support helps ensure that Nimrah Education & Community Centre
          remains a welcoming place for prayer, learning, and community development for
          generations to come.
        </p>
        <p className="text-gray-800 font-semibold">
          May Allah reward you abundantly and accept your contribution. Ameen.
        </p>
      </div>
    </div>
  );
}

export default Donate;