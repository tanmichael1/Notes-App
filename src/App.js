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

  addNote = () => {
    var vals = document.getElementsByName("color-pick");
    var colorVal;
    vals.forEach(function (val) {
      if (val.checked) {
        colorVal = val.value;
      }
    });
    console.log(colorVal);
    this.setState({
      notes: this.state.notes.concat([
        {
          id: uuidv4(),
          task: document.getElementById("newText").value,
        },
      ]),
    });

    document.getElementById("newText").value = "";
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
          <div className="note-editor">
            <textarea
              id="newText"
              placeholder="Enter your note here..."
              rows={5}
            ></textarea>
            <div className="color-picker" onChange={this.handleColorChange}>
              <input
                type="radio"
                name="color-pick"
                value="#F06292"
                id="color1"
              />
              <label
                htmlFor="color1"
                style={{ backgroundColor: "#F06292" }}
              ></label>
              <input
                type="radio"
                name="color-pick"
                value="#BA68C8"
                id="color2"
              />
              <label
                htmlFor="color2"
                style={{ backgroundColor: "#BA68C8" }}
              ></label>
              <input
                type="radio"
                name="color-pick"
                value="#FFD54F"
                id="color3"
              />
              <label
                htmlFor="color3"
                style={{ backgroundColor: "#FFD54F" }}
              ></label>
              <input
                type="radio"
                name="color-pick"
                value="#4FC3F7"
                id="color4"
              />
              <label
                htmlFor="color4"
                style={{ backgroundColor: "#4FC3F7" }}
              ></label>
              <input
                type="radio"
                name="color-pick"
                value="#AED581"
                id="color5"
              />
              <label
                htmlFor="color5"
                style={{ backgroundColor: "#AED581" }}
              ></label>
            </div>
            {/* <button
              type="button"
              onClick={this.addNote}
              class="btn btn-primary add-note"
            >
              Add
            </button> */}

            <button className="add-button add-note" onClick={this.addNote}>
              Add
            </button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
