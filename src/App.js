import React from "react";
import { DebounceInput } from "react-debounce-input";

class App extends React.Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          onChange={(event) => this.setState({ value: event.target.value })}
        />

        <p>Value: {this.state.value}</p>
      </div>
    );
  }
}

export default App;

// const appRoot = document.createElement("div");
// document.body.appendChild(appRoot);
// ReactDOM.render(<App />, appRoot);
