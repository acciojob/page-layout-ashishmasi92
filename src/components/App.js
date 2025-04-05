
import React from "react";
import './../styles/App.css';

const App = (props) => {
  return (
    <div>
        {/* Do not remove the main div */}
        <header>
<h1>{props.head}</h1>
        <p>{props.para}</p>
        </header>
        <footer>
          <p>{props.foot}</p>
        </footer>
    </div>
  )
}

export default App
