import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import driverService from '../../services/driverService';

class DriverRegister extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const query = {
      full_name: data.get('full_name'),
      email: data.get('email'),
      license_no: data.get('license_no'),
      taxi_no: data.get('taxi_no'),
      phone: data.get('phone'),
      password: data.get('password')
    };

    driverService.register(query).then(res => {
      alert(res.success || res.err);
      window.location.reload();
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FromWrapper>
          <h2>
            <u>Driver Registration Form</u>
          </h2>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="full_name"
              placeholder="Enter Full Name"
              required
            />
          </Form.Group>

          <Form.Group controlId="license">
            <Form.Label>License Number</Form.Label>
            <Form.Control
              type="text"
              name="license_no"
              placeholder="Enter License Number"
              required
            />
          </Form.Group>

          <Form.Group controlId="taxiNum">
            <Form.Label>Taxi Number</Form.Label>
            <Form.Control
              type="text"
              name="taxi_no"
              placeholder="Enter Taxi Number"
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

export default DriverRegister;
const FromWrapper = styled.div`
  width: 450px;
  justify-content: center;
  padding-top: 40px;
  margin: auto;
`;
