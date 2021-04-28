import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
function Model() {
  const history = useHistory();
  const modelName= localStorage.getItem("model_name")
  const displayModel = () => {
    history.push("/camera");
  };
  
  return (
    <div>
      <h1>Hii</h1>
      <h1>Model name is :{modelName}</h1>
      <button onClick={displayModel}>hello Model</button>
    </div>
  );
}
export default Model;
