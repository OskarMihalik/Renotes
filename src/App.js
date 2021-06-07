import './App.css';
import {FileSystemNavigator} from './components/TreeView';
import {Toolbar} from './components/Toolbar';
import {useState} from "react";
import Note from './components/Note'
import {v4 as uuidv4} from 'uuid';
import Sidebar from "./components/Sidebar";

//template rsc

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

    const deleteNote = () =>{
        //move deleting notes here
        if (notes.length > 0){
            let copy = [...notes]
            copy.splice(activeNoteIndex, 1)
            setActiveNoteIndex(notes.length > 2 ? activeNoteIndex-1 : -1)
            setNotes(copy)
            console.log(notes)
            console.log(activeNoteIndex)
        }
    }

    const onNoteTitleChange = (e)=>{
        const copy = notes.map(i => i)
        copy[activeNoteIndex] = {...copy[activeNoteIndex], name: e.target.value};
        setNotes(copy);
    }

    const onNoteContentChange = (value) =>{
        if (activeNoteIndex >= 0) {
            let copy = [...notes]
            copy[activeNoteIndex].content = value
            setNotes(copy)
        }
    }

    const returnActiveNote = ()=>{
        return activeNoteIndex >= 0 ? notes[activeNoteIndex] : null
    }

    return (
        <div className="parent">
            <div className={"sidebar"}>
                <Sidebar/>
            </div>
            <div className="treeview">
                <FileSystemNavigator notes={notes} onNoteClick={onNoteClick} noteIndex={activeNoteIndex}/>
            </div>
            <div className="toolbar">
                <Toolbar addNote={addNote} returnActiveNote={returnActiveNote} deleteNote={deleteNote}
                         onNoteTitleChange={onNoteTitleChange}/>
            </div>
            <div className="note">
                <Note returnActiveNote={returnActiveNote} onNoteContentChange={onNoteContentChange}/>
            </div>
        </div>
    );
}

export default App;
