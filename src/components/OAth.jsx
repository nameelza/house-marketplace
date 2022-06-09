import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

function OAth() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-in" ? "in" : "up"} with</p>
      <button className="socialIconDiv">
        <img src={googleIcon} className="socialIconImg" alt="google icon" />
      </button>
    </div>
  );
}

export default OAth;
