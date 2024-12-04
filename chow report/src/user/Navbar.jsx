import React, { useState } from 'react';
import UserPage from './UserPage';
import UserProfile from './UserProfile';
import UserReport from './UserReport';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    <div className="flex items-center justify-center">
                        <div className="flex-shrink-0">
                            {/* Dog paw SVG icon */}
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzdjM2FlZCIgZD0iTTMxNC43OCAxOS40N2MtMTguODQgMzMtMjMuNzgzIDcyLjg4NiA1Ljg3NiA2OS41NmMyNC4wNy0yLjY5NiAxNi4zNS00MC4zMDQtNS44NzUtNjkuNTZ6bS0xMjIuMjE3IDRjLTE3LjA5NSAzMy44LTE5Ljk1IDczLjg1NCA5LjUgNjkuMjE4YzIzLjktMy43NjQgMTQuMjI3LTQwLjk4My05LjUtNjkuMjJ6bTIyMi4xMjUgNzUuMzQzYy0yMS45NTggMzAuMzY1LTMwLjcwNSA2OS4zMDQtLjgxMyA2OS42ODdjMjQuMjYyLjMxMiAyMC4xNjMtMzcuOTQuODEzLTY5LjY4OHptLTMxOC4wNjMgMy4yNUM3OS45IDEzNC45NzIgNzkgMTczLjI0NSAxMDMuMjUgMTcxLjIyYzI5Ljg4LTIuNDk4IDE3Ljg2OC00MC41NDMtNi42MjUtNjkuMTU3bTIxNy41OTQgOC4zNzRjLTU1LjYxIDIuMjYyLTUwLjMyMiAxMTguNzI3IDIuNTkyIDExNi41OTRjNTIuMDE4LTIuMDg4IDUyLjExOC0xMTguODEtMi41OTMtMTE2LjU5M3ptLTEwNy4wOTUgMS44NDRjLS44MjguMDE2LTEuNjQ4LjA4NC0yLjUuMTU3Yy01NS40MiA0Ljc4NS00My45MjUgMTIwLjg0NyA4LjgxMyAxMTYuMzEzYzUxLjAzMy00LjM4IDQ1Ljg3Mi0xMTcuNDItNi4zMTMtMTE2LjQ3bS04Mi44NzUgODMuNDRhMzUuNSAzNS41IDAgMCAwLTQuOTM4LjI4Yy01NS4xNDYgNi45OS0zOC4yMjUgMTIyLjUwNiAxNC4yNSAxMTUuODc1YzQ5Ljk3NS02LjMxIDQwLjY0NS0xMTUuNTgtOS4zMTItMTE2LjE1NnptMjc4LjYyNSAxLjM0M2MtNTUuNjUzLTEuMDI3LTU4LjQ4NyAxMTUuNTAyLTUuNTMgMTE2LjVjNTIuMDU0Ljk4NiA2MC4yODQtMTE1LjQ4MiA1LjUzLTExNi41bS0xNDUgNjcuMjE4Yy01Ny4wMiAxLjI1OC0xMi45ODggNjAuMTg2LTExMy43OCA5NC40NGMtNzguMTIzIDI2LjU0OC0zMC44MDggMTA2LjUzMyAzNi4wNiAxMDYuODFjMzYuNzAyLjE1NCA0OS44LTI4LjgxNyA3OS44NDUtMjguNjg2YzM0LjExNi4xNDQgMzYuODQ0IDI2LjEzNCA4Ni43OCAyNi4zNDRjNjMuNzYuMjYzIDEwMC42NjUtODAuMiAyNy43Mi0xMDcuNTMyYy05Mi44NzUtMzQuNzk4LTU0LTkwLjc4Ni0xMTMuODEzLTkxLjM3NWMtLjk1Ny0uMDA4LTEuOTA3LS4wMi0yLjgxMiAweiIvPjwvc3ZnPg==" 
                            alt="Dog Paw Icon" 
                            className="text-white text-2xl h-14 w-14" /> 
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/user-report" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Reportar</a>
                                <a href="/user-page" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Principal</a>
                                <a href="/user-profile" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Perfil</a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;