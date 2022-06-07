import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg"
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg"
import { ReactComponent as PersonOutline } from "../assets/svg/personOutlineIcon.svg"

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <h1>Navbar</h1>
    </>
  );
}

export default Navbar;
