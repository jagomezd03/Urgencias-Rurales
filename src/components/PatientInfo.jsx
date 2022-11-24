import React from 'react';
import gabage from "@icons/garbage.png";
import axios from "axios";


const PatientInfo = ({patient}) => {
	let api = `http://localhost:8080/api/v1/doctors/`;

	function deletePatient(id) {
    axios
      .delete(`${api}/${id}`)
      .then(() => {
        alert("Paciente Eliminado");
      });
  }
	return (
    <tr>
      <td><strong>{patient.name} {patient.lastname}</strong></td>
      <td>{patient.rh}</td>
      <td>{patient.birthdate}</td>
      <td>{patient.weight}</td>
      <td>{patient.height}</td>
      <td>{patient.allergies}</td>
      <td><img onClick={()=>{deletePatient(patient.id)}} height="30" width="30" alt='Delete patient' src={gabage}/></td>
    </tr>
	);
}

export default PatientInfo;
