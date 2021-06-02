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

export function Toolbar({addNote, notes, setNotes, activeNoteIndex}) {
    const classes = useStyles();

    const createNewNote = () => {
        const note = {
            name: 'new note',
            content: ''
        }
        addNote(note);
    }

    return (
        <div className={classes.root}>
            <DeleteButton/>
            <input type={'text'} placeholder={'title'} onChange={(e) => {
                const copy = notes.map(i => i)
                copy[activeNoteIndex] = {...copy[activeNoteIndex], name: e.target.value};
                setNotes(copy);
            }
            }
                   value={notes[activeNoteIndex].name}
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
