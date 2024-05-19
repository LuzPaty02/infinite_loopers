import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Login from "./ong/login"
import SignupONG from "./ong/signupONG"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupONG />} />
      </Routes>
    </>
  )
}

export default App;