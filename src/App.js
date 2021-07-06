import './App.css';
import {FileSystemNavigator} from './components/TreeView';
import {Toolbar} from './components/Toolbar';
import {useState, useEffect, useMemo} from "react";
import Note from './components/Note'
import {v4 as uuidv4} from 'uuid';
import Sidebar from "./components/Sidebar";
import {createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {MuiThemeProvider} from "@material-ui/core/styles";

//template rsc


function App() {
    const darkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [prefersDarkMode, setPrefersDarkMode] = useState(darkMode)
    const custom_theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    const changeTheme = () => {
        setPrefersDarkMode(!prefersDarkMode)
        return prefersDarkMode
    }

    const {welcomeNote} = require('./welcomeContent')
    const [notes, setNotes] = useState([welcomeNote])

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

    //argument has name and content without id and date
    const addNote = (note) => {
        const id = uuidv4()
        const date = Date().toLocaleString()
        const newNote = {id, date, ...note}
        setNotes([...notes, newNote])
    }

    const deleteNote = () => {
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

    const filterNotes = (filterStr) => {
        return notes.filter((note) => note.name.toLowerCase().includes(filterStr.toLowerCase()))
    }

    return (
        <>
            <MuiThemeProvider theme={custom_theme}>
                <CssBaseline/>
                <Box className={notesHidden ? "parent hidden" : "parent"}>
                    <Box borderRight={1} className={"sidebar"}>
                        <Sidebar changeNotesHidden={changeNotesHidden} addNote={addNote}
                                 deleteNote={deleteNote}
                                 returnActiveNote={returnActiveNote} notes={notes}
                                 changeTheme={changeTheme}
                                 prefersDarkMode={prefersDarkMode}
                                 setNotes={setNotes}
                        />
                    </Box>
                    <Box borderRight={1} className={notesHidden ? "treeview hidden" : "treeview"}>
                        <FileSystemNavigator notes={notes} onNoteClick={onNoteClick} noteIndex={activeNoteIndex}
                                             returnActiveNote={returnActiveNote}
                                             filterNotes={filterNotes}

                        />
                    </Box>
                    <Box className="toolbar">
                        <Toolbar addNote={addNote} returnActiveNote={returnActiveNote} deleteNote={deleteNote}
                                 onNoteTitleChange={onNoteTitleChange}/>
                    </Box>
                    <Box className="note">
                        <Note
                            returnActiveNote={returnActiveNote}
                            onNoteContentChange={onNoteContentChange}
                            prefersDarkMode={prefersDarkMode}
                            custom_theme={custom_theme}
                        />
                    </Box>

                </Box>
            </MuiThemeProvider>
        </>

    );
}

export default App;
