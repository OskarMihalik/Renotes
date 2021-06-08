import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        flexDirection: "row",
        alignContent: "flex-start"
    },
    title: {
        flexBasis: '65%',
        padding: '5px 5px',
    },
    date: {
        flexBasis: '35%',
        padding: '5px 5px',
    },
    resize: {
        fontSize: 15,
    }
}));

export function Toolbar({returnActiveNote, onNoteTitleChange}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                id="title"
                className={classes.title}
                placeholder="title"
                fullWidth
                variant="outlined"
                size={'small'}
                value={returnActiveNote() ? returnActiveNote().name : ''}
                onChange={onNoteTitleChange}
                InputProps={{
                    classes: {
                        input: classes.resize
                    }
                }}
            />
            <TextField
                id="date"
                className={classes.date}
                placeholder="date"
                fullWidth
                variant="outlined"
                size={'small'}
                disabled={true}
                value={returnActiveNote() ? returnActiveNote().date : ''}
                // onChange={onNoteTitleChange}
                InputProps={{
                    classes: {
                        input: classes.resize
                    }
                }}
            />
        </div>
    );
}
