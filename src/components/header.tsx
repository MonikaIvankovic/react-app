import logo from "./../assets/logo.jfif";
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
            <a className="header__navigation__item" href="">
              Home
            </a>
            <a className="header__navigation__item" href="">
              About us
            </a>
            <a className="header__navigation__item" href="">
              Activities
            </a>
            <a className="header__navigation__item" href="">
              Excercises
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
