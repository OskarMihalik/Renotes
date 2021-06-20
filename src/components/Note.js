import {useMemo} from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {makeStyles} from '@material-ui/core/styles';
// import theme from './editorTheme.scss'
import { useTheme } from '@material-ui/core/styles';



const Note = ({returnActiveNote, onNoteContentChange}) => {
    const theme = useTheme()
    const useStyles = makeStyles(() => ({
        root: {
            padding: "5px 5px"
        },
        editorDark: {
            "& .CodeMirror": {
                color: theme.palette.text.primary,
                borderColor: theme.palette.background.paper,
                backgroundColor: "inherit"
            },
            "& .cm-s-easymde .CodeMirror-cursor": {
                borderColor: theme.palette.background.paper
            },
            "& .editor-toolbar > *": {
                color: theme.palette.text.primary
            },
            "& .editor-toolbar > .active, .editor-toolbar > button:hover, .editor-preview pre, .cm-s-easymde .cm-comment": {
                backgroundColor: theme.palette.background.paper
            },
            "& .editor-preview": {
                backgroundColor: theme.palette.background.default
            }
        }
    }))
    const classes = useStyles()

    const autofocusNoSpellcheckerOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
            theme: classes.editorDark
            //someday add image upload
            // uploadImage: true
        }
    }, [classes.editorDark]);

    return (
        <div className={classes.root}>
            <SimpleMDE options={autofocusNoSpellcheckerOptions}
                       value={returnActiveNote() ? returnActiveNote().content : ''}
                       onChange={onNoteContentChange}
            />
        </div>
    )
}

export default Note;