import React, {Dispatch} from 'react';
import {INote} from '@shared/interfaces';
import {addNote, removeNote} from '@store/actions/note.action';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {AddNote, Note} from '@components/home';
import {IAppState} from '@store/reducers';

const WpisyPage = () => {
    const notes: readonly INote[] = useSelector(
        (state: IAppState) => state.note.note,
        shallowEqual,
    );

    const dispatch: Dispatch<any> = useDispatch();

    const saveNote = (note: INote) => dispatch(addNote(note));
    const deleteNote = (note: INote) => dispatch(removeNote(note));
    return (
        <main>
            <h1>My Notes</h1>
            <AddNote saveNote={saveNote} note={undefined} />
            <h1>Twoje Notatki</h1>
            {notes.length ? (
                notes
                    .map((note: INote) => (
                        <Note key={note.id} note={note} removeNote={deleteNote} />
                    ))
                    .reverse()
            ) : (
                <h3>Dodaj swoją pierwszą notatke!</h3>
            )}
        </main>
    );
};

export default WpisyPage;
