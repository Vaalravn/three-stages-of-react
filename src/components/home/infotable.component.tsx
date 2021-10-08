import {IInfoTable} from '@shared/interfaces';
import InfoTableService from '@shared/services/infotable.service';
import {useEffect, useState} from 'react';
import React from 'react';
import '@pages/home.page.scss';

export const InfoTable = () => {
    const [table, setTable] = useState<IInfoTable[] | null>(null);

    useEffect(() => {
        InfoTableService.getInfoTable().then((response) => {
            setTable(response.data);
        });
    }, []);
    return (
        <div>
            <table>
                <tr>
                    <th>Numer</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Płeć</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                    {/* <td>
                        {table?.map((id) => (
                            <div key={id.id}>{id.id}</div>
                        ))}
                    </td>
                    <td>
                        {table?.map((dupa) => (
                            <div key={dupa.id}>{dupa.name}</div>
                        ))}
                    </td>
                    <td>
                        {table?.map((dupa) => (
                            <div key={dupa.id}>{dupa.lastname}</div>
                        ))}
                    </td>
                    <td>
                        {table?.map((dupa) => (
                            <div key={dupa.id}>{dupa.sex}</div>
                        ))}
                    </td> */}
                    <td className="tableOptions">
                        <button className="guzik">Edytuj</button>
                        <button className="guzik">Usuń</button>
                    </td>
                </tr>
            </table>
            <button>Dodaj nową osobe</button>
        </div>
    );
};
