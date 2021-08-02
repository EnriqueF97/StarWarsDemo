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
    product: {},
  };

  componentDidMount() {
    //make api calls for everything and save them in state individually
    try {
      // axios.get(`https://swapi.dev/api/starships/?format=json`).then((res) => {
      //   const starships = res.data.results;
      //   console.log("ships", starships);
      //   this.setState({ starships });
      // });
      // axios.get(`https://swapi.dev/api/people/?format=json`).then((res) => {
      //   const people = res.data.results;
      //   this.setState({ people });
      // });
      // axios.get(`https://swapi.dev/api/planets/?format=json`).then((res) => {
      //   const planets = res.data.results;
      //   this.setState({ planets });
      // });
      // axios.get(`https://swapi.dev/api/species/?format=json`).then((res) => {
      //   const species = res.data.results;
      //   this.setState({ species });
      // });
      //console.log("Initial fetch complete.", this.state.starships[0]);
    } catch (error) {
      console.error(error);
    }
  }

  handleSectionSelect = (select) => {
    console.log("App - handleSelection", select);
    this.setState({ currentSection: select });
  };

  handleProductSelect = (item) => {
    console.log("Selected item", item.name);
    this.setState({ product: item });
  };

  render() {
    const { currentSection, product } = this.state;

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
            {this.state.currentSection === "/planets" ? <Planet info={product} pic={product.name} /> : <></>}
            {this.state.currentSection === "/starships" ? (
              <Vehicle info={product} pic={product.name} />
            ) : (
              <></>
            )}
            {this.state.currentSection === "/people" ? <People info={product} pic={product.name} /> : <></>}
            {this.state.currentSection === "/species" ? <Species info={product} pic={product.name} /> : <></>}
          </Col>
        </Row>
        <BottomNav />
      </>
    );
  }
}
