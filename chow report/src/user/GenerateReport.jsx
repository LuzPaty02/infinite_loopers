import React, { useState } from 'react';

const GenerateReport = () => {
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState('');
  
    // Función para manejar el cambio en la descripción
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    // Función para manejar el cambio en la foto seleccionada
    const handlePhotoChange = (event) => {
      const selectedPhoto = event.target.files[0];
      setPhoto(selectedPhoto);
    };
  
    // Función para manejar la subida de la foto
    const handleUpload = () => {
      // Aquí puedes implementar la lógica para subir la foto y la descripción a tu servidor
      // Por ejemplo, utilizando Axios para hacer una solicitud POST
  
      // Resetear el estado después de subir la foto
      setPhoto(null);
      setDescription('');
    };

    return(
        <>
            <div class = "min-h-screen bg-origin-border h-14 bg-gradient-to-bl from-blue-50 to-indigo-300">
                <h2>Subir o sacar foto</h2>
                {/* Input para seleccionar una foto desde el almacenamiento local */}
                <input type="file" accept="image/*" capture="environment" onChange={handlePhotoChange} />
                      {/* Vista previa de la foto seleccionada */}
                {photo && (
                    <div>
                    <h3>Vista previa de la foto</h3>
                    <img src={URL.createObjectURL(photo)} alt="Preview" style={{ maxWidth: '300px' }} />
                    </div>
                )}
                      {/* Campo de texto para la descripción */}
                <div>
                    <label htmlFor="description">Descripción:</label>
                    <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    />
                </div>
                {/* Botón para subir la foto */}
                <a href="/user-report">
                    <button onClick={handleUpload}>Hacer Reporte</button>
                </a>
                <a href="/user-report">
                    <button>Regresar</button>
                </a>
            </div>
        </>
    );
};

export default GenerateReport;