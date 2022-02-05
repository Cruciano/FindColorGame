import React from 'react';

const ColorContainer = ({color, index, onClick}) => {
    return (
        <div className="color-container"
             style={{backgroundColor: color}}
             onClick={() => onClick(index)}>
        </div>
    );
};

export default ColorContainer;