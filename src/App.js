import React from "react";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Navbar from "./containers/navbar/Navbar";
import Slider from "./containers/slider/Slider";
import Footer from "./containers/footer/Footer";
import { Switch, Route, withRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" exact component={Slider} />

        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
