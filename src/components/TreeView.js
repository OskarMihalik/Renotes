import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import {TreeView} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 10,
        flexGrow: 1,
        maxWidth: 240,
        paddingLeft: '1px',
    },
    button: {
        // margin: theme.spacing(.1),
        paddingBottom: '0px',
    },
}));

export const FileSystemNavigator = ({notes, onNoteClick}) => {
    const classes = useStyles();

    return (
        <TreeView
            className={classes.root}
        >
            {notes.map((note) =>
                (<div key={note.id}>
                        <TreeItem nodeId={note.id} className={classes.button} size={"small"} label={note.name ? note.name : '...'} onLabelClick={()=> onNoteClick(note.id)} />
                    </div>
                )
            )}
        </TreeView>
    );
}

