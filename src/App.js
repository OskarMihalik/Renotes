import './App.css';
import {FileSystemNavigator} from './components/TreeView';
import {Toolbar} from './components/Toolbar';
import {useState, useEffect, useMemo} from "react";
import Note from './components/Note'
import {v4 as uuidv4} from 'uuid';
import Sidebar from "./components/Sidebar";
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//template rsc



function App() {
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
    const [prefersDarkMode, setPrefersDarkMode] = useState(false)
    console.log(prefersDarkMode)
    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
    const [notes, setNotes] = useState([
        {
            id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            name: "first note",
            date: 'Tue Jun 08 2021 15:15:42 GMT+0200 (Central European Summer Time)',
            content: "gg boiz"
        }
    ])

    useEffect(() => {
        const json = localStorage.getItem("notes");
        const savedNotes = JSON.parse(json);
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(notes)
        localStorage.setItem("notes", json)
    }, [notes])


    const [activeNoteIndex, setActiveNoteIndex] = useState(0)
    const [notesHidden, setNotesHidden] = useState(false)

    const changeNotesHidden = () => {
        setNotesHidden(!notesHidden)
    }

    const onNoteClick = (id) => {
        setActiveNoteIndex(notes.findIndex((note) => note.id === id))
    }

    //argument has name, content without id
    const addNote = (note) => {
        const id = uuidv4()
        const date = Date().toLocaleString()
        const newNote = {id, date, ...note}
        setNotes([...notes, newNote])
    }

    const deleteNote = () => {
        //move deleting notes here
        if (notes.length > 0) {
            let copy = [...notes]
            copy.splice(activeNoteIndex, 1)
            setActiveNoteIndex(notes.length > 1 ? activeNoteIndex - 1 : -1)
            setNotes(copy)
        }
    }

    const onNoteTitleChange = (e) => {
        const copy = notes.map(i => i)
        copy[activeNoteIndex] = {...copy[activeNoteIndex], name: e.target.value};
        setNotes(copy);
    }

    const onNoteContentChange = (value) => {
        if (activeNoteIndex >= 0) {
            let copy = [...notes]
            copy[activeNoteIndex].content = value
            setNotes(copy)
        }
    }

    const returnActiveNote = () => {
        return activeNoteIndex >= 0 ? notes[activeNoteIndex] : null
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className={notesHidden ? "parent hidden" : "parent"}>
                <Box  color={'primary'} className={"sidebar"}>
                    <Sidebar changeNotesHidden={changeNotesHidden} addNote={addNote}
                             deleteNote={deleteNote}
                             returnActiveNote={returnActiveNote} notes={notes}/>
                </Box>
                <Box color={'primary'} className={notesHidden ? "treeview hidden" : "treeview"}>
                    <FileSystemNavigator notes={notes} onNoteClick={onNoteClick} noteIndex={activeNoteIndex}
                                         returnActiveNote={returnActiveNote}/>
                </Box>
                <div className="toolbar">
                    <Toolbar addNote={addNote} returnActiveNote={returnActiveNote} deleteNote={deleteNote}
                             onNoteTitleChange={onNoteTitleChange}/>
                </div>
                <div className="note">
                    <Note returnActiveNote={returnActiveNote} onNoteContentChange={onNoteContentChange}/>
                    {/*<Button color={'secondary'}>GG</Button>*/}
                </div>

            </div>
        </ThemeProvider>
    );
}

export default App;
