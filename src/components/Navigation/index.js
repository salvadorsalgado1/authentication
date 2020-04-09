import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Col, Row, Container} from 'react-bootstrap';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
const pageStyle = {
  border:"2px white solid",
  backgroundColor:"rgb(66, 66, 69, .8)",
  borderRadius:"20px",
  height:"100%",
  boxShadow:"5px 5px 5px black",
}
const buttonStyle = {
  border:"1px white solid"
}

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div >
  <Container>
    <Row className = "mt-4 mb-4">
      <Col><Link to={ROUTES.LANDING}><Button block variant = "primary">Landing</Button></Link></Col>
      <Col><Link to={ROUTES.HOME}><Button block variant = "secondary">Home</Button></Link></Col>
      <Col><Link to={ROUTES.ACCOUNT}><Button block variant="info">Account</Button></Link></Col>
      <Col><SignOutButton /></Col>
    </Row>
  </Container>


  </div>
 
);

const NavigationNonAuth = () => (
  <div>
    <Container>
      <Row className = "mt-4 mb-4">
        <Col><Link to={ROUTES.LANDING}><Button style={buttonStyle} block variant = "primary">Landing</Button></Link></Col>
        <Col><Link to={ROUTES.SIGN_IN}><Button style={buttonStyle} block variant = "secondary">Sign In</Button></Link></Col>
      </Row>
    </Container>
    
    
  </div>
  
  
);

export default Navigation;