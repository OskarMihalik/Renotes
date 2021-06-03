import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Note = ({noteIndex, notes, setNotes}) => {
    const onChange = (value) => {
        let copy = [...notes]
        copy[noteIndex].content = value
        // notes[noteIndex].content = value;
        setNotes(copy)
    };

    return (
      <>
          <SimpleMDE value={noteIndex > 0 ? notes[noteIndex].content : ''} onChange={onChange}/>
      </>
    )
}

export default Note;