import React, { useState } from 'react';
import './App.css';
import './ChooseInventory';
import Syllable from './Syllable';
import Menu from './Menu';
import ChooseInventory from './ChooseInventory';
import Generate from './Generate';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [inventory, setInventory] = useState([]);
  const [syllables, setSyllables] = useState([]);

  return (
    <div className="App">

      Welcome to Mildly Context Sensitive
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu inventory={inventory} />} />
          <Route path="/syllable" element={<Syllable syllables={syllables} setSyllables={setSyllables} />} />
          <Route path="/inventory" element={<ChooseInventory inventory={inventory} setInventory={setInventory} />} />
          <Route path="/generate" element={<Generate inventory={inventory} syllables={syllables} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
