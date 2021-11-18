import {HomeWrapper} from '@components/home';
import PortfolioPage from '@pages/portfolio.page';
import RoutingTaskPage from '@pages/routing-task.page';
import TablePage from '@pages/table.page';
import AlgorytmyPage from '@pages/zadania-algorytmiczne';
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

const MainRouter = () => {
    return (
        <HomeWrapper>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/task1" />
                </Route>
                <Route path="/task1">
                    <PortfolioPage />
                </Route>
                <Route path="/task2">
                    <TablePage />
                </Route>
                <Route path="/task3">
                    <RoutingTaskPage />
                </Route>
                <Route path="/task4">
                    <AlgorytmyPage />
                </Route>
            </Switch>
        </HomeWrapper>
    );
};

export default MainRouter;
