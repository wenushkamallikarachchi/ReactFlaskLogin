import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
function Landing() {
  const history = useHistory();
  const navToNewACC = () => {
    history.push("/CreateNewAccount");
  };
  const navToLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <h1>Hello login</h1>
      <h1>Hii Im a</h1>
      <button onClick={navToNewACC}>Create a account</button>
      <button onClick={navToLogin}>Login</button>
    </div>
  );
}
export default Landing;
