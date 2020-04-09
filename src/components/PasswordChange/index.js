import React, {Component} from 'react';
import {FormControl, Button, Container, Col, Row} from 'react-bootstrap';
import {withFirebase} from '../Firebase';
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
    
    passwordOne:'',
    passwordTwo:'',
    error:null,
};
class PasswordChangeForm extends Component{
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};

    }
    onSubmit = event =>{
        const { passwordOne } = this.state;
        this.props.firebase
        .doPasswordUpdate(passwordOne).then(()=>{
            this.setState({...INITIAL_STATE});
        }).catch(error =>{
            this.setState({error});
        });
        event.preventDefault();
    };
    onChange = event =>{
        this.setState({[event.target.name]:event.target.value});
    };
    render(){
        const {passwordOne, passwordTwo, error} = this.state;
        const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
        return(
            <form onSubmit={this.onSubmit}>
                <Container>
                    <Row><Col><p style = {textStyle} className = "lead">Reset Password</p></Col></Row>
                    <Row className = "mt-4">
                        <Col>
                            <FormControl style = {searchBarStyle}
                                name="passwordOne"
                                value={passwordOne}
                                onChange={this.onChange}
                                type="password"
                                placeholder="New Password"/>
                        </Col>
                    </Row>
                    <Row className = "mt-4">
                        <Col>
                            <FormControl style = {searchBarStyle}
                                name="passwordTwo"
                                value={passwordTwo}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Confirm New Password"/>
                        </Col>
                    </Row>
                    <Row className = "mt-4">
                        <Col><Button block style={buttonStyle} variant = "info" disabled={isInvalid} type="submit">Reset My Password</Button></Col>
                    </Row>
                    <Row className = "mt-2">
                        <Col><p className = "text-white">{error && <p>{error.message}</p>}</p></Col>
                    </Row>
                </Container>
              
                
                
                
            </form>
        );

    }
}
export default withFirebase(PasswordChangeForm);
//updates local state using onChange handlers in the input fields.
//validates state before submitting a reuqest to change the password 
//by enabling or disabling the submit button