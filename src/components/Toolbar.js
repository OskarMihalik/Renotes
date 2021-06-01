import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {useState} from "react";

import DeleteButton from './MyButtons/DeleteButton'

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

export function Toolbar({addNote, activeNote}) {
    const classes = useStyles();
    const [title, setTitle] = useState(activeNote.name)

    const onSubmit = (e) => {
        e.preventDefault()
        createNewNote()
    }

    const createNewNote = () => {
        if (!title) {
            setTitle('new note')
        }
        const note = {
            name: title,
            content: ''
        }
        addNote(note);
    }

    return (
        <div className={classes.root}>
            <DeleteButton/>
            <input type={'text'} placeholder={'title'} onChange={(e)=>{
                activeNote.name = e.target.value
            }
            }
                   value={activeNote.name}
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
        </div>
    );
}
