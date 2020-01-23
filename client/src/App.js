import React from "react";
import Nav from "./components/Nav";
import Books from "./pages/searchBooks";
import SavedBooks from "./pages/saveBooks";
import NoMatch from "./pages/noMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/searchBooks" component={Books} />
          <Route exact path="/saveBooks" component={SavedBooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
