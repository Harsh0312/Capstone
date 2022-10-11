import { useState, useEffect } from "react";
import { Medicine } from "../../app/models/medicine";
import MedicineCard from "./MedicineCard";
import MedicineList from "./MedicineList";



export default function Catalog(){
    const[medicines,setMedicines]=useState<Medicine[]>([]);
  useEffect(()=>{
    fetch('http://localhost:5000/medicines')
    .then(response=>response.json())
    .then(data=>setMedicines(data))
  },[])
    return(
       
        <>
        <MedicineList medicines={medicines}></MedicineList>
        </>
    )
}