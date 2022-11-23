import React, { useState } from 'react';

import '@styles/CreateForm.scss';

const AddConsultation = () => {
  const url = "";
  const [consultation, setConsultation] = useState({
    id: "",
    type: "",
    place: "",
    date: "",
    time: "",
    reason: "",
  })

  function handleData(event) {
    const newConsultation = { ...consultation };
    newConsultation[event.target.id] = event.target.value;
    setConsultation(newConsultation)
    console.log(newConsultation);
  }

  function createPatient() {
    axios
      .post(baseURL, patient)
      .then((response) => {
        setPost(response.data);
      });
    }

  return (
    <div className="CreateForm">
      <div className="CreateForm-container">
        <h1 className="title">Añadir Consulta Medica</h1>
        <form action="/" className="form">
          <div>
            <label for="type" className="label">Tipo</label>
            <input onChange={(event) => handleData(event)} type="text" id="type" placeholder="tipo de la consulta" className="input input-type" />
            <label for="place" className="label">Lugar de atención</label>
            <input onChange={(event) => handleData(event)} type="text" id="place" placeholder="Ubicacion" className="input input-place" />
            <label for="date" className="label">Fecha</label>
            <input onChange={(event) => handleData(event)} type="date" id="date" placeholder="Fecha de la consulta" className="input input-date" />
            <label for="time" className="label">Hora</label>
            <input onChange={(event) => handleData(event)} type="time" id="time" placeholder="Hora de atencion" className="input input-time" />
            <label for="Reason" className="label">Motivo consulta</label>
            <input onChange={(event) => handleData(event)} type="text" id="Reason" placeholder="Motivo de la consulta" className="input input-Reason" />
          </div>
          <input type="submit" value="Create" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
}

export default AddConsultation; 