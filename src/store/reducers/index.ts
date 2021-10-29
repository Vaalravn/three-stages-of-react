import {NoteState} from '@shared/interfaces';
import {combineReducers} from 'redux';
import CoreReducer, {ICoreState} from './core.reducer';
import noteReducer from './note.reducer';

export interface IAppState {
    core: ICoreState;
    note: NoteState;
}

const reducers = combineReducers({
    core: CoreReducer,
    note: noteReducer,
});

export default reducers;
