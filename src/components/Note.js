import {useMemo} from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Note = ({returnActiveNote, onNoteContentChange}) => {

    const autofocusNoSpellcheckerOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
        }
    }, []);

    return (
        <>
            <SimpleMDE options={autofocusNoSpellcheckerOptions}
                       value={returnActiveNote() ? returnActiveNote().content : ''}
                       onChange={onNoteContentChange}/>
        </>
    )
}

export default Note;