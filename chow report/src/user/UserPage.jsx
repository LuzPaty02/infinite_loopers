import React from 'react';
import Navbar from './Navbar';

const UserPage = () => {
    return(
        <>
        <Navbar />
        <div className="min-h-screen bg-origin-border h-14 bg-gradient-to-bl from-blue-50 to-indigo-300">
            <header className="px-4 py-10 flex flex-col items-center">
                <h1 className="font-mono text-xl">CHOW REPORT</h1>
            </header>
            <div>
                <p>Tus reportes:</p>
            </div>
            {/* Images */}
            <div className="flex justify-center mt-4">
                <img src="https://cdn.pixabay.com/photo/2017/08/01/09/04/dog-2563759_1280.jpg" alt="Dog 1" className="h-64 object-cover mr-4" />
                <img src="https://cdn.pixabay.com/photo/2021/02/09/21/19/dog-walk-snow-6000001_1280.jpg" alt="Dog 2" className="h-64 object-cover mr-4" />
                <img src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg" alt="Dog 3" className="h-64 object-cover" />
            </div>
        </div>
        </>
    );
};

export default UserPage;
