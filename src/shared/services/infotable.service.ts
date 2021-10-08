import {IInfoTable} from '@shared/interfaces';
import axios from 'axios';

export default class InfoTableService {
    static getInfoTable() {
        return axios.get<IInfoTable[]>('infotable.json');
    }
}
