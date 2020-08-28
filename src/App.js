import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import QCM from './components/QCM';
import Login from './components/Login';
import Logout from './components/Logout';

const App = () => {

  return (
    <Router >
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/qcm"
          render={({ location }) =>
            localStorage.getItem('auth') === 'true' ?
              <Route exact path="/qcm" component={QCM} /> :
              <Redirect to={{ pathname: "/login" }} />
          }
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} /> 
        <Route component={({ location }) => (<p>404 Page Not Found </p>)} />
      </Switch>
    </Router>
  )
}
export default App;