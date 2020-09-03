import React from 'react';
import './button.styles.scss'

const clicked = (e, handler) => {
    if(e.target.firstChild){
        e.target.firstChild.classList.toggle('clicked')
    }else{
        e.target.classList.toggle('clicked')
    }

    return handler();
}

const Button = ({ title = 'title', handleBank, handlePower, color }) => (
    <div className="Button" >
        <div className="btn-area" onClick={(event) => handleBank? clicked(event, handleBank) : clicked(event, handlePower)}>
            <div className="btn" style={{backgroundColor: color}}></div>
        </div>
        <p className="title-btn">{ title }</p>
    </div>
);

export default Button;