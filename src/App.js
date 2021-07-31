import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import CounterList from "./components/CounterList";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
    // Posible uso -> this.state = this.props.something
  }

  componentDidMount() {
    // After component is rendered into dom, perfect place to make ajax calls
    // this.setState({})
    console.log("App - Mounted");
  }
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: newCounters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavigationBar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
        <main className='container'>
          <CounterList
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}
