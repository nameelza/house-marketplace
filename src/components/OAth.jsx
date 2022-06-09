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
      <p>Sign {location.pathname === "/sign-in" ? "In" : "Up"}</p>
    </div>
  );
}

export default OAth;
