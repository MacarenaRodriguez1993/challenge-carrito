import React from "react";

import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Details from "./pages/details/details";
import Header from "./components/header/header";
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:_id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
