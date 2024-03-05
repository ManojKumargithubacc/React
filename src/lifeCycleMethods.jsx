import React, { Component } from "react";

export class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      uname: "",
    };
  }
  componentDidMount() {
    document.title = `${this.state.count}`;
  }
  //Conditionally running
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Document updating");

      document.title = `${this.state.count}`;
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.uname}
          onChange={(e) => this.setState({ uname: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count}times
        </button>
      </div>
    );
  }
}

export default LifeCycleMethods;
