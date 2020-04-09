
import React from 'react';
import {Button} from 'react-bootstrap';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button block variant = "danger" type="button" onClick={firebase.doSignOut}>
    Sign&nbsp;Out
  </Button>
);

export default withFirebase(SignOutButton);