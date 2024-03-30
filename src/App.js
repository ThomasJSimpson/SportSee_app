import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import SettingPage from "./pages/SettingPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState } from "react";

function App() {
  const [isMocked, setIsMocked] = useState(true);
  const [id, setId] = useState(12);

  function handleId(event) {
    const id = parseInt(event.target.value, 10);
    setId(id);
  }

  function handleData(event) {
    const booleanValue = event.target.value.toLowerCase() === "true";
    setIsMocked(booleanValue);
  }

  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="/SportSee_app" element={<SettingPage handleId={handleId} handleData={handleData} id={id} isMocked={isMocked} />} />
          <Route path="/SportSee_app/user/:id" element={<Dashboard isMocked={isMocked} />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;
