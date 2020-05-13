import React, { useState, useContext } from 'react';
import { CarContext } from './CarContext';

const AddCar = () => {
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [year, setYear] = useState([]);
    const [color, setColor] = useState([]);
    const [cars, setCars] = useContext(CarContext);

    const uptadeName = (e) => {
        setName(e.target.value);
    };

    const uptadePrice = (e) => {
        setPrice(e.target.value);
    };
    const uptadeYear = (e) => {
        setYear(e.target.value);
    };
    const uptadeColor = (e) => {
        setColor(e.target.value);
    };

    const addCar = (e) =>{
        e.preventDefault();
        setCars(preCars => [...preCars, {name: name, price: price, year: year, color: color}])
    }
    return (
        <form onSubmit={addCar}>
            <input type="text" name="name" value={name} onChange={uptadeName} />
            <input type="text" name="price" value={price} onChange={uptadePrice} />
            <input type="text" name="year" value={year} onChange={uptadeYear} />
            <input type="text" name="color" value={color} onChange={uptadeColor} />
            <button type="submit">Add</button>
        </form>

    );
}
export default AddCar;