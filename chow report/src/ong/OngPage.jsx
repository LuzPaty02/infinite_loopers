import CustomSidebarItem from './CustomSidebarItem'; // Import the CustomSidebarItem component
import React, { useState } from 'react';

const OngPage = () => {
    const [selectedTab, setSelectedTab] = useState('Ubicaciones'); // State to track the selected tab
    const [sidebarItems, setSidebarItems] = useState([]); // State to manage the list of sidebar items

    const handleTabClick = (tab) => {
        setSelectedTab(tab); // Function to handle tab click and update selectedTab state
    };

    // Function to add a new sidebar item with a specified zoneName
    const addSidebarItem = (zoneName) => {
        setSidebarItems([...sidebarItems, <CustomSidebarItem key={sidebarItems.length} onRemove={() => removeSidebarItem(sidebarItems.length)} zoneName={zoneName} />]);
    };

    // Function to remove a sidebar item by index
    const removeSidebarItem = (index) => {
        setSidebarItems(sidebarItems.filter((item, i) => i !== index));
    };

    return (
        <div className="flex flex-col md:flex-row relative">
            <div className="md:w-3/4">
                <div className="min-h-screen bg-origin-border h-14 bg-gradient-to-bl from-blue-50 to-indigo-300 flex justify-center items-center relative">
                    {/* Symbol 1 */}
                    <img src="https://img.icons8.com/plasticine/100/000000/marker.png" alt="Marker 1" className="absolute top-1/4 left-1/4" />
                    {/* Symbol 2 */}
                    <img src="https://img.icons8.com/plasticine/100/000000/marker.png" alt="Marker 2" className="absolute top-1/2 left-1/2" />
                    {/* Google Map Image */}
                    <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt="Google" className="object-cover mx-auto" />
                </div>
            </div>
            <div className="md:w-1/4 md:order-first">
                <div className="p-4">
                    <h2 className="text-lg font-bold">UBICACIONES:</h2>
                    <ul>
                    {sidebarItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        {/* Send the array of coordinates to the sidebar*/}
                        <button className="mt-4 bg-white text-white py-2 px-4 rounded" onClick={() => addSidebarItem("Latitud: 20.74021 Longitud:-103.4432407")}></button>
                        <button className="mt-4 bg-white text-white py-2 px-4 rounded" onClick={() => addSidebarItem("Latitud: 25.7092 Longitud:-99.5578")}></button>
                        <button className="mt-4 bg-white text-white py-2 px-4 rounded" onClick={() => addSidebarItem("Latitud: 40.7502 Longitud:-88.7765")}></button>
                        <button className="mt-4 bg-white text-white py-2 px-4 rounded" onClick={() => addSidebarItem("Latitud: 35.8831 Longitud:-68.4473")}></button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OngPage;