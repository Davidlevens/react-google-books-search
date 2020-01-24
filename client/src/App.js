import React from "react";
import Nav from "./components/Nav";
import SearchBooks from "./pages/searchBooks";
import SaveBooks from "./pages/saveBooks";
import NoMatch from "./pages/noMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/searchBooks" component={SearchBooks} />
          <Route path="/saveBooks" component={SaveBooks} />
          <Route path="/noMatch" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
