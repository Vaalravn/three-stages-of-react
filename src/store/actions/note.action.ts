import {INote} from '@shared/interfaces';

export const NoteActions = {
    ADD_NOTE: 'Add note',
    DELETE_NOTE: 'Delete note',
};
export function addNote(note: INote) {
    return {
        type: NoteActions.ADD_NOTE,
        note,
    };
}

export function removeNote(note: INote) {
    return {
        type: NoteActions.DELETE_NOTE,
        note,
    };
}
