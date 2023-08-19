import React from 'react';
import {MdSearch} from 'react-icons/md';

function Searchbar({handelSearchNote}) {
  return (
    <div className="searchbar">

        <MdSearch className="search-icon"/>
        <input onChange={(event)=> handelSearchNote(event.target.value)} type="text" placeholder='Rechercher...'  />
    </div>
  )
}

export default Searchbar