import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const App = () => {
  return (
    <div>
      <ClickCounter />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
