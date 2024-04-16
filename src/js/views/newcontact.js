import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Newcontact = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({
    name: "", 
    phone: "", 
    email: "", 
    address: ""});
  const saveContact = (e) => {
    e.preventDefault();
    actions.postContact(store.titulo, data);
  }
  console.log(store.titulo);
  const info = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="text-start mt-5">
      <h1>This is the page to add contacts</h1>
      <div className="container">
         <form>
         <div className="mb-3">
            <label for="exampleInputAgendaName" className="form-label">
              Agenda Name
            </label>
            <input
              type="agendaname"
              className="form-control"
              id="exampleInputAgendaName"
              value={store.titulo}
              placeholder={store.titulo}
            />
          </div>
         
          <div className="mb-3">
            <label for="exampleInputFullName" className="form-label">
              Full name
            </label>
            <input
              type="fullname"
              className="form-control"
              id="exampleInputFullName"
              value={data.name}
              onChange={info}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={data.email}
              onChange={info}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputAdress" className="form-label">
              Address
            </label>
            <input
              type="adress"
              className="form-control"
              id="exampleInputAdress"
              value={data.address}
              onChange={info}
              name="address"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPhone1" className="form-label">
              Phone
            </label>
            <input
              type="phone"
              className="form-control"
              id="exampleInputPhone1"
              value={data.phone}
              onChange={info}
              name="phone"
            />
          </div>
          <button onClick={saveContact} className="btn btn-success">
            save
          </button>
          <Link to="/contacts">
            <button className="btn btn-primary">or get back to contacts</button>
          </Link>
        </form>
      </div>
    </div>
  );
};
