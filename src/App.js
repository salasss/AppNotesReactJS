import React, { useState } from 'react';
import{nanoid} from 'nanoid';
import Noteslist from './components/Noteslist';
import Searchbar from './components/Searchbar';
function App() {
  const [notes,SetNotes] = useState([
    {
      id: nanoid(),
      text:"ceci est la 1ere note",
      date:"12/12/2023"
    },
    {
      id: nanoid(),
      text:"ceci est la 2nd note",
      date:"4/04/2023"
    },
    {
      id: nanoid(),
      text:"ceci est la 3eme note",
      date:"02/10/2023"
    },
    {
      id: nanoid(),
      text:"ceci est la 4eme note",
      date:"22/10/2023"
    }]);



    const addNote =(text)=> {
      const date = new Date();
      const newnote = {
        id: nanoid(),
        text:text,
        date:date.toLocaleDateString()
      }
      const newnotes = [...notes,newnote];
      SetNotes(newnotes);
    }

    const deleteNote =(id) =>{
      const newNotes = notes.filter((note) => note.id !== id);
      SetNotes(newNotes);
    }
  return (
    <div className='container'>
      <Searchbar/>
      <Noteslist  notes={notes}
                  handeladdnote={addNote}
                  handelDeleteNote={deleteNote}/>
    </div>
  )
}

export default App