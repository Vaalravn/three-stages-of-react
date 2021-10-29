import * as React from 'react';
import {INote} from '@shared/interfaces';

interface INoteComponent {
    note: INote;
    removeNote: (note: INote) => void;
}

const Note = ({note, removeNote}: INoteComponent) => {
    return (
        <div className="Note">
            <div>
                <h1>{note.title}</h1>
                <p>{note.text}</p>
            </div>
            <button onClick={() => removeNote(note)}>Usuń</button>
        </div>
    );
};
export default Note;
