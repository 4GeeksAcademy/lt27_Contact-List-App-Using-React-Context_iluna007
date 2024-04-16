import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
		  onClick={actions.getAgendas}
        >
          Agendas disponibles
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
      <div className="ml-auto">
        <p>Esta es la agenda de: <strong>{store.titulo}</strong></p>
        <Link to="/newcontact">
          <button className="btn btn-success">Add new contact</button>
        </Link>
        <Link to="/contacts">
          <button className="btn btn-primary">Contacts</button>
        </Link>
        <Link to="/">
          <button className="btn btn-secondary">home</button>
        </Link>
      </div>
    </nav>
  );
};
