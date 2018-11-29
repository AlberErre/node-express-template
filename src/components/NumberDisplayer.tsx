import * as React from "react";

export interface NumberDisplayerProps {
  numberToDisplay: number;
}

export default class NumberDisplayer extends React.Component<NumberDisplayerProps,{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.numberToDisplay}</div>;
  }
}
