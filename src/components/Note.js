import {useMemo} from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {makeStyles} from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((custom_theme) => ({
    root: {
        padding: "5px 5px",
    },
    editorDark: {
        "& .CodeMirror": {
            color: custom_theme.palette.text.primary,
            borderColor: custom_theme.palette.text.secondary,
            backgroundColor: "inherit",
            height: "92vh"
        },
        "& .cm-s-easymde .CodeMirror-cursor": {
            borderColor: custom_theme.palette.text.primary
        },
        "& .editor-toolbar":{
            borderColor: custom_theme.palette.text.primary
        },
        "& .editor-toolbar > *": {
            color: custom_theme.palette.text.primary,
        },
        "& .editor-toolbar > .active, .editor-toolbar > button:hover, .editor-preview pre, .cm-s-easymde .cm-comment": {
            backgroundColor: custom_theme.palette.background.paper,
        },
        "& .editor-preview": {
            backgroundColor: custom_theme.palette.background.default
        },
    }
}))

const Note = ({returnActiveNote, onNoteContentChange}) => {
    const theme = useTheme()

    const classes = useStyles(theme)

    const autofocusNoSpellcheckerOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
            hideIcons: ['side-by-side', 'fullscreen'],
            // TODO: uploadImage: true
        }
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.editorDark}>
                <SimpleMDE options={autofocusNoSpellcheckerOptions}
                           value={returnActiveNote() ? returnActiveNote().content : ''}
                           onChange={onNoteContentChange}
                />
            </div>

        </div>
    )
}

export default Note;