//Require dependencies 
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//rendering the App to the root element on the html page
ReactDOM.render(<App />, document.getElementById("root"));
//register serviceworker
registerServiceWorker();
