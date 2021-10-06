import React from 'react';
import '@pages/home.page.scss';

export const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="logo">
                <a href="http://localhost:3000/task1">
                    <p>Dominik Góra</p>
                </a>
            </div>

            <div className="right-section">
                <div className="dropdown">
                    <p className="dropbtn">Dropdown</p>
                    <div className="dropdown-content">
                        <a className="liststyle" href="https://www.chrigo-architecture.com/">
                            Wzór
                        </a>
                        <a
                            className="liststyle"
                            href="#"
                            onClick={() => alert('Miało być ładnie a wyszło jak zawsze')}>
                            Kontakt
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const BottomPart = () => {
    return (
        <div className="Textbox1">
            <div className="Textbox2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed eros
                gravida, ornare purus at, finibus quam. Integer ac finibus urna. Phasellus ut
                imperdiet velit. Nulla auctor accumsan sagittis. Cras elementum ut elit sed auctor.
            </div>
            <form className="form">
                <div className="formpart1">
                    <input
                        type="text"
                        placeholder="Imię i nazwisko"
                        id="name"
                        className="formField"
                    />
                </div>
                <div>
                    <input type="text" placeholder="Telefon" id="phone" className="formField" />
                </div>
                <div className="formpart2">
                    <input type="text" placeholder="E-mail" id="email" className="formField" />
                </div>
                <div className="formpart3">
                    <textarea
                        placeholder="Wiadomość"
                        id="message"
                        className="formFieldArea"></textarea>
                </div>
                <div>
                    <button className="sendBtn" onClick={() => alert('Wysłano')}>
                        Wyślij
                    </button>
                </div>
            </form>
            <div className="Textbox2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed eros
                gravida, ornare purus at, finibus quam. Integer ac finibus urna. Phasellus ut
                imperdiet velit.
            </div>
        </div>
    );
};
