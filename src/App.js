import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/alert";

import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken'

//Redux

import { Provider } from "react-redux";
import store from "./store";

if(localStorage.token){
  setAuthToken(localStorage.token)    
}
const App = () => {
  useEffect(()=>{
    store.dispatch(loadUser)
  },[])
  return(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert/>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
)};
export default App;
