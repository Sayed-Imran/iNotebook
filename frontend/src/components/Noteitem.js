import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
const Noteitem = (props) => {
    const { note, updateNote, showAlert } = props
    const context = useContext(NoteContext)
    const { deleteNote } = context;

    return (
        <div className="col-md-3">
            <div className="card my-4">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash-can mx-3" onClick={() => { deleteNote(note.note_id); showAlert("Note deleted successfully", "success") }}></i>
                        <i className="fa-solid fa-pencil" onClick={() => { updateNote(note); }}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
