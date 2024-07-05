import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
