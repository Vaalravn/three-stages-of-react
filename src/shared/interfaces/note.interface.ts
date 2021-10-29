export interface INote {
    id: number;
    title: string;
    text: string;
}

export type NoteState = {
    note: INote[];
};

export type NoteAction = {
    type: string;
    note: INote;
};

export type DispatchType = (args: NoteAction) => NoteAction;
