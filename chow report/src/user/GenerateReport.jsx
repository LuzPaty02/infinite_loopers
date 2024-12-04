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

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-origin-border bg-gradient-to-bl from-blue-50 to-indigo-300 p-8 space-y-4">
            <h2 className="font-mono text-xl">°°° Subir o sacar foto °°°</h2>
            {/* Input para seleccionar una foto desde el almacenamiento local */}
            <input type="file" accept="image/*" capture="environment" onChange={handlePhotoChange} />
            {/* Vista previa de la foto seleccionada */}
            {photo && (
                <div>
                    <h3 className="text-lg mb-2">Vista previa de la foto</h3>
                    <img src={URL.createObjectURL(photo)} alt="Preview" style={{ maxWidth: '300px' }} />
                </div>
            )}
            {/* Campo de texto para la descripción */}
            <div>
                <label htmlFor="description" className="block mb-2">Descripción:</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>
            <a href="/user-report">
                <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Hacer Reporte
                </button>
            </a>
            <a href="/user-report">
                <button className="bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-cyan-500 focus:outline-none focus:bg-cyan-500">
                    Regresar
                </button>
            </a>
        </div>
    );
};

export default GenerateReport;
