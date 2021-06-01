import './App.css';
import {FileSystemNavigator} from './components/TreeView';
import {Toolbar} from './components/Toolbar';
import {useState} from "react";
import Note from './components/Note'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState([
    {
      id:1,
      name: "first note",
      content: "gg boiz"
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

  const changeActiveNote = (note)=>{
    setActiveNote(note)
  }

  return (
    <div className="parent">
    <div className="treeview">
      <FileSystemNavigator notes={notes} onNoteClick={onNoteClick}/>
    </div>
    <div className="toolbar">
      <Toolbar addNote={addNote} activeNoteId={activeNote} notes={notes} setNotes={setNotes}/>
    </div>
    <div className="note">
      <Note note={activeNote}/>
    </div>
  </div>
  );
}

export default App;
