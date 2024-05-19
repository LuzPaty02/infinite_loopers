import React from 'react';
import { Route, Routes } from 'react-router-dom'
import UserReport from './user/UserReport.jsx'
import GenerateReport from './user/GenerateReport.jsx'
import UserPage from './user/UserPage.jsx'
import UserProfile from './user/UserProfile.jsx'

function App () {
    return (
        <Routes>
                <Route path="/user-page" element={<UserPage />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/user-report" element={<UserReport />} />
                <Route path="/generate-report" element={<GenerateReport />} />
        </Routes>
    )
}

export default App;