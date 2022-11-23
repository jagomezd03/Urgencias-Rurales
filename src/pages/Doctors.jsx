import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import "@styles/Doctors.scss";
import useGetPerson from '../hooks/useGetPerson'

import banner from "@logos/doctor-heart.png";
import DoctorInfo from '@components/DoctorInfo'

const Doctors = () => {
  let api = `http://localhost:8080/api/v1/doctors/`;
  let allItems = useGetPerson(api)
  return (
    <>
    <section className='banner'>
      <div>
        <h2 className=''>¡Bienvenido a la sección de Médicos!</h2>
        <h5>Acá podrás observar todos los médicos que trabajan en urgencias y podrás agregar más</h5>
        <NavLink to="/add-doctor"><button className="primary-button">Agregar médico</button></NavLink>
      </div>
      <img className="banner-image" alt="Doctor y Corazon" src={banner}  />

    </section>
    <section>
    <table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>RH</th>
      <th>Especialidad</th>
      <th>Horario</th>
      <th>Celular</th>
    </tr>
  </thead>
  <tbody>
  {allItems?.map(doctor => (
    <DoctorInfo doctor={doctor} key={doctor.id}/>
  ))}
  </tbody>
</table>
    </section>
</>
  );
};

export default Doctors;
