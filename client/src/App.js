import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/landing/landing.page";
import Login from "./pages/login/login.page";
import Register from "./pages/register/register.page";

import Navbar from "./components/navbar/navbar.component";
import Alert from "./components/alert/alert.component";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />{" "}
          <Route exact path="/login" component={Login} />{" "}
          <Route exact path="/register" component={Register} />{" "}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
