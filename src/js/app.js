import "../scss/main.scss";

import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return <Background />;
  }
}

render(<App />, window.document.getElementById("myquote"));
