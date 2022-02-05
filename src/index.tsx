import { render } from "react-dom";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{`Counter ${count}`}</h1>
    </div>
  );
};

render(<App />, document.getElementById("root"));
