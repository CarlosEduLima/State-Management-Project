import React from 'react';

const Car = ({ name, price, year, color }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{year}</p>
            <p>{color}</p>
        </div>
    );
}

export default Car;