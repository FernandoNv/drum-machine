import React from 'react';

import './display-text.styles.scss';

const DisplayText = ({ textToDisplay }) => (
    <div className="DisplayText">
        <p className="text">{ textToDisplay }</p>
    </div>
);


export default DisplayText;
