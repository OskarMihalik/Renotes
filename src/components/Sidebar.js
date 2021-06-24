import React, {useState, useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import DeletePopup from "./DeletePopup";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        textTransform: 'none',
    },
    element: {
        transform: "rotate(-90deg)",
        margin: '12px 0px',
        padding: '12px 0px',
        maxWidth: '40px', maxHeight: '30px', minWidth: '40px', minHeight: '30px',
        fontSize: 10
    }
}))


const Sidebar = ({changeNotesHidden, addNote, deleteNote, returnActiveNote, notes, changeTheme, prefersDarkMode}) => {
    const classes = useStyles();

    const createNewNote = () => {
        const note = {
            name: 'new note',
            content: ''
        }
        addNote(note);
    }

    const [isDeletePopupOpen, setDeletePopupOpen] = useState(false)

    const deletePopupOpenClose = () => {
        if (returnActiveNote()) {
            setDeletePopupOpen(!isDeletePopupOpen)
        }
    }

    const exportNotes = () => {
        let a = document.createElement('a')
        let file = new Blob([JSON.stringify(notes)], {type: 'text/plain'})
        a.href = URL.createObjectURL(file);
        a.download = 'notes';
        a.click();
    }

    // const fileInputRef=useRef();
    const importNotes = (evt) =>{
        let status = []; // Status output
        const fileObj = evt.target.files[0]; // We've not allowed multiple files.
        // See https://developer.mozilla.org/en-US/docs/Web/API/FileReader
        const reader = new FileReader();

        // Defining the function here gives it access to the fileObj constant.
        let fileloaded = e => {
            // e.target.result is the file's content as text
            // Don't trust the fileContents!
            // Test any assumptions about its contents!
            const fileContents = e.target.result;
            status.push(`File name: "${fileObj.name}". ` +
                `Length: ${fileContents.length} bytes.`);
            // Show first 80 characters of the file
            const first80char = fileContents.substring(0,80);
            status.push (`First 80 characters of the file:\n${first80char}`)
            // Show the status messages
            this.setState ({status: status.join("\n")});
        }

        // Mainline of the method
        fileloaded = fileloaded.bind(this);
        // The fileloaded event handler is triggered when the read completes
        reader.onload = fileloaded;
        reader.readAsText(fileObj); // read the file
    }

    return (
        <>
            <DeletePopup isDeletePopupOpen={isDeletePopupOpen} deletePopupOpenClose={deletePopupOpenClose}
                         deleteNote={deleteNote}/>
            <div className={classes.root}>
                <Button onClick={changeNotesHidden} className={classes.element}>Notes</Button>
                <Button className={classes.element} onClick={exportNotes}>Export</Button>
                <Button className={classes.element} onClick={exportNotes}>Import</Button>
                <Button
                    className={classes.element}
                    onClick={() => {
                        createNewNote()
                    }
                    }
                >
                    <AddIcon/>
                </Button>
                <Button
                    className={classes.element}
                    onClick={() => {
                        deletePopupOpenClose()
                    }}
                >
                    <DeleteIcon style={{transform: "rotate(90deg)"}}/>
                </Button>
                <Button
                    className={classes.element}
                    onClick={() => {
                        changeTheme()
                    }}
                >
                    {prefersDarkMode ?
                        <Brightness7Icon style={{transform: "rotate(90deg)"}}/> :
                        <Brightness4Icon style={{transform: "rotate(90deg)"}}/>}

                </Button>
            </div>
        </>

    );
};

export default Sidebar;