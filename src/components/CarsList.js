import React, { useState, useContext } from 'react';
import { CarContext } from './CarContext';
import Car from './Car';
function CarList () {
    const [cars, setCars] = useContext(CarContext); 
    return (
        <div>
            {cars.map(car => (
                    <li>
                        <Car name={car.name} price={car.price} year={car.year} color={car.color} />
                    </li>
            ))}
        </div>
    );
}

export default CarList;