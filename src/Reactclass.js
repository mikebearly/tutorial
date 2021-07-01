import React, { Component } from "react";
class Reactclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello World",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    if (this.state.text === "Hello World") {
      this.setState({ text: "New world" });
    } else {
      this.setState({ text: "Hello World" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h4>{this.state.text}</h4>
        <button onClick={this.handleChange}>Change Text</button>
      </React.Fragment>
    );
  }
}

export default Reactclass;
