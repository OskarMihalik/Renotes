import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Note = ({note}) => {
    const onChange = (value) => {
        note.content = value;
    };

    return (
      <>
          <SimpleMDE value={note.content} onChange={onChange}/>
      </>
    )
}

export default Note;