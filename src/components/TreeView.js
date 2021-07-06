import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import {TreeView} from "@material-ui/lab";
import TextField from '@material-ui/core/TextField';

// import { withTheme } from '@material-ui/core/styles';
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
        width: '98%',
    },
    textInput:{
        fontSize: 15,
    },
    textField:{
        paddingLeft: '20px',
        width: '98%'
    }
}))

export const FileSystemNavigator = ({notes, onNoteClick, returnActiveNote, filterNotes}) => {
    const classes = useStyles();

    const [filterStr, setFilterStr] = useState('')

    return (
        <div>
            <TextField
                id="title"
                placeholder="search note"
                fullWidth
                variant="standard"
                size={'small'}
                onChange={(e)=>{
                    e.target.value ? setFilterStr(e.target.value) : setFilterStr('')
                }
                }
                InputProps={{
                    classes: {
                        input: classes.textInput,
                    }
                }}
                className={classes.textField}
            />
            <TreeView
                className={classes.root}
                multiSelect={false}
                selected={returnActiveNote() ? returnActiveNote().id : ''}
            >
                {filterNotes(filterStr).map((note) =>
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
        </div>

    );
}

