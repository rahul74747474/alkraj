import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/", label: "Properties" },
  { to: "/", label: "About Us" },
  { to: "/", label: "Contact" },
];

export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-background/60 border-b border-white/40 dark:border-border/60">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="font-semibold text-primary">
          Alkraj Developers
        </Link>
        <ul className="flex items-center gap-2 md:gap-6">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm transition-colors duration-200 hover:text-primary-foreground hover:bg-primary/80 ${
                    isActive ? "bg-primary text-primary-foreground" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
