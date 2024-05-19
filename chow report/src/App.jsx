import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Login from "./ong/login"
import SignupONG from "./ong/signupONG"
import SignupUsers from "./ong/signupUsers"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signupONG" element={<SignupONG />} />
        <Route path="/signupUsers" element={<SignupUsers />} />

      </Routes>
    </>
  )
}

export default App;