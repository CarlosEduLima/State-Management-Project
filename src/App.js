import React from 'react';
import './App.css';
import CarsList from './components/CarsList';
import Nav from './components/Nav';
import AddCar from './components/AddCar';
import { CarProvider } from './components/CarContext';
function App() {
  return (
    <CarProvider>
      <div className="App">
        <Nav />
        <AddCar />
        <CarsList />
      </div>
    </CarProvider>
  );
}

export default App;
