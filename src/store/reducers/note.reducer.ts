import {INote, NoteAction, NoteState} from '@shared/interfaces';
import {NoteActions} from '@store/actions/note.action';
const initialState: NoteState = {
    note: [
        {
            id: 1,
            title: 'post 1',
            text: 'Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi',
        },
        {
            id: 2,
            title: 'post 2',
            text: 'Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint',
        },
    ],
};

const noteReducer = (state: NoteState = initialState, action: NoteAction): NoteState => {
    switch (action.type) {
        case NoteActions.ADD_NOTE:
            const newNote: INote = {
                id: Math.random(),
                title: action.note.title,
                text: action.note.text,
            };
            return {
                ...state,
                note: state.note.concat(newNote),
            };
        case NoteActions.DELETE_NOTE:
            const updatedNotes: INote[] = state.note.filter((note) => note.id !== action.note.id);
            return {
                ...state,
                note: updatedNotes,
            };
    }
    return state;
};

export default noteReducer;
