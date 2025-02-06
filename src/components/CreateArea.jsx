import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  // Create constant var that can be the storage of the input title and text.
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  })

  const [isExpanded, setIsExpanded] = useState(false)

  function handleChange(event) {
    const {name, value} = event.target
    setInputNote((prevNote) => {
      return {...prevNote, [name]: value}
    })
    console.log(inputNote);
  }

  function handleClick(event) {
    props.onAdd(inputNote)
    setInputNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  function expanded() {
    return setIsExpanded(true)
  }

  return (
    <div>
      <form className="create-note" >
        {isExpanded && 
          <input 
            onChange={handleChange} 
            name="title" placeholder="Title" 
            value={inputNote.title} 
          />
        }

        <textarea 
          onClick={expanded} 
          onChange={handleChange} 
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded ? "3" : "1"} 
          value={inputNote.content} 
        />

        <Zoom in={isExpanded}>
          <button 
            onClick={handleClick}>
              <AddIcon />
          </button>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
