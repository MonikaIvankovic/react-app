import logo from "./../assets/logo.png";
import hamburger from "./../assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <img className="header__logo" src={logo} alt="Logo" />
        </div>
        <div className="header__actions">
          <nav className="header__navigation">
            <a className="header__navigation__item" href="/">
              Home
            </a>
            <a className="header__navigation__item" href="/exe">
              Excercises
            </a>
            <a className="header__navigation__item" href="/ispit">
              CSS Ispit
            </a>
            <a className="header__navigation__item" href="/mlinar">
              Mlinar
            </a>
            <a className="header__navigation__item" href="/varijable">
              Varijable
            </a>
            <a className="header__navigation__item" href="/petlje">
              Petljee
            </a>
          </nav>
          <div className="header__navigation">MI</div>
        </div>
        <div className="header__hamburger">
          <img src={hamburger} alt="hamburger" />
          <div className="header__hamburger__actions"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
