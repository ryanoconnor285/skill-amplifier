import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './pages/landing/landing.page';
import Login from './pages/login/login.page';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
  );
}

export default App;
