import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <h2 className="fs-5 text-light">PokeRedux</h2>
        <Nav className="ms-auto">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : " "} `
            }
            to="/"
          >
            Inicio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : " "} `
            }
            to="/buscar"
          >
            Buscar por nombre
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : " "} `
            }
            to="/tipo"
          >
            Buscar por tipo
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
