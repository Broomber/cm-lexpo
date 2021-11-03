import logo from "../../assets/images/logo.png";

function Header(props) {

  const handleBurgerClick = (e) => {
    props.onBurgerClick(e.target.value);
  }

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__row">
          <div className="header__col header__col-logo">
            <div className="header-logo">
              <img src={logo} className="header-logo__image" alt="Cité Métiers L'expo" />
            </div>
            <div className="header-announce">
              <div className="header-announce__text">PROCHAINE EXPO 23-28 NOVEMBRE 2021</div>
            </div>
          </div>
          <div className="header__col header__col-burger">
            <button
              className={`burger ${props.isNavOpen ? 'burger_open': ''}`}
              onClick={handleBurgerClick}
            >
              Toggle menu
              <div className="burger__lines">
                <div className="burger__line"></div>
                <div className="burger__line"></div>
                <div className="burger__line"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
