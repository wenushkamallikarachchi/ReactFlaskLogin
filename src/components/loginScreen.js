import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
function Normal() {
  const history = useHistory();

  const [stateData, setStateData] = useState([{}]);

  useEffect(() => {
    fetch("/login")
      .then((response) => response.json())
      .then((data) => setStateData(data));
  }, []);
  console.log(stateData);
  return (
    <div>
      <h1>Hii</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>{stateData.title}</h2>
    </div>
  );
}
export default Normal;
