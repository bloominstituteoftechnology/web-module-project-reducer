import React from 'react';

const CalcButton = (props) => {
    const { value, handleClick = ()=>{}, size = 4} = props;

    return(<div className={`col-xs-${size}`}>
        <button type="button" onClick={handleClick} className="btn">{value}</button>
    </div>);
}

export default CalcButton;