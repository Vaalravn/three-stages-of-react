export interface IInfoTable {
    id: number;
    name: string;
    lastname: string;
    sex: string;
    [key: string]: string | number;
}
