import * as React from "react";

export interface HelloProps {
  name: string;
}

export interface HelloState {
  counter: number;
  enabled: boolean;
}

export default class Hello extends React.Component<HelloProps, HelloState> {

  render() {
    return (
      <h1>
        Hello {this.props.name}
      </h1>
    );
  }
}
