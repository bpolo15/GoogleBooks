//Requiring dependencies
import React from "react";
//We are declaring a funcitonal component called Card, and passing in the props title, icon, and children
//We are then creating a card layout using bootstrap models and passing in the information for icon, title, and children
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/*displays favicon icon and title passed in through props */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/*creating a generic box called 'children' to be created and passed in later */}
      <div className="card-body">{children}</div>
    </div>
  );
}
//exporting the card component 
export default Card;
