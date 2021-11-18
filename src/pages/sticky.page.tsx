import React from 'react';
import {StickyNote} from '@components/home';
import {INote} from '@shared/interfaces';
import {IAppState} from '@store/reducers';
import {useSelector, shallowEqual} from 'react-redux';

const StickyPage = () => {
    const notes: readonly INote[] = useSelector(
        (state: IAppState) => state.note.note,
        shallowEqual,
    );
    return notes.length ? (
        <ul className="sticky-main">
            {notes.map((note: INote) => (
                <StickyNote key={note.id} note={note} />
            ))}
        </ul>
    ) : (
        <h1>Dodaj swoją pierwszą notatke!</h1>
    );
};

export default StickyPage;
