import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import {TreeView} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 10,
        flexGrow: 1,
        maxWidth: '1fr',
        paddingLeft: '1px',

    },
    button: {
        // margin: theme.spacing(.1),
        paddingBottom: '0px',
        maxWidth: '15rem',
    },
    treeDiv:{
        overflow: "hidden",
        whiteSpace: 'nowrap',
        textOverflow: "ellipsis",
        width: '15rem'
    }
}));

export const FileSystemNavigator = ({notes, onNoteClick}) => {
    const classes = useStyles();

    return (
        <TreeView
            className={classes.root}
            multiSelect={false}
        >
            {notes.map((note) =>
                (<div key={note.id} className={classes.treeDiv}>
                        <TreeItem nodeId={note.id} className={classes.button} size={"small"} label={note.name ? note.name : '...'} onLabelClick={()=> onNoteClick(note.id)} />
                    </div>
                )
            )}
        </TreeView>
    );
}

