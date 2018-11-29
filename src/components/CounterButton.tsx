import * as React from "react";

export interface CounterButtonState {
  counter: number;
}

export interface CounterButtonProps {
  buttonSymbol: string;
}

export default class CounterButton extends React.Component<CounterButtonProps,CounterButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decreaseCount() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return <button
        onClick={
          this.props.buttonSymbol === "+"
            ? this.increaseCount
            : this.decreaseCount
        }
      >
        {this.props.buttonSymbol}
      </button>;
  }
}
