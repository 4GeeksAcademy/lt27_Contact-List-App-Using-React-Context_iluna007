import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [newuser, setNewUser] = useState('');

  console.log(store);
  console.log(store.demo);
  actions.printText();

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.crearAgenda(newuser);
  }

  return (
    <div className="text-center mt-5">
      <h1>Please submit a new name</h1>
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
            <button className="btn btn-success">Add new Agenda</button>
          </div>
        </form>
      </div>
    </div>
  );
}