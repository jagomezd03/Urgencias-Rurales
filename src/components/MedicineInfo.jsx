import React from 'react';
import gabage from "@icons/garbage.png";
import axios from "axios";


const PatientInfo = ({medicine}) => {
	let api = `http://localhost:8080/api/v1/medicines/`;

	function deletePatient(id) {
    axios
      .delete(`${api}/${id}`)
      .then(() => {
        alert("Paciente Eliminado");
      });
  }
	return (
    <tr>
    {console.log(medicine)}
      <td><strong>{medicine.name}</strong></td>
      <td>{medicine.lab}</td>
      <td>{medicine.type}</td>
      <td>{medicine.dose}</td>
      <td><img onClick={()=>{deletePatient(medicine.id)}} height="30" width="30" alt='Delete medicine' src={gabage}/></td>
    </tr>
	);
}

export default PatientInfo;
