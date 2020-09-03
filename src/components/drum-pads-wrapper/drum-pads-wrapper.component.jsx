import React from 'react';
import DrumPad from '../drum-pad/drum-pad.component';

import './drum-pads-wrapper.styles.scss';

const DrumPadsWrapper = ({ handlePlaySound, togglePower, sounds }) => {
    return(
        <div className="DrumPadsWrapper">
            {sounds.map(({ keyCode, keyTrigger, id, url }) => 
                <DrumPad 
                    playAudio={() => !togglePower ? handlePlaySound(keyTrigger, id): null} 
                    key={keyCode} 
                    id={id} 
                    keyTrigger={keyTrigger} 
                    url={url} 
                />)}
        </div>
    )
}

export default DrumPadsWrapper;