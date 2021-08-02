import React, { Component } from "react";

export default class DisplayItem extends Component {
  state = {
    data: this.props.data,
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    //const data = this.state.data;

    return <></>;
  }
}
