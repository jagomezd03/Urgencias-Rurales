import React, { useEffect, useState } from "react";
import "@styles/Patients.scss";
import { NavLink } from "react-router-dom";
import useGetPerson from '../hooks/useGetPerson'
import PatientInfo from "../components/PatientInfo";


import banner from "@logos/Doctor measuring blood pressure to male patient.png";


const Patients = () => {
  let api = `http://localhost:8080/api/v1/pacients/`;

  let allItems = useGetPerson(api)

  return (
    <>
    <section className='banner'>
      <div>
        <h2 className=''>¡Bienvenido a la sección de pacientes!</h2>
        <h5>Acá podrás observar todos los pacientes que se han atendido y podras agregar más</h5>
        <NavLink to="/add-patient"><button className="primary-button">Agregar paciente</button></NavLink>
      </div>
      <img className="banner-image" alt="Pacientes" src={banner}  />

    </section>
    <section>
    {allItems && 
    <table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>RH</th>
      <th>Fecha de nacimiento</th>
      <th>Peso</th>
      <th>Altura</th>
      <th>Alergias</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {allItems?.map(patient => (
    <PatientInfo patient={patient} key={patient.id}/>
  ))}
  </tbody>
</table>}
    </section>
</>
  );
};

export default Patients;
