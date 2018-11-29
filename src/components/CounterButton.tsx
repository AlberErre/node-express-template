import * as React from "react";

export interface CounterButtonState {
  counter: number;
}

export default class CounterButton extends React.Component <{},CounterButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return <button onClick={this.increaseCount}>
        {this.state.counter}
      </button>;
  }
}
