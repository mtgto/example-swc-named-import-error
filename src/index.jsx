import { render } from "react-dom";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  //const [count, setCount] = React.useState(0); // It does not cause an error

  return (
    <div>Hello, world!</div>
  );
};

render(<App />, document.getElementById("root"));
