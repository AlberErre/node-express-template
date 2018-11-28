import * as React from "react";

export interface HelloProps {
  name: string;
}

export interface HelloState {
  counter: number;
  enabled: boolean;
}

export default class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      counter: 10,
      enabled: false
    };
  }

  render() {
    return (
      <h1>
        Hello {this.props.name} - {this.state.counter}
      </h1>
    );
  }
}
