import headerLogo from "../assets/images/logo2-removebg-preview.png";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index.js";
const Nav = () => {
  return (
    <header className="padding-x py-2 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={25}
            className="m-0 w-[129px] h-[89px]"
          />
        </a>
        <ul className="my-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
