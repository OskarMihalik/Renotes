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

export function Toolbar({addNote, returnActiveNote, deleteNote, onNoteTitleChange}) {
    const classes = useStyles();

    const [isDeletePopupOpen, setDeletePopupOpen] = useState(false)

    const deletePopupOpenClose = ()=>{
        if(returnActiveNote()){
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

    return (
        <div className={classes.root}>
            <DeleteButton onClick={deletePopupOpenClose}/>
            <input type={'text'} placeholder={'title'} onChange={onNoteTitleChange}
                   value={returnActiveNote() ? returnActiveNote().name : ''}
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
