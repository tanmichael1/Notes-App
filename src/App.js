import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes/Notes";
import Search from "./components/Notes/Search";
import NoteEditor from "./components/Notes/NoteEditor";
import { v4 as uuidv4 } from "uuid";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuidv4(),
          task: "Learn React",
          color: "#FFA726",
        },
        {
          id: uuidv4(),
          task: "Do laundry",
          color: "#FFA726",
        },
      ],
      searchValue: "",
      filteredNotes: [
        {
          id: uuidv4(),
          task: "Learn React",
          color: "#FFA726",
        },
        {
          id: uuidv4(),
          task: "Do laundry",
          color: "#FFA726",
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
    var newId = uuidv4();
    this.setState({
      notes: this.state.notes.concat([
        {
          id: newId,
          task: document.getElementById("newText").value,
          color: colorVal,
        },
      ]),
      filteredNotes: this.state.filteredNotes.concat([
        {
          id: newId,
          task: document.getElementById("newText").value,
          color: colorVal,
        },
      ]),
    });
    var newNote = {
      id: newId,
      task: document.getElementById("newText").value,
      color: colorVal,
    };

    this.updateSearch(this.state.searchValue, newNote);

    document.getElementById("newText").value = "";
  };

  updateSearch(searchValue, newNote) {
    if (newNote != null) {
      this.state.notes.push(newNote);
    }

    if (searchValue !== "") {
      this.setState({
        filteredNotes: this.state.notes.filter(
          (note) =>
            note.task.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        ),
      });
    } else {
      this.setState({
        filteredNotes: this.state.notes,
      });
    }
  }

  handleSearch = (input) => {
    var text = input.target.value;
    this.setState({ searchValue: text });
    this.updateSearch(text, null);
  };

  render() {
    const { notes, filteredNotes, searchValue } = this.state;

    return (
      <div className="app">
        <Header />
        <div className="notesarea">
          <Search handleSearch={this.handleSearch} />
          <NoteEditor
            handleColorChange={this.handleColorChange}
            addNote={this.addNote}
          />
          <Notes
            filteredNotes={filteredNotes}
            searchValue={searchValue}
            notes={notes}
            onNoteClick={this.activateNoteEdit}
            onEdit={this.editNote}
            onDelete={this.deleteNote}
          />{" "}
        </div>

        <Footer />
      </div>
    );
  }
}
