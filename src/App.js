import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import AdminPage from './components/Admin';
import Page from './components/Page';
import './App.css';
import * as ROUTES from './constants/routes';
import withAuthentication  from './components/Session/withAuthentication';
import Logo from './components/Logo';

const pageStyle = {
  border:"2px white solid",
  backgroundColor:"rgb(66, 66, 69, .8)",
  borderRadius:"20px",
  height:"100%",
  boxShadow:"5px 5px 5px black"
}
  const buttonStyle = {
      border:"2px white solid"
  }
  const textStyle={
    fontSize:"35px",
    color:"white"
  }

const App = () => (
  <div className = "App">
{/*<Page/>*/}


<Router>
    <div>
  <div style = {pageStyle}>
     <Navigation />
  </div>
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>

  </div>
  
);

export default withAuthentication(App);
