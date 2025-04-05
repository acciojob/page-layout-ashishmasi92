import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



ReactDOM.render(<App
    header="Welcome to my website"
    children="This is the content of my website"
    footer= "© 2023 my website. All rigths reserved."
    />, document.getElementById("root"));
