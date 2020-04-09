import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, Col, Row, Container, Button, FormControl} from 'react-bootstrap';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Logo from '../Logo';


const PasswordForgetPage = () => (
  <div>
    
    <PasswordForgetForm />
  </div>
);
const pageStyle = {
  border:"2px white solid",
  backgroundColor:"rgb(66, 66, 69, .8)",
  borderRadius:"20px",
  height:"100%",
    boxShadow:"5px 5px 5px black"

}
const searchBarStyle = {
  
  border:"2px white solid",
  backgroundColor:"rgb(66,66,66, .7",
  color:"white"
  }
  const buttonStyle = {
      border:"1px white solid"
  }
  const textStyle={
    fontSize:"25px",
    color:"white"
  }
const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <div className = "Page" style={pageStyle}>
        <form onSubmit={this.onSubmit}>
        <Container>
          <Row className = "mt-2">
            <Col><p style={textStyle} className="lead">Forget your password?</p></Col>
          </Row>
          <Row className = "mt-2">
            <Col>
            <FormControl style={searchBarStyle}
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          /></Col>
          </Row>
          <Row className = "mt-4">
            <Col><Button block style={buttonStyle} variant = "secondary" disabled={isInvalid} type="submit">Reset My Password</Button></Col>
          </Row>
          <Row className = "mt-4 mb-4">
            <Col><p className = "text-white lead">{error && <p>{error.message}</p>}</p></Col>
          </Row>
        </Container>
        </form>
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };