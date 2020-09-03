import React from 'react';
import './box.styles.scss';

const Box = ({ backgroundColor }) => (
    <div className="Box backgroungImage">
        <div className="backgroundColor" style={{backgroundColor: backgroundColor}}></div>
        <p>Foto de <a className="author" rel="noopener noreferrer" target="_blank" href="https://www.pexels.com/pt-br/foto/aparelhos-bateria-cenario-close-1601464/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Wendy Wei</a></p>
    </div>
);

export default Box;

