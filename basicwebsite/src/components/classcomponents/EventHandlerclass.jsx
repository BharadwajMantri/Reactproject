import React from "react";
import '../classcomponents/EventHandlerclass.css';

class ClassEventHandlers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  incrementOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrementOne = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  incrementTwo = () => {
    this.setState({ counter: this.state.counter + 2 });
  };
  decrementTwo = () => {
    this.setState({ counter: this.state.counter - 2 });
  };

  incrementThree = () => {
    this.setState({ counter: this.state.counter + 3 });
  };
  decrementThree = () => {
    this.setState({ counter: this.state.counter - 3 });
  };

  render() {
    return (
      <div className="flex-container">
        <h1 className="counter">Count: {this.state.counter}</h1>
        <div className="buttons">
          <button onClick={this.decrementOne}>Decrement (-1)</button>
          <button onClick={this.incrementOne}>Increment (+1)</button>
        </div>
        <div className="buttons">
          <button onClick={this.decrementTwo}>Decrement (-2)</button>
          <button onClick={this.incrementTwo}>Increment (+2)</button>
        </div>
        <div className="buttons">
          <button onClick={this.decrementThree}>Decrement (-3)</button>
          <button onClick={this.incrementThree}>Increment (+3)</button>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter - 4 });
            }}
          >
            Decrement (-4)
          </button>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter + 4 });
            }}
          >
            Increment (+4)
          </button>
        </div>

        <div className="buttons">
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter - 5 });
            }}
          >
            Decrement (-5)
          </button>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter + 5 });
            }}
          >
            Increment (+5)
          </button>
        </div>
        <button
          className=" btn btn-primary"
          onClick={() => {
            this.setState({ counter: 0 });
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}
export default ClassEventHandlers;