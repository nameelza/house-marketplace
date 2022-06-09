import { useLocation, useNavigate } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

function OAth() {
  return (
    <>
      <h1>OAth</h1>
    </>
  );
}

export default OAth;
