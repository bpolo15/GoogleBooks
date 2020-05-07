//Requiring dependencies
import React from "react";
import "./style.css";
//Creating a funcitonal component called Jumbotron and passing in the props chilren
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}
//exporting the Jumbotron to be used elsewhere
export default Jumbotron;
