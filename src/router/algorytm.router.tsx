import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router';
import {Redirect} from 'react-router-dom';
import Algorytm3 from '@pages/algorytm3';
import Algorytm2 from '@pages/algorytm2';
import Algorytm1 from '@pages/algorytm1';
import Algorytm4 from '@pages/algorytm4';

const AlgorytmRouter = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <Redirect to={`${path}/algorytm1`} />
            </Route>
            <Route path={`${path}/algorytm1`}>
                <Algorytm1 />
            </Route>
            <Route path={`${path}/algorytm2`}>
                <Algorytm2 />
            </Route>
            <Route path={`${path}/algorytm3`}>
                <Algorytm3 />
            </Route>
            <Route path={`${path}/algorytm4`}>
                <Algorytm4 />
            </Route>
        </Switch>
    );
};

export default AlgorytmRouter;
