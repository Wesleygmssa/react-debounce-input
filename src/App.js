import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <DebounceInput
        minLength={3}
        debounceTimeout={300}
        onChange={(event) => setValue(event.target.value)}
      />

      <p>Value: {value}</p>
    </div>
  );
};

export default App;

// const appRoot = document.createElement("div");
// document.body.appendChild(appRoot);
// ReactDOM.render(<App />, appRoot);
