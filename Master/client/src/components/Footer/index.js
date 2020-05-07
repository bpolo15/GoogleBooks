//Requiring dependencies
import React from "react";
//Here we are creating a functional component called Footer. We are then using a bootstrap footprint to create a footer to be used later.
//The footer is simple and says "Proudly built uding React.js"
function Footer() {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}
//We are exporting the footer to be used later
export default Footer;
