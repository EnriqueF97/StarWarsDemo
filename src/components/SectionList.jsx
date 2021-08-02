import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import axios from "axios";
import ListItem from "./ListItem";

export default class SectionList extends Component {
  state = {
    url: "",
    data: [],
  };

  constructor(props) {
    super(props);
    // Posible uso -> this.state = this.props.something
    this.state.url = this.props.url;
  }

  componentDidMount() {
    try {
      axios.get(`https://swapi.dev/api${this.props.url}/?format=json`).then((res) => {
        const data = res.data.results;
        this.setState({ data });
      });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.state.url) {
      try {
        console.log("fetching data...");
        this.setState({ url: this.props.url });
        axios.get(`https://swapi.dev/api${this.props.url}/?format=json`).then((res) => {
          const data = res.data.results;
          this.setState({ data });
          this.props.onItemSelect(data[0]);
        });

        console.log("data fetched!");
      } catch (error) {
        console.error(error);
      }
    }
  }

  handleProductSelect = (item) => {
    this.props.onItemSelect(item);
  };

  render() {
    return (
      <div
        style={{
          padding: "1em",
          background: "rgb(38, 38, 38)",
          borderRadius: "15px",
          margin: "0 0 1em 0",
        }}>
        <Nav defaultActiveKey='/home' className='flex-column'>
          {this.state.data.map((item) => (
            <ListItem key={item.url} item={item} onItemSelect={(item) => this.handleProductSelect(item)} />
          ))}
        </Nav>
      </div>
    );
  }
}
