import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/prayer-times", label: "Prayer Times" },
  { to: "/events", label: "Events" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
  { to: "/quran-school", label: "Quran School" },
  { to: "/comittee", label: "Committee" },
  { to: "/volunteer", label: "Volunteer" },
];

function Navbar() {
  return (
    <nav className="bg-green-800 text-white px-6 py-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 self-center lg:self-auto">
        <img
          src="/nimrah-logo-horizontal.png"
          alt="Nimrah Education & Community Centre logo"
          className="h-16 w-auto"
        />
      </Link>

      {/* Links */}
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {LINKS.map(({ to, label }) => (
          <li key={to}>
            <Link
              className="hover:text-green-300 transition-colors duration-200"
              to={to}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;