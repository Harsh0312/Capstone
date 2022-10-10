import React from 'react';
import { useState,useEffect } from 'react';
import { Medicine } from '../models/medicine';
import logo from './logo.svg';


function App() {
  const[medicines,setMedicines]=useState<Medicine[]>([]);
  useEffect(()=>{
    fetch('http://localhost:5000/medicines')
    .then(response=>response.json())
    .then(data=>setMedicines(data))
  },[])
  return (
    <>
    <h1>Hello Harsh</h1>
    <div>
      <ul>
        {
          medicines.map((item,index) =>(
            <li key={index}>{item.nameMed}- {item.priceMed}</li>
          ))
        }
      </ul>
    </div>
    </>
  );
}

export default App;
