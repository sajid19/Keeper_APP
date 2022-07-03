import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([])
  function addNote(newnote) {
    setnotes(prevnote =>{
      return [...prevnote ,newnote]
    })
    
  }
function deleteNote(id){
  setnotes(prevnote =>{
    return prevnote.filter((noteitem ,index)=>{
      return index ==! id

    } ) 
  })

}

  return (
    <div>
      <Header />
      <CreateArea onADD ={addNote} />
      {notes.map((noteitem,index) => {
        return <Note
        key ={index}
        id ={index}
          title = {noteitem.title}
          content = {noteitem.content}
          onDelete = {deleteNote}
        />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
