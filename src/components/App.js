
import React from "react";
import './../styles/App.css';

const App = ({header,children,footer}) => {
  return (
    <div className="page-layout">
    <header className="page-header">
      {header}
    </header>
    
    <main className="page-content">
      {children}
    </main>
    
    <footer className="page-footer">
      {footer}
    </footer>
  </div>
  )
}

export default App
