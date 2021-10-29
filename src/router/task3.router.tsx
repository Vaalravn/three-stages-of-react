import React from 'react';
import StickyPage from '@pages/sticky.page';
import WpisyPage from '@pages/wpisy.page';
import {Switch, Route, useRouteMatch} from 'react-router';

const TaskRouter = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/wpisy`}>
                <WpisyPage />
            </Route>
            <Route path={`${path}/sticky`}>
                <StickyPage />
            </Route>
        </Switch>
    );
};

export default TaskRouter;
