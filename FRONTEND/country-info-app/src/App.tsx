import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CountryListPage from "./pages/countryListPage/countryListPage.tsx";
import CountryInfoPage from "./pages/countryInfoPage/countryInfoPage.tsx";
import "./App.scss";

function App() {
  return (
    <>
      <header className="countryList_header">
        <div className="countryList_header_container">
          <h1>Country Info Website</h1>
          <Link to={`/`}>Home</Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<CountryListPage />} />
        <Route path="/countryInfo/:code" element={<CountryInfoPage />} />
      </Routes>
    </>
  );
}

export default App;
