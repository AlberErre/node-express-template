import * as React from "react";
import NumberDisplayer from "./NumberDisplayer";

export interface NumberPickerState {
  counter: number;
}

export default class NumberPicker extends React.Component<{}, NumberPickerState> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increaseNumber = this.increaseNumber.bind(this);
    this.decreaseNumber = this.decreaseNumber.bind(this);
  }

  increaseNumber() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decreaseNumber() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return <div className="number-picker">
      <button className="number-picker-buttons" onClick={this.increaseNumber}>
          +
        </button>
      <span className="number-picker-label">{this.state.counter}</span>
      <button className="number-picker-buttons" onClick={this.decreaseNumber}>
          -
        </button>
      </div>;
  }
}
