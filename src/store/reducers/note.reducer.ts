import {INote, NoteAction, NoteState} from '@shared/interfaces';
import {NoteActions} from '@store/actions/note.action';
const initialState: NoteState = {
    note: [],
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
                note: [...state.note, newNote],
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
