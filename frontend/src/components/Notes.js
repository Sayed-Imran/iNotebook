import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';

function Notes() {
    const context = useContext(NoteContext);
    const {notes, getNotes} = context;
    useEffect(() => {
      getNotes()
      }
    , [])
    
  return (
    <>
    <AddNote />
    <div className='row my-3'>
                <h2>Your Notes</h2>
                {
                    notes.map((note)=>{
                        return <Noteitem key={note.note_id} note={note}/>
                    })
                }
            </div>
            </>
  )
}

export default Notes