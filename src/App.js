import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Notes from "./components/Notes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

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

  deleteNote = (id, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id),
    });
  };

  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          note.editing = true;
        }

        return note;
      }),
    });
  };
  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          note.editing = false;
          note.task = task;
        }

        return note;
      }),
    });
  };

  render() {
    const { notes } = this.state;

    return (
      <div className="app">
        <Header />
        <div className="notesarea">
          <Notes
            notes={notes}
            onNoteClick={this.activateNoteEdit}
            onEdit={this.editNote}
            onDelete={this.deleteNote}
          />{" "}
          <button
            type="button"
            onClick={this.addNote}
            class="btn btn-primary add-note"
          >
            +
          </button>{" "}
        </div>

        <Footer />
      </div>
    );
  }
}
