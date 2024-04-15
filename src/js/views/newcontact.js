import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Newcontact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-start mt-5">
      <h1>This is the page to add contacts</h1>
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="exampleInputFullName" className="form-label">
              Full name
            </label>
            <input
              type="fullname"
              className="form-control"
              id="exampleInputFullName"
              value={store.contacts.name}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={store.contacts.email}
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
              value={store.contacts.phone}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputAdress" className="form-label">
              Adress
            </label>
            <input
              type="adress"
              className="form-control"
              id="exampleInputAdress"
            />
          </div>
          <button className="btn btn-success">
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
