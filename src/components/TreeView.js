import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import {TreeView} from "@material-ui/lab";

// import { withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>createStyles(() => ({
    root: {
        height: 10,
        flexGrow: 1,
        width: '100%',
    },
    treeDiv:{
        overflow: "hidden",
        whiteSpace: 'nowrap',
        textOverflow: "ellipsis",
        width: '95%',
    },
})));

export const FileSystemNavigator = ({notes, onNoteClick, returnActiveNote}) => {
    const classes = useStyles();
    return (
        <TreeView
            className={classes.root}
            multiSelect={false}
            //can't return null thing of else
            selected={returnActiveNote() ? returnActiveNote().id : ''}
        >
            {notes.map((note) =>
                (<div key={note.id} className={classes.treeDiv}>
                        <TreeItem
                            nodeId={note.id}
                            size={"small"}
                            label={note.name ? note.name : '...'}
                            onLabelClick={()=> onNoteClick(note.id)}
                            color={'secondary'}
                        />
                    </div>
                )
            )}
        </TreeView>
    );
}

