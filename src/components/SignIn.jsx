import { useState } from "react";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputData;

  const onChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p>Welcome back!</p>
        </header>
        <main>
          <form>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
          </form>
        </main>
      </div>
    </>
  );
}

export default SignIn;
