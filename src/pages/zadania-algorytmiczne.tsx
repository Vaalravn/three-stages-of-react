import React from 'react';
import './home.page.scss';
import {useHistory, useRouteMatch} from 'react-router';
import AlgorytmRouter from '@router/algorytm.router';
const AlgorytmPage = () => {
    const history = useHistory();
    const {path} = useRouteMatch();
    return (
        <div className="routing-buttons-container">
            <button onClick={() => history.push(`${path}/algorytm1`)} className="routing-button">
                Zadanie 1
            </button>
            <button onClick={() => history.push(`${path}/algorytm2`)} className="routing-button">
                Zadanie 2
            </button>
            <button onClick={() => history.push(`${path}/algorytm3`)} className="routing-button">
                Zadanie 3
            </button>
            <button onClick={() => history.push(`${path}/algorytm4`)} className="routing-button">
                Zadanie 4
            </button>
            <AlgorytmRouter />
        </div>
    );
};

export default AlgorytmPage;
