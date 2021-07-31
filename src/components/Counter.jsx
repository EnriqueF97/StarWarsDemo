import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      //Make ajax - Execute function - Do something if props has changed!
    }
  }

  componentWillUnmount() {}

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <div></div>;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? (
      <span
        style={{
          padding: "0 0.4em",
          fontWeight: "bold",
          background: "orange",
          color: "black",
          borderRadius: "5px",
          margin: "0.2em",
        }}>
        Zero
      </span>
    ) : (
      <span
        style={{
          color: "white",
          padding: "0 0.4em",
          background: "blue",
          borderRadius: "5px",
          margin: "0.2em",
        }}>
        {value}
      </span>
    );
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span>{this.formatCount()}</span>
        <Button
          style={{ margin: "0.2em 0.2em" }}
          onClick={() => this.props.onIncrement(this.props.counter)}
          variant='secondary'>
          Increment
        </Button>
        <Button
          variant='danger'
          style={{ margin: "0.2em 0.2em" }}
          onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </Button>
      </div>
    );
  }
}
