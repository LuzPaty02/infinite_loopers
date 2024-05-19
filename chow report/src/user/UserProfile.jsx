import React from 'react';
import Navbar from './Navbar';
import { FaUser } from 'react-icons/fa';

const UserProfile = () => {
    return (
        <>
        <Navbar />
            <div className="justify-center flex flex-col items-center min-h-screen bg-origin-border h-14 bg-gradient-to-bl from-blue-50 to-indigo-300">
                <div className="text-4xl">
                    <FaUser />
                </div>
                <header className="px-4 py-10">
                    <h1 className="font-mono text-xl">PERFIL DE USUARIO</h1>
                </header>
                <div>
                    <p>Adela</p>
                </div>
                <div>
                    <p>a01637205@tec.mx</p>
                </div>
                <button
    className="mt-8 px-4 py-2 bg-cyan-400 text-white rounded-md hover:bg-cyan-500 focus:outline-none focus:bg-cyan-500"
                >
                    Cerrar sesión
                </button>
            </div>
        </>
    );
};
export default UserProfile;