import React from 'react';
import '@styles/CreateAccount.scss';

const AddPatient = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Nombre</label>
						<input type="text" id="name" placeholder="Nombres" className="input input-name" />
            <label for="lastname" className="label">Apellidos</label>
						<input type="text" id="lastname" placeholder="Apellidos" className="input input-lastname" />
						<label for="birthdate" className="label">Fecha de nacimiento</label>
						<input type="date" id="birthdate" placeholder="Fecha de nacimiento" className="input input-birthdate" />
						<label for="cellphone" className="label">Fecha de nacimiento</label>
						<input type="tel" id="cellphone" placeholder="Celular" className="input input-cellphone" />
						<label for="city" className="label">Ciudad</label>
						<input type="tel" id="city" placeholder="Ciudad" className="input input-city" />
						<label for="municipality" className="label">Municipio</label>
						<input type="text" id="municipality" placeholder="Municipio" className="input input-municipality" />
						<label for="address" className="label">Direccion</label>
						<input type="text" id="address" placeholder="Direccion" className="input input-address" />
						<label for="RH" className="label">RH</label>
						<input type="text" id="RH" placeholder="RH" className="input input-RH" />
						<label for="height" className="label">Altura</label>
						<input type="number" id="height" placeholder="Altura" className="input input-height" />
						<label for="weight" className="label">Peso</label>
						<input type="number" id="weight" placeholder="Peso" className="input input-weight" />
						<label for="allergies" className="label">Alergias</label>
						<input type="number" id="allergies" placeholder="Alergias" className="input input-allergies" />

						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="medico@example.com" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<input type="submit" value="Create" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default AddPatient; 