/* eslint-disable @typescript-eslint/no-shadow */
import {IInfoTable} from '@shared/interfaces';
import InfoTableService from '@shared/services/infotable.service';
import {useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';

export const InfoTable = () => {
    const [table, setTable] = useState<IInfoTable[] | null>(null);
    const [edit, setEdit] = useState<Record<number, boolean>>();
    const [edited, setEdited] = useState<Record<number, IInfoTable>>();

    useEffect(() => {
        InfoTableService.getInfoTable().then((response) => {
            setTable(response.data);
            const editResult: Record<number, boolean> = {};
            response.data.forEach((item) => {
                editResult[item.id] = false;
            });
            setEdit(editResult);
        });
    }, []);

    const deleteRow = (id: number) => {
        const url = `http://localhost:4000/users/${id}`;
        axios.delete(url).then(() => {
            const del = (table ?? []).filter((item) => id !== item.id);
            setTable(del);
        });
    };
    const rowEdit = (id: number) => {
        setEdited({...edited, [id]: {...(table?.find((item) => item.id === id) as IInfoTable)}});
        setEdit({...edit, [id]: true});
    };
    const cancel = (id: number) => {
        setEdit({...edit, [id]: false});
    };
    const handleChange =
        (key: string, id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const tmp = {...edited};

            tmp[id][key] = event.target.value as string;
            setEdited(tmp);
        };
    const saveRow = (id: number) => {
        const tmp = edited?.[id];
        axios.put('http://localhost:4000/users/' + id, tmp).then((updatedRecord) => {
            const index = table?.findIndex((item) => item.id === id) as number;
            const tmp = [...(table ?? [])];
            tmp[index] = updatedRecord.data;
            setTable(tmp);
            setEdit({...edit, [id]: false});
        });
    };
    const addRow = () => {
        const newUser = {
            name: 'Imię',
            lastname: 'Nazwisko',
            sex: 'Płeć',
        } as IInfoTable;
        axios.post('http://localhost:4000/users', newUser).then((createdUser) => {
            const tmp = [...(table ?? []), createdUser.data];
            setTable(tmp);
        });
    };
    return (
        <div>
            <button onClick={addRow}>Dodaj nową osobe</button>
            <table>
                <thead>
                    <tr>
                        <th>Numer</th>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Płeć</th>
                        <th>****</th>
                    </tr>
                </thead>
                <tbody>
                    {table?.map((item) =>
                        !edit?.[item.id] ? (
                            <tr key={item.id}>
                                <td key={item.id}>{item.id}</td>
                                <td key={item.name}>{item.name}</td>
                                <td key={item.lastname}>{item.lastname}</td>
                                <td key={item.sex}>{item.sex}</td>
                                <td className="tableOptions">
                                    <button className="guzik" onClick={() => rowEdit(item.id)}>
                                        Edytuj
                                    </button>
                                    <button className="guzik" onClick={() => deleteRow(item.id)}>
                                        Usuń
                                    </button>
                                </td>
                            </tr>
                        ) : (
                            <tr key={item.id}>
                                <td key={item.id}>{item.id}</td>
                                <td key={item.name}>
                                    <input
                                        value={edited?.[item.id].name}
                                        type="text"
                                        onChange={handleChange('name', item.id)}></input>
                                </td>
                                <td key={item.lastname}>
                                    <input
                                        value={edited?.[item.id].lastname}
                                        type="text"
                                        onChange={handleChange('lastname', item.id)}></input>
                                </td>
                                <td key={item.sex}>
                                    <input
                                        value={edited?.[item.id].sex}
                                        type="text"
                                        onChange={handleChange('sex', item.id)}></input>
                                </td>
                                <td className="tableOptions">
                                    <button className="guzik" onClick={() => saveRow(item.id)}>
                                        Zapisz
                                    </button>
                                    <button className="guzik" onClick={() => cancel(item.id)}>
                                        Anuluj
                                    </button>
                                </td>
                            </tr>
                        ),
                    )}
                </tbody>
            </table>
        </div>
    );
};
