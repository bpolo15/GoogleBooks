//requiring dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
//creating an ES6 class called Nav and including Component from the react
class Nav extends Component {
  //We are setting up our state with two values 
  state = {
    open: false,
    width: window.innerWidth
  };
//This function creates a new variable that changes the window width and if the screen is a certain size it will update the the state with the new information 
  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };
//This sets the state to have open equal false if the function is called 
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };
//componentDidMount waits for everything to render before calling the function, here it is listening for a resize and updating accordingly
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }
//this removes the event listener for resize and width updating for the screen
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }
//renders navbar with links and includes all the window resizing objects
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        {/*Google books is linked to the route route */}
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/*This is saying if the screen is smaller than 991 we will use the collapse class for the navbar, and if it is larger we will not use the class collapse - how it will display based on different screen size  the button is for hiding/showing the nav bar*/}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
              {/* The search link will take you to the search page, and the save link will take you to the saved page*/}
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
//exporting Nav to be used elsewhere
export default Nav;
