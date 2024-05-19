import React from 'react';
import { Route, Routes } from 'react-router-dom'
import UserReport from './user/UserReport.jsx'
import GenerateReport from './user/GenerateReport'

function App () {
    return (
        <Routes>
                <Route path="/user-report" element={<UserReport />} />
                <Route path="/generate-report" element={<GenerateReport />} />
        </Routes>
    )
}

export default App;