import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/home";
import Nav from "./components/nav";


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
