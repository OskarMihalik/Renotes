import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from '@material-ui/icons/Settings';
import DeletePopup from "./DeletePopup";

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
        fontSize:10
    }
}))



const Sidebar = ({changeNotesHidden, addNote, deleteNote, returnActiveNote, notes}) => {
    const classes = useStyles();

    const createNewNote = () => {
        const note = {
            name: 'new note',
            content: ''
        }
        addNote(note);
    }

    const [isDeletePopupOpen, setDeletePopupOpen] = useState(false)

    const deletePopupOpenClose = ()=>{
        if(returnActiveNote()){
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

    return (
        <>
            <DeletePopup isDeletePopupOpen={isDeletePopupOpen} deletePopupOpenClose={deletePopupOpenClose} deleteNote={deleteNote}/>
            <div className={classes.root}>
                <Button onClick={changeNotesHidden} className={classes.element}>Notes</Button>
                <Button className={classes.element} onClick={exportNotes}>Export</Button>

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
                    onClick={()=>{
                        deletePopupOpenClose()
                    }}
                >
                    <DeleteIcon style={{transform: "rotate(90deg)"}}/>
                </Button>
                <Button
                    className={classes.element}
                    onClick={()=>{
                        //create settings popup
                    }}
                >
                    <SettingsIcon style={{transform: "rotate(90deg)"}}/>
                </Button>
            </div>
        </>

    );
};

export default Sidebar;