import React, { useContext, useState } from 'react';
import { CarContext } from './CarContext';

const Nav = () => {
    const [cars, setCars] = useContext(CarContext);
    return (
        <nav>
            <h3>Cars Rent</h3>
            <p>List of cars: {cars.length}</p>
        </nav>
    );
}
export default Nav;