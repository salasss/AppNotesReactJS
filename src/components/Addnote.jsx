import React, { useState } from 'react'

function Addnote({handeladdnote}) {
    const [noteText,setNoteText] = useState('');
    const handelchange =(event)=> {
                                    if(charlimit - event.target.value.length>=0){
                                        setNoteText(event.target.value);
                                    }
                                    
    }
    const handlesaveclick =()=> {
                                if(noteText.trim().length>0) {
                                handeladdnote(noteText);
                                setNoteText('');}
                                else{
                                    alert("Votre note est vide");
                                }
    }
    const charlimit = 200;







  return (
    <div className="note new">
        <textarea 
            id=""
            cols="8"
            rows="10"
            value={noteText}
        placeholder='ajoutez votre note'
        onChange={handelchange}>
        </textarea>
        <div className="notefooter">
            <small>{charlimit - noteText.length} caractere</small>
            <button className='save' onClick={handlesaveclick}>save</button>
            </div>
    </div>
  )
}

export default Addnote