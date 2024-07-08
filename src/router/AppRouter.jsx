import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Navegacion from "../components/Navegacion";
import Detalle from "../pages/Detalle";
import BusquedaPorTipo from "../pages/BusquedaPorTipo";
import BusquedaPorNombre from "../pages/BusquedaPorNombre";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navegacion></Navegacion>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route
          path="/buscar"
          element={<BusquedaPorNombre></BusquedaPorNombre>}
        ></Route>
        <Route path="/detalle" element={<Detalle></Detalle>}></Route>
        <Route
          path="/tipo"
          element={<BusquedaPorTipo></BusquedaPorTipo>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
