import {NoteState} from '@shared/interfaces';
import {combineReducers} from 'redux';
import CoreReducer, {ICoreState} from './core.reducer';
import noteReducer from './note.reducer';
import asyncSessionStorage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

export interface IAppState {
    core: ICoreState;
    note: NoteState;
}
const notePersistConfig = {
    key: 'note',
    storage: asyncSessionStorage,
    whitelist: ['note'],
};

const reducers = combineReducers({
    core: CoreReducer,
    note: persistReducer(notePersistConfig, noteReducer),
});

export default reducers;
