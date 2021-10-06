import {BottomPart, NavBar} from '@components/home';
import React from 'react';
import './home.page.scss';

const PortfolioPage = () => {
    return (
        <div id="wrap">
            <div id="Background"></div>
            <div id="Main">
                <NavBar />
                <div className="NameBox">
                    <h2 id="ImieNazw"> Dominik Góra</h2>
                    <div id="border">
                        <h2 id="IDK">Nie wiem co robie</h2>
                    </div>
                    <BottomPart />
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
