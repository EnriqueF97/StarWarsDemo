import React, { Component } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

export default class NavigationBar extends Component {
  state = {
    sections: [
      { url: "/planets", name: "Planetas", key: "planets" },
      { url: "/starships", name: "Naves espaciales", key: "starships" },
      { url: "/people", name: "Personajes", key: "people" },
      { url: "/species", name: "Especies", key: "species" },
    ],
  };

  render() {
    return (
      <Navbar bg='dark' variant='dark' style={{ width: "100vw" }}>
        <Container>
          <Nav className='me-auto'>
            <Navbar.Brand>
              <Image src={`/images/Logo.png`} alt='Star Wars' height={"30cm"}></Image>
            </Navbar.Brand>
            {this.state.sections.map((section) => (
              <Nav.Link
                style={{ fontSize: "1.5em" }}
                key={section.key}
                onClick={() => this.props.onSelect(section.url)}>
                {section.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
