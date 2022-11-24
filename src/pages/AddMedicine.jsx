import React, { useState } from 'react';
import axios from "axios";


import '@styles/CreateForm.scss';

const AddMedicine = () => {

  let baseURL = `http://localhost:8080/api/v1/medicines/`;
	const [medicine, setMedicine] = useState({
		name: "",
		serial: "",
		type: "",
		lab: "",
		dose: "",
	})

	function handleData(event) {
		const newMedicine = { ...medicine };
		newMedicine[event.target.id] = event.target.value;
		setMedicine(newMedicine)
    console.log(newMedicine);

	}

  function createMedicine() {
    axios
      .post(baseURL, medicine)
      .then(() => {
        alert("Medicina Agregada");
      });
    }

  return (
    <div className="CreateForm">
      <div className="CreateForm-container">
        <h1 className="title">Añadir Medicamentos</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Nombre Medicamento</label>
            <input required onChange={(event) => handleData(event)} type="text" id="name" placeholder="Ingresar medicamento" className="input input-name" />
            <label htmlFor="serial" className="label">Serial</label>
            <input required onChange={(event) => handleData(event)} type="text" id="serial" placeholder="Codigo serial" className="input input-serial" />
            <label htmlFor="type" className="label">Tipo</label>
            <input required onChange={(event) => handleData(event)} type="text" id="type" placeholder="Tipo medicamento" className="input input-type" />
            <label htmlFor="lab" className="label">Laboratorio</label>
            <input required onChange={(event) => handleData(event)} type="text" id="lab" placeholder="Laboratorio" className="input input-lab" />
            <label htmlFor="dose" className="label">Dosis</label>
            <input required onChange={(event) => handleData(event)} type="text" id="dose" placeholder="Dosis resetada" className="input input-dose" />
          </div>
          <input type="button" onClick={createMedicine} defaultValue="Crear Medicina" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
}

export default AddMedicine; 