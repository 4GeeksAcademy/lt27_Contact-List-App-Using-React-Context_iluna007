import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [newuser, setNewUser] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.createAgenda(newuser);
  };
  const handleDelete = (event) => {
    event.preventDefault();
    actions.deleteAgenda(user);
  };

  return (
    <div className="text-center mt-5">
      <h1>Please submit a new agenda name</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="fullname"
              className="form-control"
              id="newAgenda"
              value={newuser}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <button
              className="btn btn-success"
              onClick={() => actions.createAgenda}
            >Add
            </button>
          </div>
        </form>
        <form onSubmit={handleDelete}>
          <div className="mb-3">
            <input
              type="fullname"
              className="form-control"
              id="newAgenda"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button
                  className="btn btn-danger"
                  onClick={() => actions.deleteAgenda}
                >Delete
            </button>            
          </div>
        </form>
      </div>
    </div>
  );
};
