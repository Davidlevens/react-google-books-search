import React, { Component } from "react";
import Nav from "./components/Nav";
import SearchBooks from "./pages/searchBooks";
import SaveBooks from "./pages/saveBooks";
import NoMatch from "./pages/noMatch";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/searchBooks" component={SearchBooks} />
            <Route path="/saveBooks" component={SaveBooks} />
            <Route path="/noMatch" component={NoMatch} />
            <Redirect from="/" exact to="/searchBooks" />
            {/* <Redirect to="/noMatch" /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
