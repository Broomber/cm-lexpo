
import NavDecoration from '../Decoration/NavDecoration';

function Nav(props) {
  return (
    <div
      className={`nav ${props.isNavOpen ? 'nav_open': ''}`}
    >
      <div className="nav__inner">
        <nav className="nav__list">
          <a href="#" className="nav__link">C’est quoi le questionnaire d’intérêt?</a>
          <a href="#" className="nav__link _active">Quel métier est fait pour toi?</a>
          <a href="#" className="nav__link">Planifie ta visite</a>
        </nav>
        <div className="nav__decoration">
          <NavDecoration />
        </div>
      </div>
    </div>
  );
}

export default Nav;
