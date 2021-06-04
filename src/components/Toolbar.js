import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import DeleteButton from './MyButtons/DeleteButton'
import DeletePopup from "./DeletePopup";

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        flexDirection: "row",
        alignContent: "center"
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export function Toolbar({addNote, notes, setNotes, activeNoteIndex, setActiveNoteIndex}) {
    const classes = useStyles();

    const [isDeletePopupOpen, setDeletePopupOpen] = useState(false)

    const deletePopupOpenClose = ()=>{
        if(notes.length > 0){
            setDeletePopupOpen(!isDeletePopupOpen)
        }
    }

    const createNewNote = () => {
        const note = {
            name: 'new note',
            content: ''
        }
        addNote(note);
    }
    const deleteNote = ()=>{
        if (notes.length > 0){
            let copy = [...notes]
            copy.splice(activeNoteIndex, 1)
            activeNoteIndex > 0 ? setActiveNoteIndex(activeNoteIndex-1) : setActiveNoteIndex(0)
            setNotes(copy)
        }
    }

    return (
        <div className={classes.root}>
            <DeleteButton onClick={deletePopupOpenClose}/>
            <input type={'text'} placeholder={'title'} onChange={(e) => {
                const copy = notes.map(i => i)
                copy[activeNoteIndex] = {...copy[activeNoteIndex], name: e.target.value};
                setNotes(copy);
            }
            }
                   value={activeNoteIndex > 0 ? notes[activeNoteIndex].name : ''}
            />
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                onClick={() => {
                    createNewNote()
                }
                }
            >
                Add new
            </Button>
            <DeletePopup isDeletePopupOpen={isDeletePopupOpen} deletePopupOpenClose={deletePopupOpenClose} deleteNote={deleteNote}/>
        </div>
    );
}
