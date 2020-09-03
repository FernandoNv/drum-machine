import React from 'react';
import './drum-pad.styles.scss';

const DrumPad = ({ keyTrigger, id, url, playAudio }) => (
    <div className="drum-pad" id={id} onClick={playAudio} >
        <audio className="clip" id={keyTrigger} src={url}>Your browser does not support the <code>audio</code> element.</audio>
        <p className="inner-text">{ keyTrigger }</p>
    </div>
);

export default DrumPad;