import { useState, Link } from "react";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => setEmail(e.taget.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          {/* <Link to="/sign-in" className="forgotPasswordLink">Back to Sign In</Link> */}

          <div className="signInbar">
            <div className="signInText">Send Reset Link</div>
            <button>
              <ArrowRightIcon fill="#ffffff" width="34px" heigth="34px" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
