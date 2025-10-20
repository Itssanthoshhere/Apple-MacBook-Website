import { navLinks } from "../constants";

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <header>
      <nav>
        <img
          src="/logo.svg"
          alt="Apple logo"
          className="cursor-pointer"
          onClick={scrollToTop}
        />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="gap-3 flex-center">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
