
import React from "react";
import './../styles/App.css';

const App = ({header,children,footer}) => {
  return (
    <div>
        {/* Do not remove the main div */}
        <header>
<h1>{header}</h1>
        <p>{children}</p>
        </header>
        <footer>
          <p>{footer}</p>
        </footer>
    </div>
  )
}

export default App
