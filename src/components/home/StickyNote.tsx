import * as React from 'react';
import {INote} from '@shared/interfaces';

interface INoteComponent {
    note: INote;
}

const StickyNote = ({note}: INoteComponent) => {
    return (
        <ul className="Sticky-Note">
            <li>
                <a href="#">
                    <h2>{note.title}</h2>
                    <p>{note.text}</p>
                </a>
            </li>
        </ul>
    );
};
export default StickyNote;
