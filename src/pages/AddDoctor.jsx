import React, { useState } from 'react';
import '@styles/CreateForm.scss';
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/doctors/";


const AddDoctor = () => {
	const url = "";
	const [post, setPost] = useState(null);
	const [doctor, setDoctor] = useState({
    cc: "",
		name: "",
		lastname: "",
		birthdate: "",
		cellphone: "",
		city: "",
		municipality: "",
		address: "",
		rh: "",
		specialty: "",
		schedule: "",
	}) 

function handleData(event) {
	const newDoctor = {...doctor};
	newDoctor[event.target.id] = event.target.value;
	setDoctor(newDoctor)
	console.log(newDoctor);
}

function createDoctor() {
	axios
		.post(baseURL, doctor)
	}


	return (
		<div className="CreateForm">
			<div className="CreateForm-container">
				<h1 className="title">Agregar Médico</h1>
				<form action="/" className="form">
					<div>
						<label htmlFor="cc" className="label">Cédula</label>
						<input required onChange={(event) => handleData(event)} type="number" id="cc" placeholder="Cédula" className="input input-cc" />
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
							<option defaultValue="O-" >O-</option>
							<option defaultValue="O+">O+</option>
							<option defaultValue="A-">A-</option>
							<option defaultValue="A+">A+</option>
							<option defaultValue="B-">B-</option>
							<option defaultValue="B+">B+</option>
							<option defaultValue="AB-">AB-</option>
							<option defaultValue="AB+">AB+</option>
						</select>
						<label htmlFor="specialty" className="label">Especialidad</label>
						<input onChange={(event) => handleData(event)} type="text" id="specialty" placeholder="Especialidad" className="input input-specialty" />
						<label htmlFor="schedule" className="label">Horario</label>
						<textarea onChange={(event) => handleData(event)} type="text" id="schedule" placeholder="Horario" className="input input-schedule" />
					</div>
					<input type="submit" onClick={createDoctor} defaultValue="Crear Paciente" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default AddDoctor; 