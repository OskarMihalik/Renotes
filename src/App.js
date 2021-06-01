import './App.css';
import {FileSystemNavigator} from './components/TreeView';
import {Toolbar} from './components/Toolbar';
import {useState} from "react";
import Note from './components/Note'
import nextId from "react-id-generator";

function App() {
  const [notes, setNotes] = useState([
    {
      id:1,
      name: "first note",
      content: "gg boiz"
    },
    {
      id: 2,
      name: "second note",
      content: "asdfasldfasjdlfkjas"
    }
  ])

  const [activeNote, setActiveNote] = useState(notes[0])

  const onNoteClick = (id)=>{
    console.log(notes.find((note) => note.id === id).content)
    setActiveNote(notes.find((note) => note.id === id))
  }

  const addNote = (note)=>{
    const id = nextId('')
    const newNote = {id, ...note}
    setNotes([...notes, newNote])
  }

  return (
    <div className="parent">
    <div className="treeview">
      <FileSystemNavigator notes={notes} onNoteClick={onNoteClick}/>
    </div>
    <div className="toolbar">
      <Toolbar addNote={addNote} activeNote={activeNote}/>
    </div>
    <div className="note">
      <Note note={activeNote}/>
    </div>
  </div>
  );
}

export default App;
