import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/prayer-times", label: "Prayer Times" },
  { to: "/events", label: "Events" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="bg-green-950 text-white mt-20">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Brand */}
        <div className="max-w-xs">
          <h3 className="font-semibold text-lg">Nimrah Education & Community Centre</h3>
          <p className="text-green-300 text-sm mt-2">
            Serving the community of Levenshulme, Manchester.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="text-green-300 hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-green-900">
        <p className="max-w-5xl mx-auto px-6 py-4 text-center text-green-400 text-xs">
          © 2026 Nimrah Education & Community Centre. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;