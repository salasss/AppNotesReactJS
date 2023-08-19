import React from 'react';
import {MdSearch} from 'react-icons/md';

function Searchbar() {
  return (
    <div className="searchbar">

        <MdSearch className="search_icons"/>
        <input type="text" placeholder='Rechercher...' />
    </div>
  )
}

export default Searchbar