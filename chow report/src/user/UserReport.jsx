import React from 'react';
import Navbar from './Navbar';
import Google_Maps from '../maps/google_maps';

const UserReport = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-origin-border bg-gradient-to-bl from-blue-50 to-indigo-300 flex justify-center items-center">
                <div style={{ position: 'relative', padding: '20px' }}>
                   <Google_Maps />
                </div>
            </div>
        </>
    );
};

export default UserReport;