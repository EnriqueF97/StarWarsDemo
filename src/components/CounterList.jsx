import React, { Component } from "react";
import Counter from "./Counter";
import { Button } from "react-bootstrap";

export default class CounterList extends Component {
  render() {
    const { onDelete, onIncrement, counters, onReset } = this.props;
    console.log("CounterList - Rendered");
    return (
      <div>
        <Button style={{ margin: "0.2em 0.2em" }} variant='primary' onClick={onReset}>
          Reset
        </Button>
        {counters.map((counter) => (
          <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} />
        ))}
      </div>
    );
  }
}
