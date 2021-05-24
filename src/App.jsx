import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/navbar" exact component={NavBar} />

      </Router>
    

      <Footer />
    </div>
  );
}

export default App;
