import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Notes from "./components/Notes";

import { v4 as uuidv4 } from "uuid";

// if (process.env.NODE_ENV !== "production") {
//   React.Perf = require("react-addons-perf");
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuidv4(),
          task: "Learn React",
        },
        {
          id: uuidv4(),
          task: "Do laundry",
        },
      ],
    };
  }

  addNote = () => {
    // It would be possible to write this in an imperative style.
    // I.e., through `this.state.notes.push` and then
    // `this.setState({notes: this.state.notes})` to commit.
    //
    // I tend to favor functional style whenever that makes sense.
    // Even though it might take more code sometimes, I feel
    // the benefits (easy to reason about, no side effects)
    // more than make up for it.
    //
    // Libraries, such as Immutable.js, go a notch further.
    this.setState({
      notes: this.state.notes.concat([
        {
          id: uuidv4(),
          task: "New task",
        },
      ]),
    });
  };
  render() {
    const { notes } = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+</button>

        <Notes notes={notes} />
      </div>
    );
  }
}
