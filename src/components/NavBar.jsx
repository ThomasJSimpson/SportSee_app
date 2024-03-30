import { React } from "react";
import { Link } from "react-router-dom";
import yogaIcon from "../assets/yoga-icon.svg";
import bikeIcon from "../assets/bike-icon.svg";
import swimIcon from "../assets/swim-icon.svg";
import fitnessIcon from "../assets/fitness-icon.svg";
import logoSportsee from "../assets/logo-sportsee.svg";
import nameSportsee from "../assets/name-sportsee.svg";

export default function NavBar({ children }) {
  return (
    <>
      <nav className="nav-bar_hzt">
        <div className="logo">
          <img style={{ marginRight: "10px" }} src={logoSportsee} alt="logoSportsee" />
          <img src={nameSportsee} alt="nameSportsee" />
        </div>

        <div className="nav-links">
          <Link className="" to={`/SportSee_app/`}>
            <p>Accueil</p>
          </Link>
          <p>Profil</p>
          <p>Réglages</p>
          <p>Communauté</p>
        </div>
      </nav>
      <div className="main-container">
        <nav className="nav-bar_vrt">
          <div className="nav-icons">
            <img src={yogaIcon} alt="yogaIcon" />
            <img src={bikeIcon} alt="bikeIcon" />
            <img src={swimIcon} alt="swimIcon" />
            <img src={fitnessIcon} alt="fitnessIcon" />
          </div>
          <span className="copyright">Copyright, SportSee 2020</span>
        </nav>
        <div className="main">{children}</div>
      </div>
    </>
  );
}
