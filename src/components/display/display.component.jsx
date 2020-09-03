import React from 'react';
import DisplayText from '../display-text/display-text.component';
import DrumPadsWrapper from '../drum-pads-wrapper/drum-pads-wrapper.component';
import Button from '../button/button.component';

import '../box/box.styles.scss';
import './display.styles.scss';


const Display= ({ textToDisplay, sounds, handlePlaySound, handleBank, handlePower, togglePower }) => {
    return(
        <div className="Display" id="display">
            <div className="header">
                <Button title="power" handlePower={handlePower} color={"#E52307"} />
                <Button title="bank" handleBank={handleBank} />
            </div>
            <div className="block">
                <h1 className="title"> <span className="styled-title">Drum</span> Machine </h1>
                <DisplayText textToDisplay={textToDisplay} />
            </div>
            <div className="block">
                <DrumPadsWrapper handlePlaySound={handlePlaySound} sounds={sounds} togglePower={togglePower} />
            </div>
            <footer className="footer">
                <p>Fernando Vieira</p>
            </footer>
        </div>
    )
}

export default Display;