import * as React from 'react';
import {INote} from '@shared/interfaces';

interface INoteComponent {
    note: INote;
}

const StickyNote = ({note}: INoteComponent) => {
    return (
        <li className="Sticky-Note">
            <a>
                <h2>{note.title}</h2>
                <div className="P-Wrap">
                    <p>{note.text}</p>
                </div>
            </a>
        </li>
    );
};
export default StickyNote;
