import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import PaidGames from './pages/PaidGames';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/paid-games" element={<PaidGames />} />
      </Routes>
    </BrowserRouter>
  );
}
