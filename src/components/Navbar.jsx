import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as PersonOutline } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon width="36px" height="36px" />
            <p>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon width="36px" height="36px" />
            <p>Offers</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutline width="36px" height="36px" />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
