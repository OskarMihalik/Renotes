import {useEffect, useMemo, useRef} from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {makeStyles} from '@material-ui/core/styles';
// import theme from './editorTheme.scss'
// import { useTheme } from '@material-ui/core/styles';
import {withTheme} from "@material-ui/styles";



const Note = ({returnActiveNote, onNoteContentChange, prefersDarkMode, custom_theme}) => {
    // const theme = useTheme()

    const useStyles = makeStyles(() => ({
        root: {
            padding: "5px 5px"
        },
        editorDark: {
            "& .CodeMirror": {
                color: custom_theme.palette.text.primary,
                borderColor: custom_theme.palette.background.paper,
                backgroundColor: "inherit"
            },
            "& .cm-s-easymde .CodeMirror-cursor": {
                borderColor: custom_theme.palette.background.paper
            },
            "& .editor-toolbar > *": {
                color: custom_theme.palette.text.primary
                // color: 'red'
            },
            "& .editor-toolbar > .active, .editor-toolbar > button:hover, .editor-preview pre, .cm-s-easymde .cm-comment": {
                backgroundColor: custom_theme.palette.background.paper
            },
            "& .editor-preview": {
                backgroundColor: custom_theme.palette.background.default
            }
        }
    }))
    const classes = useStyles()

    const autofocusNoSpellcheckerOptions = useMemo(() => {
        console.log(custom_theme.palette.background.default)
        return {
            autofocus: true,
            spellChecker: false,
            // uploadImage: true
        }
    }, [classes.editorDark, custom_theme]);

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