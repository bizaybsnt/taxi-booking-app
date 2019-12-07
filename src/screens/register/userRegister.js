import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

class UserRegister extends Component {
  render() {
    return (
      <Form>
        <FromWrapper>
          <h2>
            <u>User Registration Form</u>
          </h2>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" required />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </FromWrapper>
      </Form>
    );
  }
}

export default UserRegister;
const FromWrapper = styled.div`
  width: 450px;
  justify-content: center;
  padding-top: 40px;
  margin: auto;
`;
