import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class NavigationBar extends Component {
  state = {};

  render() {
    console.log("Navbar - Rendered");
    return (
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav className='me-auto'>
            <Navbar.Brand href='#'>Total counters</Navbar.Brand>
            <Navbar.Text>{this.props.totalCounters}</Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
