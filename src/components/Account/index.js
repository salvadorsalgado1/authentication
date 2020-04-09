
import React from 'react';
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import {Container, Row, Col, Table} from 'react-bootstrap';

const pageStyle = {
  border:"2px white solid",
  backgroundColor:"rgb(66, 66, 69, .8)",
  borderRadius:"20px",
  height:"100%",
  boxShadow:"5px 5px 5px black",
}
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <Container>
          <Row>
            <Col>
              <div style = {pageStyle}>
                <Table className = "mt-4" striped bordered hover variant="dark" responsive>
                  <thead>
                    <tr>
                      <th colspan="2">Account Information</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th>Name:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Username:</th>
                      <td>{}
                      </td>
                    </tr>
                    <tr>
                      <th>Email:</th>
                      <td>{authUser.email}</td>
                    </tr>
                    <tr>
                      <th>Phone Number:</th>
                      <td></td>
                    </tr>
                   
                  </tbody>

                </Table>
              
              </div>
            </Col>
          </Row>
          <Row className = "mt-4">
            <Col><PasswordForgetForm /></Col>
            <Col>
              <div style = {pageStyle}>
              <PasswordChangeForm />
              </div>
            </Col>
          </Row>
        </Container>
        
        <div>
          
        </div>


     
      
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);