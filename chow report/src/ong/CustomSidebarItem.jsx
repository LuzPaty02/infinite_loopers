import React, { useState } from 'react';

const CustomSidebarItem = ({ onRemove, zoneName }) => {
    const [dogsRescued, setDogsRescued] = useState('');
    const [showButton, setShowButton] = useState(false);

    const handleInputChange = (event) => {
        setDogsRescued(event.target.value);
        setShowButton(event.target.value !== ''); // Show button only if there is a value in dogsRescued
    };

    const handleButtonClick = () => {
        onRemove(); // Call onRemove function passed from parent component to remove this sidebar item
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">{zoneName}</h2> {/* Use the zoneName prop here */}
            <div className="mt-2">
                <label htmlFor="dogsRescued" className="block">Número de perros rescatados:</label>
                <input type="number" id="dogsRescued" value={dogsRescued} onChange={handleInputChange} />
            </div>
            {showButton && (
                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded" onClick={handleButtonClick}>Búsqueda exitosa</button>
            )}
        </div>
    );
};

export default CustomSidebarItem;
