import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
export const Contacts = () => {
  const { store, actions } = useContext(Context);
 
  return (
  <div className="container">
      <div className="row">
        <button className="btn btn-warning" onClick={actions.loadContacts}>
          Cargar contactos
        </button>
        <ul className="list-group">
          {store.demo.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
                style={{ background: item.background }}
              >
                <Link to={"/single/" + index}>
                  <span>Link to: {item.title}</span>
                </Link>
                {
                  item.background === "orange" ? (
                    <p style={{ color: item.initial }}>
                      Check store/flux.js scroll to the actions to see the code
                    </p>
                  ) : null
                }
                <button
                  className="btn btn-success"
                  onClick={() => actions.changeColor(index, "orange")}
                >
                  Change Color
                </button>
              </li>
            );
          })}
          {store.contacts.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                {item.name}
                <br></br>
                {item.phone}
                <br></br>
                {item.address}
                <br></br>
                {item.email}
                <br></br>
                {index}
                <div>
                  <button onClick={() => actions.eliminar(index)}>
                    {" "}
                    Eliminar{" "}
                  </button>
                  <button onClick={() => actions.editar(index)}> Editar </button>
                </div>
              </li>
            );
          })}
        </ul>
        <br />
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
      <div className="row">
            <button className="btn btn-warning" onClick={actions.getAgendas}>
              Click poara ver agendas disponibles
            </button>
          <ul className="list-group">
            {store.agendas.map((item, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between"
                >
                    {item.slug}
                  <br></br>
                </li>
                );
            })}  
          </ul>
      </div>
  </div> 
  );
};
