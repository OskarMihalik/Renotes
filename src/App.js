import './App.css';
import {FileSystemNavigator} from './components/TreeView';
import {Toolbar} from './components/Toolbar';
import {useState} from "react";
import Note from './components/Note'
import {v4 as uuidv4} from 'uuid';

function App() {
    const [notes, setNotes] = useState([
        {
            id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            name: "first note",
            content: "gg boiz"
        }
    ])

    const [activeNoteId, setActiveNoteId] = useState('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')
    const [activeNoteIndex, setActiveNoteIndex] = useState(0)

    const onNoteClick = (id) => {
        setActiveNoteId(id)
        setActiveNoteIndex(notes.findIndex((note) => note.id === id))
    }

    //argument has name, content without id
    const addNote = (note) => {
        const id = uuidv4()
        const newNote = {id, ...note}
        setNotes([...notes, newNote])
    }

    const deleteNote = (index) =>{
        //move deleting notes here
    }

    return (
        <div className="parent">
            <div className="treeview">
                <FileSystemNavigator notes={notes} onNoteClick={onNoteClick}/>
            </div>
            <div className="toolbar">
                <Toolbar addNote={addNote} activeNoteIndex={activeNoteIndex} notes={notes} setNotes={setNotes}
                         setActiveNoteIndex={setActiveNoteIndex}/>
            </div>
            <div className="note">
                <Note noteIndex={activeNoteIndex} notes={notes} setNotes={setNotes}/>
            </div>
        </div>
    );
}

export default App;
