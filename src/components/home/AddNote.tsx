/* eslint-disable @typescript-eslint/ban-types */
import {INote} from '@shared/interfaces';
import * as React from 'react';

interface INoteSave {
    note: INote | any;
    saveNote: (note: INote | any) => void;
}
const AddNote = ({saveNote}: INoteSave) => {
    const [note, setNote] = React.useState<INote>({
        title: '',
        text: '',
        id: 0,
    });

    const handleNoteData = (e: React.FormEvent<HTMLInputElement>) => {
        setNote({
            ...note,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const addNewNote = (e: React.FormEvent) => {
        e.preventDefault();
        saveNote(note);
        setNote({id: 0, title: '', text: ''});
    };

    return (
        <form onSubmit={addNewNote} className="Add-note">
            <input
                value={note?.title}
                type="text"
                id="title"
                placeholder="Tytuł"
                onChange={handleNoteData}
            />
            <input
                value={note?.text}
                type="text"
                id="text"
                placeholder="Tekst"
                onChange={handleNoteData}
            />
            <button disabled={!note.title}>Dodaj notatke</button>
        </form>
    );
};

export default AddNote;
