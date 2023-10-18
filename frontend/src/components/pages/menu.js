import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHSquare } from "@fortawesome/free-solid-svg-icons";
import NavbarLinks from "./navbarLinks";
import "./menu.css";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div id="sticky-wrapper" className="sticky-wrapper">
      <section
        className="navbar navbar-default navbar-static-top"
        role="navigation"
      >
        <div className="container d-flex flex-nowrap">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>
            {/*lOGO TEXT HERE*/}
            <Link to="/" className="navbar-brand">
              <FontAwesomeIcon
                icon={faHSquare}
                className="fa"
              ></FontAwesomeIcon>
              ealth Center
            </Link>
          </div>
          {/*<!-- MENU LINKS -->*/}
          <div className="collapse navbar-collapse show">
            <NavbarLinks></NavbarLinks>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Menu;
