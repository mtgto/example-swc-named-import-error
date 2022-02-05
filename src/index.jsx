import { render } from "react-dom";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>Hello, world!</div>
  );
};

render(<App />, document.getElementById("root"));
