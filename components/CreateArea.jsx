import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
function CreateArea(props) {

const [Expanded , setExpanded] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expand (){
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
      { Expanded ?
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          
        />
        : null
      }
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {Expanded ? 3 : 1}
        />
        <Fab onClick={submitNote}><AddIcon/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
