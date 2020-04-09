import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Container, Button, FormControl} from 'react-bootstrap';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Logo from '../Logo';

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
      border:"2px white solid"
  }
  const textStyle={
    fontSize:"28px",
    color:"white"
  }

const SignUpPage = () => (
  <div>
    
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div className = "Page" style = {pageStyle}>
        <form onSubmit={this.onSubmit}>
        <Container>
          <Row className = "mt-4">
            <Col><Logo/></Col>
          </Row>
          <Row className = "mt-2">
            <Col><p style={textStyle} className = "lead">Sign Up</p></Col>
          </Row>
          <Row className = "mt-1">
            <Col><FormControl style={searchBarStyle}
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          /></Col>
          </Row>
          <Row className = "mt-4">
              <Col><FormControl style={searchBarStyle}
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          /></Col>
          </Row>
          <Row className = "mt-4">
              <Col>
            <FormControl style={searchBarStyle}
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
            </Col>
          </Row>
          <Row className = "mt-4">
            <Col>
        <FormControl style={searchBarStyle}
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        /></Col>
          </Row>
          <Row className = "mt-4">
            <Col><Button block style={buttonStyle} variant="secondary" disabled={isInvalid} type="submit">Sign Up</Button></Col>
          </Row>
          <Row className = "mt-4">
            <Col>{error && <p>{error.message}</p>}</Col>
          </Row>
        </Container>
      </form>
      </div>
      
    );
  }
}

const SignUpLink = () => (
  <p className = "text-white">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };