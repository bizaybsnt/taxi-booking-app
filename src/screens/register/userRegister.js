import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import userService from '../../services/userService';

class UserRegister extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const query = {
      full_name: data.get('full_name'),
      email: data.get('email'),
      phone: data.get('phone'),
      password: data.get('password')
    };

    userService.register(query).then(res => {
      alert(res.sucess || res.err);
      window.location.reload();
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FromWrapper>
          <h2>
            <u>User Registration Form</u>
          </h2>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="full_name"
              placeholder="Enter full name"
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter phone number"
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
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
