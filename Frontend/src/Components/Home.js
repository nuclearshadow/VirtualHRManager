import React from 'react'
import Register from './Register'
import Login from './Login'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat_page from './Chat_page';
import AvatarDisplay from './AvatarDisplay';

export default function Home() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Chat_page/>}></Route>
      <Route  path="/login" element={<Login/>} />
      <Route  path="/register" element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
