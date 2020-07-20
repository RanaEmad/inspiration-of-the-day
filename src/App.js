import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleImage from "./pages/SingleImage/SingleImage";
import RateLimitExceeded from "./pages/RateLimitExceeded/RateLimitExceeded";
import Photographer from "./pages/Photographer/Photographer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/single-image/:id" component={SingleImage} />
            <Route path="/photographer/:username" component={Photographer} />
            <Route path="/rate-limit-exceeded" exact component={RateLimitExceeded} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
