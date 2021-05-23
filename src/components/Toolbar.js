import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send'

import DeleteButton from './MyButtons/DeleteButton'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export function Toolbar() {
    const classes = useStyles();

    return (
        <div>
            <DeleteButton/>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Add
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon/>}
            >
                Send
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon/>}
            >
                Upload
            </Button>
            <Button
                variant="contained"
                disabled
                color="secondary"
                className={classes.button}
                startIcon={<KeyboardVoiceIcon/>}
            >
                Talk
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon/>}
            >
                Save
            </Button>
        </div>
    );
}