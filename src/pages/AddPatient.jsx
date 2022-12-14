import React, { useState } from 'react';
import axios from "axios";
import '@styles/CreateForm.scss';

const baseURL = "http://localhost:8080/api/v1/pacients/";


const AddPatient = () => {
	const [patient, setPatient] = useState({
		id: "",
		name: "",
		lastname: "",
		birthdate: "",
		cellphone: "",
		city: "",
		municipality: "",
		address: "",
		rh: "",
		height: "",
		weight: "",
		allergies: "",
	})

	function handleData(event) {
		const newPatient = { ...patient };
		newPatient[event.target.id] = event.target.value;
		setPatient(newPatient)
	}
	
		function createPatient() {
			axios.post(baseURL, patient)
			}
	


	return (
		<div className="CreateForm">
			<div className="CreateForm-container">
				<h1 className="title">Agregar Paciente</h1>
				<form action="/" className="form">
					<div>
						<label htmlFor="id" className="label">Cédula</label>
						<input required onChange={(event) => handleData(event)} type="number" id="id" placeholder="Cédula" className="input input-id" />
						<label htmlFor="name" className="label">Nombre</label>
						<input required onChange={(event) => handleData(event)} type="text" id="name" placeholder="Nombres" className="input input-name" />
						<label htmlFor="lastname" className="label">Apellidos</label>
						<input required onChange={(event) => handleData(event)} type="text" id="lastname" placeholder="Apellidos" className="input input-lastname" />
						<label htmlFor="birthdate" className="label">Fecha de nacimiento</label>
						<input required onChange={(event) => handleData(event)} type="date" id="birthdate" placeholder="Fecha de nacimiento" className="input input-birthdate" />
						<label htmlFor="cellphone" className="label">Celular</label>
						<input required onChange={(event) => handleData(event)} type="number" id="cellphone" placeholder="Celular" className="input input-cellphone" />
						<label htmlFor="city" className="label">Ciudad</label>
						<input required onChange={(event) => handleData(event)} type="tel" id="city" placeholder="Ciudad" className="input input-city" />
						<label htmlFor="municipality" className="label">Municipio</label>
						<input required onChange={(event) => handleData(event)} type="text" id="municipality" placeholder="Municipio" className="input input-municipality" />
						<label htmlFor="address" className="label">Direccion</label>
						<input required onChange={(event) => handleData(event)} type="text" id="address" placeholder="Direccion" className="input input-address" />
						<label htmlFor="rh" className="label">RH</label>
						<select required onChange={(event) => handleData(event)} id="rh" className="input input-rh" >
							<option disabled defaultValue="rh">RH</option>
							<option defaultValue="O-">O-</option>
							<option defaultValue="O+">O+</option>
							<option defaultValue="A-">A-</option>
							<option defaultValue="A+">A+</option>
							<option defaultValue="B-">B-</option>
							<option defaultValue="B+">B+</option>
							<option defaultValue="AB-">AB-</option>
							<option defaultValue="AB+">AB+</option>
						</select>
						<label htmlFor="height" className="label">Altura</label>
						<input onChange={(event) => handleData(event)} type="number" step="0.01" id="height" placeholder="Altura" className="input input-height" />
						<label htmlFor="weight" className="label">Peso</label>
						<input onChange={(event) => handleData(event)} type="number" id="weight" placeholder="Peso" className="input input-weight" />
						<label htmlFor="allergies" className="label">Alergias</label>
						<textarea onChange={(event) => handleData(event)} type="number" id="allergies" placeholder="Alergias" className="input input-allergies" />
					</div>
					<input type="button" onClick={createPatient} defaultValue="Crear Paciente" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default AddPatient; 