import { Image } from "react-bootstrap";
import navbarStyles from "./Navbar.module.scss";
import logo from "../images/logo.svg";

import PrimaryButton from "../components/PrimaryButton";

function Navbar() {
  return (
    <>
      <nav
        class={`${navbarStyles.navbar} navbar navbar-expand-lg navbar-light bg-transparent  py-4`}
      >
        <a
          class={`${navbarStyles.navbarBrand} navbar-brand pl-5 ml-4 `}
          href="#"
        >
          <Image
            src={logo}
            alt=""
            class={`${navbarStyles.navbar} px-2 mx-2 `}
          />
          Generator Dietetyczny
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto mr-5 pr-4">
            <a class="nav-item nav-link active mx-1" href="#">
              O programie <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link mx-1" href="#">
              Zespół
            </a>
            <a class="nav-item nav-link mx-1" href="#">
              Dietetycy
            </a>
            <a class="nav-item nav-link disabled mx-1" href="#">
              Kontakt
            </a>
            <PrimaryButton size="sm">Zarejestruj się</PrimaryButton>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
