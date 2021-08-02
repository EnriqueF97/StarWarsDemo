import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import { Row, Col } from "react-bootstrap";
import SectionList from "./components/SectionList";
import Vehicle from "./components/Starship";
import Species from "./components/Species";
import Planet from "./components/Planet";
import People from "./components/People";
import BottomNav from "./components/BottomNav";

export default class App extends Component {
  state = {
    currentSection: "/planets",
    starships: {},
    people: {},
    planet: {},
    species: {},
    item: {},
  };

  componentDidMount() {}

  handleSectionSelect = (currentSection) => {
    this.setState({ currentSection });
  };

  handleProductSelect = (item) => {
    this.setState({ item });
  };

  render() {
    const { currentSection, item } = this.state;

    return (
      <>
        <NavigationBar onSelect={this.handleSectionSelect} />

        <Row
          style={{
            background: "rgb(28, 28, 28)",
            minWidth: "100vw",
            minHeight: "80vh",
            padding: "5vh 20vw",
            color: "rgb(227, 227, 227)",
            margin: 0,
          }}>
          <Col xs={12} sm={12} md={12} lg={3}>
            <SectionList url={currentSection} onItemSelect={this.handleProductSelect} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={9}>
            {this.state.currentSection === "/planets" ? <Planet info={item} pic={item.name} /> : <></>}
            {this.state.currentSection === "/starships" ? <Vehicle info={item} pic={item.name} /> : <></>}
            {this.state.currentSection === "/people" ? <People info={item} pic={item.name} /> : <></>}
            {this.state.currentSection === "/species" ? <Species info={item} pic={item.name} /> : <></>}
          </Col>
        </Row>
        <BottomNav />
      </>
    );
  }
}
