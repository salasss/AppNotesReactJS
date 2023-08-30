import React, { useEffect, useState } from 'react';
import{nanoid} from 'nanoid';
import Noteslist from './components/Noteslist';
import Searchbar from './components/Searchbar';
import Navbar from './components/Navbar';
function App() {
  const [notes,SetNotes] = useState([]);



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

    const [Searchtext, SetSearchtext] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    
    useEffect(() => {
      console.log('Retrieving notes from local storage');
      try {
        const savedNotesJSON = localStorage.getItem('react-note-app-data');
        if (savedNotesJSON) {
          const savedNotes = JSON.parse(savedNotesJSON);
          console.log('Saved notes:', savedNotes);
          SetNotes((prevNotes) => {
           
            return prevNotes.length === 0 ? savedNotes : prevNotes;
          });
        }
      } catch (error) {
        console.error('Error parsing saved notes:', error);
      }
    }, []);
    
    

    useEffect(() =>{
      localStorage.setItem('react-note-app-data',JSON.stringify(notes))
    },[notes]);
  return (
    <div className={`app ${darkMode ? 'darkmode' : ''}`}>
      <Navbar handelDarkMode={setDarkMode} />
      <div className='container'>
        <Searchbar handelSearchNote={SetSearchtext}/>
        <Noteslist  notes={notes.filter((note)=>note.text.toLowerCase().includes(Searchtext))}
                    handeladdnote={addNote}
                    handelDeleteNote={deleteNote}/>
      </div>
    </div>
  )
}

export default App