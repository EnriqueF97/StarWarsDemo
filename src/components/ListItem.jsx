import React, { Component } from "react";
import { Nav } from "react-bootstrap";

export default class ListItem extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.setState(props);
  }

  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { item } = this.props;
    return (
      <Nav.Link
        style={{ textAlign: "center", lineHeight: "3vh", fontSize: "1.3em", color: "rgb(214, 210, 210)" }}
        onClick={() => this.props.onItemSelect(item)}>
        {item.name}
      </Nav.Link>
    );
  }
}
