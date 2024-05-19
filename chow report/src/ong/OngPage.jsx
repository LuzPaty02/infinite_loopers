import CustomSidebarItem from './CustomSidebarItem'; // Import the CustomSidebarItem component
import React, { useState } from 'react';

const OngPage = () => {
    const [selectedTab, setSelectedTab] = useState('Ubicaciones'); // State to track the selected tab
    const [sidebarItems, setSidebarItems] = useState([]); // State to manage the list of sidebar items

    const handleTabClick = (tab) => {
        setSelectedTab(tab); // Function to handle tab click and update selectedTab state
    };

    // Function to add a new sidebar item
    const addSidebarItem = () => {
        setSidebarItems([...sidebarItems, <CustomSidebarItem key={sidebarItems.length} onRemove={() => removeSidebarItem(sidebarItems.length)} />]);
    };

    // Function to remove a sidebar item by index
    const removeSidebarItem = (index) => {
        setSidebarItems(sidebarItems.filter((item, i) => i !== index));
    };

    return (
        <div className="flex flex-col md:flex-row">
            {/* Main Content */}
            <div className="md:w-3/4">
                {/* Main content here */}
                <div className="min-h-screen bg-origin-border h-14 bg-gradient-to-bl from-blue-50 to-indigo-300">
                    {/* Main content goes here */}
                </div>
            </div>
            {/* Sidebar */}
            <div className="md:w-1/4 md:order-first">
                <div className="p-4">
                    <h2 className="text-lg font-bold">UBICACIONES:</h2>
                    <ul>
                    {sidebarItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={addSidebarItem}>Add Item</button>
                        {/* Add more tabs as needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OngPage;