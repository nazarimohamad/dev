import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Career from "./Career";
import Technology from "./Technology";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" render={() => <Home/>} />
        <Route path="/about" render={() => <About/>} />
        <Route path="/career" render={() => <Career/>} />
        {/* <Route path="/technology" render={() => <Technology/>} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default Main;
