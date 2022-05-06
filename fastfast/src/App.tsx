import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Panel from "./views/Panel/Panel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Panel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
