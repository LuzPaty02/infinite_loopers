import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Login from "./ong/login"
import Signup from "./ong/signup"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App;