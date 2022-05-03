import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Panel from "./views/Panel/Panel";
import Pilots from "./views/Pilots/Pilots";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Panel />} />
        <Route path="pilots" element={<Pilots />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
