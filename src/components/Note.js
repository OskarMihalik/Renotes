import {useMemo} from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        padding: "5px 5px"
    },
}))

const Note = ({returnActiveNote, onNoteContentChange}) => {

    const classes = useStyles()

    const autofocusNoSpellcheckerOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
        }
    }, []);

    return (
        <div className={classes.root}>
            <SimpleMDE options={autofocusNoSpellcheckerOptions}
                       value={returnActiveNote() ? returnActiveNote().content : ''}
                       onChange={onNoteContentChange}/>
        </div>
    )
}

export default Note;