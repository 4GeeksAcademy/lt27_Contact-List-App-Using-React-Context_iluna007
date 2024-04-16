import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3 ">
      <div className="dropdown">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={actions.getAgendas}
        >
          Available Agendas 
        </button>
        <ul className="dropdown-menu">
          {store.agendas.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                {item.slug}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container text-center row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <p>
          Owner agenda: <strong>{store.titulo}</strong>
        </p>
        <Link to="/newcontact">
          <button className="btn btn-outline-secondary">Add new contact</button>
        </Link>
        <Link to="/contacts">
          <button className="btn btn-outline-secondary">Contacts</button>
        </Link>
        <Link to="/">
          <button className="btn btn-outline-secondary">home</button>
        </Link>
      </div>
    </nav>
  );
};
