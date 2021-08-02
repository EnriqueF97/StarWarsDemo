import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import axios from "axios";

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
      console.log("Detected url change");
      try {
        this.setState({ url: this.props.url });
        axios.get(`https://swapi.dev/api${this.props.url}/?format=json`).then((res) => {
          const data = res.data.results;
          console.log("componentUpdate - SectionList", data);
          this.setState({ data });
          this.props.onItemSelect(data[0]);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  getItemData = (myObject) => {
    for (var key in myObject) {
      return myObject[key];
    }
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
            <Nav.Link
              style={{ textAlign: "center", lineHeight: "3vh", fontSize: "1.3em", color: "lightGray" }}
              key={item.url}
              onClick={() => this.props.onItemSelect(item)}>
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    );
  }
}
