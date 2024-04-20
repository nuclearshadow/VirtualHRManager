import React from 'react'
import Register from './Register'
import Login from './Login'
import {BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route  path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
