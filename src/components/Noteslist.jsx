import React from 'react';
import Note from './Note';
import Addnote from './Addnote';

function Noteslist({notes, handeladdnote, handelDeleteNote}) {
  return (
    <div className="notes_list">
        {notes.map((note)=>
          <Note key={note.id} // Add a unique key prop here
          id={note.id}
          text={note.text}
          date={note.date}
          handelDeleteNote={handelDeleteNote}/>
          )}
        <Addnote handeladdnote={handeladdnote}/>
    </div>
  )
}

export default Noteslist