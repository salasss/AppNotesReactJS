import React from 'react';
import {MdDeleteForever} from 'react-icons/md';

function note({id,text,date,handelDeleteNote}) {
  return (
    <div key={id} className="note">
        <span>{text}</span>
        <div className="notefooter">
            <small>{date}</small>
            <MdDeleteForever onClick={()=> handelDeleteNote(id)} className='delete-icon'/>
            </div>
    </div>
  )
}

export default note