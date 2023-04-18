import logomlinar from "./../assets/logomlinar.svg";
const Mlinar = () => {
  return (
    <div className="mlinar">
      <div className="headerml">
        <div className="headerml--left">
          <div className="headerml__logo">
            <img src={logomlinar} alt="Logomlinar" />
          </div>
          <div className="headerml__actions">
            <a className="headerml__actions" href="">
              Proizvodi
            </a>
            <a className="headerml__actions" href="">
              Lokacije
            </a>
            <a className="headerml__actions" href="">
              Karijere
            </a>
            <a className="headerml__actions" href="">
              Naša priča
            </a>
            <a className="headerml__actions" href="">
              Kontakt
            </a>
          </div>
        </div>
        <div className="headerml__lng">EN</div>
      </div>
      <div className="section__title">
        <div>
          <span className="section__title--yellow">Najukusniji</span> pekarski
        </div>
        <div>proizvodi u susjedstvu</div>
      </div>
      <div className="main">
        <div className="main__tags">Kruh</div>
        <div className="main__tags">Peciva</div>
        <div className="main__tags">Slano</div>
        <div className="main__tags">Slatko</div>
        <div className="main__tags">Burek</div>
        <div className="main__tags">Pizza</div>
        <div className="main__tags">Sendviči</div>
        <div className="main__tags">Salata</div>
        <div className="main__tags">HoReCa</div>
        <div className="main__tags">Pakirano</div>
        <div className="main__tags">Kolači</div>
        <div className="main__tags">Torte</div>
        <div className="main__tags">Prigodne torte</div>
      </div>
    </div>
  );
};
export default Mlinar;
