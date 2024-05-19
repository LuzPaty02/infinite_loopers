import React from 'react';
import Navbar from './Navbar';

const UserPage = () => {
    return(
        <>
        <Navbar />
            <div class = "min-h-screen bg-origin-border h-14 bg-gradient-to-bl from-blue-50 to-indigo-300">
            <header className="px-4 py-10 flex flex-col items-center">
                <h1 class= "font-mono text-xl">CHOW REPORT</h1>
            </header>
            <div>
                <p>Búsquedas Exitosas</p>    
            </div>
            <div>
                <p>Tus reportes</p>    
            </div>
            {/* //image */}
            </div>
        </>
    );
};

export default UserPage;