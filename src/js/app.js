import "../scss/main.scss";

import React from "react";
import { render } from "react-dom";

import { Quote} from './components/Quote';

class App extends React.Component {
  render() {
    return <Quote/>
  }
}

render(<App />, window.document.getElementById("myquote"));
