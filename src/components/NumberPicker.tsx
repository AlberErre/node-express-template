import * as React from "react";
import NumberDisplayer from "./NumberDisplayer";

export interface NumberPickerState {
  pickedNumber: number;
}

export default class NumberPicker extends React.Component<{}, NumberPickerState> {
  constructor(props) {
    super(props);
    this.state = {
      pickedNumber: 0
    };

    this.increasePicker = this.increasePicker.bind(this);
    this.decreasePicker = this.decreasePicker.bind(this);
  }

  increasePicker() {
    this.setState({
      pickedNumber: this.state.pickedNumber + 1
    });
  }

  decreasePicker() {
    this.setState({
      pickedNumber: this.state.pickedNumber - 1
    });
  }

  render() {
    return <div>
      <button>+</button>
      <span>0</span>
      <button>-</button>
    </div>;
  }
}
