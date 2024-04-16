import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
export const Contacts = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const saveContact = (e) => {
    e.preventDefault();
    actions.postContact(store.titulo, data);
  };
  console.log(store.titulo);
  const info = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <ul className="list-group">
        {store.contacts.map((item, index) => {
          return (
            <li key={index} className="d-flex mb-3 border">
              <div className="p-2">
                <img
                  src="https://picsum.photos/200/200?grayscale"
                  className="rounded-circle"
                  alt="..."
                />
              </div>
              <div className="p-2">
                <div className="d-flex grid gap-3">
                  <h3>{item.name}</h3>
                </div>
                <div className="d-flex grid gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <p className="text-secondary">{item.address}</p>
                </div>
                <div className="d-flex grid gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-plus-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                  <p className="text-secondary">{item.phone}</p>
                </div>
                <div className="d-flex grid gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                  </svg>
                  <p className="text-secondary">{item.email}</p>
                </div>
              </div>
              <div className="ms-auto p-3">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-pencil"
                    viewBox="0 0 22 22"
                    onClick={() => actions.editar(index)}
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                  </svg>
                </button>

                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Are you sure do you want to edit this contact?
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>
                          <form>
                            <div className="mb-3">
                              <label
                                for="exampleInputAgendaName"
                                className="form-label"
                              >
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
                              <label
                                for="exampleInputFullName"
                                className="form-label"
                              >
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
                              <label
                                for="exampleInputEmail1"
                                className="form-label"
                              >
                                Email
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
                              <label
                                for="exampleInputAdress"
                                className="form-label"
                              >
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
                              <label
                                for="exampleInputPhone1"
                                className="form-label"
                              >
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
                            <div className="container text-center row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                              <div className="col">
                                <button
                                  onClick={saveContact}
                                  className="btn btn-outline-success"
                                >
                                  save
                                </button>
                              </div>
                            </div>
                          </form>
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => actions.eliminar(index)}
                        >
                          Yes, edit it
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-trash3-fill"
                    viewBox="0 0 22 22"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                  </svg>
                </button>

                <div
                  className="modal fade"
                  id="staticBackdrop2"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel2"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel2"
                        >
                          Are you sure do you want to erase this contact?
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>
                          Once you erase this contact, you will not be able to
                          recover it.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => actions.eliminar(index)}
                        >
                          Yes, erase it
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="container text-center row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div className="col">
          <button
            className="btn btn-outline-success"
            onClick={actions.getContacts}
          >
            Load contacts from
          </button>
        </div>
        <div className="col">
          <h3>
            <strong>{store.titulo}</strong>
          </h3>
        </div>
      </div>
    </div>
  );
};
