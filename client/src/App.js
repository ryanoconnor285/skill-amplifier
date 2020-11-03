import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './pages/landing/landing.page';
import Login from './pages/login/login.page';
import Register from './pages/register/register.page';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </Router>
  );
}

export default App;
