import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Menu/>
      <Switch>
        <Route exact path="/" render={() => <Home/>} />
        <Route path="/about" render={() => <About/>} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
