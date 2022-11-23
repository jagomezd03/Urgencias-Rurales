import React from 'react';
import gabage from "@icons/garbage.png";
import axios from "axios";


const PatientInfo = ({doctor}) => {
  let api = `http://localhost:8080/api/v1/doctors/`;

	function deleteDoctor(id) {
    axios
      .delete(`${api}/${id}`)
      .then(() => {
        alert("Doctor deleted!");
      });
  }
	return (
    <tr>
      <td><strong>{doctor?.name} {doctor?.lastname}</strong></td>
      <td>{doctor?.rh}</td>
      <td>{doctor?.specialty}</td>
      <td>{doctor?.schedule}</td>
      <td>{doctor?.cellphone}</td>
      <td><img onClick={()=>{deleteDoctor(doctor.id)}} height="30" width="30" src={gabage}/></td>    </tr>
	);
}

export default PatientInfo;
