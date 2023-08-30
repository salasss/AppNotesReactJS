import React from 'react'

function Navbar({handelDarkMode}) {
  return (
    <nav>
        <div className='leftbar'>

            <h1>NoteNest</h1>
        </div>
            <div className='rigthbar'>
            <a href="">Me Contacter</a>
            <button className='save ' onClick={()=>handelDarkMode((prevDarkMode)=> !prevDarkMode)}>Mode Nuit</button>
            
        </div>
    </nav>
  )
}

export default Navbar