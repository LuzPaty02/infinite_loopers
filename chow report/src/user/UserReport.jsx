import React from 'react';
import Navbar from './Navbar';
import UserPage from './UserPage';

const UserReport = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-origin-border bg-gradient-to-bl from-blue-50 to-indigo-300 flex justify-center items-center">
                <div style={{ position: 'relative', padding: '20px' }}>
                    <img 
                        src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" 
                        alt="User Report Image" 
                        style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} // Set initial size
                    />
                    <a href="/generate-report">
                        <button 
                            style={{ 
                                backgroundColor: '#D77A93', 
                                position: 'absolute', 
                                top: '90%', 
                                left: '50%', 
                                transform: 'translate(-50%, -50%)' 
                            }} 
                            className="text-white py-6 px-12 rounded-md shadow-md hover:bg-opacity-80"
                        >
                            Reportar
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default UserReport;