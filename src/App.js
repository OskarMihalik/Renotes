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

  const [activeNoteId, setActiveNoteId] = useState('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')
  const [activeNoteIndex, setActiveNoteIndex] = useState(0)

  const onNoteClick = (id)=>{
    setActiveNoteId(id)
    setActiveNoteIndex(notes.findIndex((note) => note.id === id))
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
      <Toolbar addNote={addNote} activeNoteIndex={activeNoteIndex} notes={notes} setNotes={setNotes}/>
    </div>
    <div className="note">
      <Note note={activeNote}/>
    </div>
  </div>
  );
}

export default App;
