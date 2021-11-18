import React from 'react';
import './home.page.scss';
import {default as lista1} from '@components/list1.json';
import {default as lista2} from '@components/list2.json';

const Algorytm1 = () => {
    const lista3 = lista1
        .filter((x) =>
            lista2.some((y) => y.name == x.name && y.role === x.role && y.role === 'admin'),
        )
        .sort((a, b) => a.id - b.id);
    const lista4 = lista1
        .filter((x) =>
            lista2.some((y) => y.name == x.name && y.role === x.role && y.role === 'admin'),
        )
        .sort((a, b) => b.name.split(' ')[1].length - a.name.split(' ')[1].length);
    return (
        <div>
            <div className="atable">
                <div>
                    <h2> Lista 1</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista1?.map((item) => (
                                <tr key={item.id}>
                                    <td key={item.id}>{item.id}</td>
                                    <td key={item.name}>{item.name}</td>
                                    <td key={item.role}>{item.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2> Lista 2</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista2?.map((item) => (
                                <tr key={item.id}>
                                    <td key={item.id}>{item.id}</td>
                                    <td key={item.name}>{item.name}</td>
                                    <td key={item.role}>{item.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2> Merged + Sort ID</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista3?.map((item) => (
                                <tr key={item.id}>
                                    <td key={item.id}>{item.id}</td>
                                    <td key={item.name}>{item.name}</td>
                                    <td key={item.role}>{item.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2> Merged + Sort Name</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista4?.map((item) => (
                                <tr key={item.id}>
                                    <td key={item.id}>{item.id}</td>
                                    <td key={item.name}>{item.name}</td>
                                    <td key={item.role}>{item.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Algorytm1;
