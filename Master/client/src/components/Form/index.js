//Requiring dependencies 
import React from "react";
//Creating a functional component and passing in the props q, handleInputChange, and handleFormSubmit
function Form({ q, handleInputChange, handleFormSubmit }) {
  //Here we are setting up our form to inlcude a label called Book, and an input box called title and the value that is being entered will be saved in the q variable. There is also a onChange event that will take the inputed data and pass it through handleInputChange to be used later
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}
//Above there is also a button with an event listener called onClick that will look for the click of the button and fire off the handleFormSubmit function that is in a different file

//Exporting the compontent Form to be used elsewhere
export default Form;
