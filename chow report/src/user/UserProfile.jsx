import { FaUser } from 'react-icons/fa';

const UserProfile = () => {
    return (
        <>
            <div className="justify-center flex flex-col items-center min-h-screen bg-origin-border h-14 bg-gradient-to-bl from-blue-50 to-indigo-300">
                <div className="text-4xl">
                    <FaUser />
                </div>
                <header className="px-4 py-10">
                    <h1 className="font-mono text-xl">USER PROFILE</h1>
                </header>
                <div>
                    <p>nombre</p>
                </div>
                <div>
                    <p>correo</p>
                </div>
            </div>
        </>
    );
};
export default UserProfile;