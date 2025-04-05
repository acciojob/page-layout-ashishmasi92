
import React from "react";
import './../styles/App.css';

const App = ({header,children,footer}) => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{header}</h1>
<h2>{children}</h2>
<h3>{footer}</h3>
    </div>
  )
}

export default App
