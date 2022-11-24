import React, { useEffect, useState } from "react";
import "@styles/Patients.scss";
import { NavLink } from "react-router-dom";
import useGetPerson from '../hooks/useGetPerson'
import MedicineInfo from "../components/MedicineInfo";


import banner from "@logos/Doctor measuring blood pressure to male patient.png";


const Patients = () => {
  let api = `http://localhost:8080/api/v1/medicines/`;

  let allItems = useGetPerson(api)

  return (
    <>
    <section className='banner'>

        <NavLink to="/add-medicine"><button className="primary-button">Agregar medicina</button></NavLink>

    </section>
    <section>
    {allItems && 
    <table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Laboratorio</th>
      <th>Tipo</th>
      <th>Dosis</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {allItems?.map(medicine => (
    <MedicineInfo medicine={medicine} key={medicine.id}/>
  ))}
  </tbody>
</table>}
    </section>
</>
  );
};

export default Patients;
