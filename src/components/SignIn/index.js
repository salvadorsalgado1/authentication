import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {Card, Col, Row, Container, Button, FormControl} from 'react-bootstrap';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Logo from '../Logo';
import PasswordForget from '../PasswordForget/index'

const pageStyle = {
  border:"2px white solid",
  backgroundColor:"rgb(66, 66, 69, .8)",
  borderRadius:"20px",
  height:"100%",
  boxShadow:"5px 5px 5px black",
  
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
  
const SignInPage = () => (
  <div>
    
    <SignInForm val = {<SignInGoogle/>} val2={<SignUpLink />}/>
    
   {/*<PasswordForgetLink /> */} 
   {/* <SignUpLink />*/} 
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className = "Page" style={pageStyle}>
      <form onSubmit={this.onSubmit}>
      <Container>
        <Row className=" mt-4">
          <Col><p style={textStyle} className = "lead">Sign In</p></Col>
        </Row>
        <Row className = "mt-2">
          <Col><Logo/></Col>
        </Row>
        <Row  className="mt-4">
          <Col className = "d-flex justify-content-center">  
            <FormControl style={searchBarStyle}
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"/>
          </Col>
        </Row>
        <Row  className="mt-2">
          <Col className = "d-flex justify-content-center"> 
            <FormControl style={searchBarStyle}
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"/>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col >  
            <Button block variant="secondary" style={buttonStyle} disabled={isInvalid} type="submit">Sign In</Button>
          </Col>
        </Row>
        <Row className = "mt-2">
          <Col><p className = "text-white">{error && <p>{error.message}</p>}</p></Col>
        </Row>
        <Row className="mt-2">
          <Col className = "d-flex justify-content-center"><SignInGoogle block/></Col>
        </Row>
        <Row className = "mt-4">
          <Col><PasswordForgetLink /></Col>
        </Row>
        <Row>
          <Col><SignUpLink /></Col>
        </Row>

      </Container>
      </form>
      </div>
     
    
    );
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
    .doSignInWithGoogle()
    .then(socialAuthUser => {
    this.setState({ error: null });
    this.props.history.push(ROUTES.HOME);
    })
    .catch(error => {
    this.setState({ error });
    });
    event.preventDefault();
    };

  render() {
    const { error } = this.state;
    return (
        <form onSubmit={this.onSubmit}>
        
       <Button className ="d-flex align-items-center" type="submit"><i className="fa fa-google fa-2x"></i>&nbsp;&nbsp;Sign In with Google!</Button>
     <p>{error && <p>{error.message}</p>}</p>
       
     </form>
  
     
   );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            roles: [],
          })
          .then(() => {
            this.setState({ error: null });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Facebook</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInTwitterBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithTwitter()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            roles: [],
          })
          .then(() => {
            this.setState({ error: null });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
    
      <form onSubmit={this.onSubmit}>
         
        <button type="submit">Sign In with Twitter</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
  withRouter,
  withFirebase,
)(SignInFacebookBase);

const SignInTwitter = compose(
  withRouter,
  withFirebase,
)(SignInTwitterBase);

export default SignInPage;

export { SignInForm, SignInGoogle, SignInFacebook, SignInTwitter };