import React from 'react';
import './home.page.scss';
import {useHistory, useRouteMatch} from 'react-router';
import TaskRouter from '@router/task3.router';
const RoutingTaskPage = () => {
    const history = useHistory();
    const {path} = useRouteMatch();
    return (
        <div className="routing-buttons-container">
            <button onClick={() => history.push(`${path}/wpisy`)} className="routing-button">
                Wpisy
            </button>
            <button onClick={() => history.push(`${path}/sticky`)} className="routing-button">
                Sticky notes
            </button>
            <TaskRouter />
        </div>
    );
};

export default RoutingTaskPage;
