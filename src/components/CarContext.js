import React, {useState, createContext} from 'react';

export const CarContext = createContext();

export const CarProvider = props => {
    const [cars, setCars] = useState([
        {
            name: 'Corolla',
            year: 2010,
            price: 40.000,
            color: 'grey'
        },
        {
            name: 'Azera',
            year: 2012,
            price: 50.000,
            color: 'black'
        },
        {
            name: 'Honda Civic',
            year: 2008,
            price: 30.000,
            color: 'red'
        }
    ]);
    return(
        <CarContext.Provider value={[cars, setCars]}>
        {props.children}
        </CarContext.Provider>
    )
}