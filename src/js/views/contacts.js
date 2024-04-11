import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contacts = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
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
                // Conditional render example
                // Check to see if the background is orange, if so, display the message
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
  );
};
