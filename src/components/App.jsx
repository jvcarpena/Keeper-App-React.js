import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {  
  // Create constant variable that could be the storage of Notes.
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote]
    })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note 
            key={index} 
            id={index} 
            title={note.title} 
            content={note.content} 
            onDelete={deleteNote} 
        />)
      })}
      <Footer />
    </div>
  );
}

export default App;
