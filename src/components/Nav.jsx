import headerLogo from '../assets/images/header-logo.svg';
import menu from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants/index.js';

const Nav = () => {
  return (
    <header className="header padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="fonts-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={menu} alt="menu icon" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
