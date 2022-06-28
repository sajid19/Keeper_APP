import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import Notes  from './Notes';



let createNotes = (noteItem) => {
  return <Note 
  key = {noteItem.key}
  title = {noteItem.title}
    content = {noteItem.content}
  />

}


function App() {
  return (
    <div>
      <Header/>
      {Notes.map(createNotes)}
      <Footer/>

    </div>
   
  );
}

export default App;
