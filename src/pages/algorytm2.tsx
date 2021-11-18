import React from 'react';
import './home.page.scss';

const Algorytm2 = () => {
    const liczby = () => {
        const b = 10;
        for (let a = 0; a <= b; a++) {
            console.log(a);
        }
    };
    return (
        <div>
            <div>
                <button onClick={liczby}> Klik w console log</button>
            </div>
        </div>
    );
};

export default Algorytm2;
