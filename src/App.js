import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Students from "./component/students";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div class="topnav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/students">Students</Link>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/students" element={<Students />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
