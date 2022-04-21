import React from "react";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoinPage } from "./pages/CoinPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/coin/:id" element={<CoinPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
