/* eslint-disable @typescript-eslint/ban-types */
import {INote} from '@shared/interfaces';
import * as React from 'react';

interface INoteSave {
    note: INote | any;
    saveNote: (note: INote | any) => void;
}
const AddNote = ({saveNote}: INoteSave) => {
    const [note, setNote] = React.useState<INote | {}>();

    const handleNoteData = (e: React.FormEvent<HTMLInputElement>) => {
        setNote({
            ...note,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const addNewNote = (e: React.FormEvent) => {
        e.preventDefault();
        saveNote(note);
    };

    return (
        <form onSubmit={addNewNote} className="Add-note">
            <input type="text" id="title" placeholder="Tytuł" onChange={handleNoteData} />
            <input type="text" id="text" placeholder="Tekst" onChange={handleNoteData} />
            <button disabled={note === undefined ? true : false}>Dodaj notatke</button>
        </form>
    );
};

export default AddNote;
