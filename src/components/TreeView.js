import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import {TreeView} from "@material-ui/lab";

const useStyles = makeStyles(() => ({
    root: {
        height: 10,
        flexGrow: 1,
        width: '100%',
    },
    treeDiv:{
        overflow: "hidden",
        whiteSpace: 'nowrap',
        textOverflow: "ellipsis",
        width: '95%'
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
                        <TreeItem
                            nodeId={note.id}
                            size={"small"}
                            label={note.name ? note.name : '...'}
                            onLabelClick={()=> onNoteClick(note.id)} />
                    </div>
                )
            )}
        </TreeView>
    );
}

