import {IInfoTable} from '@shared/interfaces/infotable.interface';
import axios from 'axios';

export default class InfoTableService {
    static getInfoTable() {
        return axios.get<IInfoTable[]>('http://localhost:4000/users');
    }
}
