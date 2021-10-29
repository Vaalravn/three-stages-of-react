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

    const saveNote = React.useCallback((note: INote) => dispatch(addNote(note)), [dispatch]);
    const deleteNote = React.useCallback((note: INote) => dispatch(removeNote(note)), [dispatch]);

    return (
        <main>
            <h1>My Notes</h1>
            <AddNote saveNote={saveNote} note={undefined} />
            {notes.map((note: INote) => (
                <Note key={note.id} note={note} removeNote={deleteNote} />
            ))}
        </main>
    );
};

export default WpisyPage;
