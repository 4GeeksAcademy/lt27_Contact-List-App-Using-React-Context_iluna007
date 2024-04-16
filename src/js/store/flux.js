const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contacts: [
        {
          name: "Pedro",
          phone: "8486851515",
          address: "calle 123",
          email: "ppp@asdasd.com",
        },
      ],

      titulo: [],
      agendaname: [],
      agendas: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      printText: () => {},
      eliminar: (indexToDelete) => {
        const store = getStore();
        console.log("eliminado", indexToDelete);
        setStore({
          contacts: store.contacts.filter(
            (contact, contactIndex) => contactIndex !== indexToDelete
          ),
        });
      },
      editar: () => {
        console.log("editando");
      },
      createAgenda: (newuser) => {
        console.log("Agenda creada");
        const requestOptions = {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({}),
        };

        fetch(
          `https://playground.4geeks.com/contact/agendas/${newuser}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            setStore({ titulo: newuser });
          })
          .catch((error) => console.error(error));
      },
      deleteAgenda: (user) => {
        console.log("borrando agenda");
        const requestOptions = {
          method: "DELETE",
          redirect: "follow",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({}),
        };

        fetch(
          `https://playground.4geeks.com/contact/agendas/${user}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            console.log(`se borro ${user}`);
          })
          .catch((error) => console.error(error));
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        console.log("cargando !");
      },
      getContacts: () => {
        const store = getStore();
        console.log("cargando contactos");
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          `https://playground.4geeks.com/contact/agendas/${store.titulo}/contacts`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);   
            setStore({ contacts: result.contacts });

          })
          .catch((error) => console.error(error));
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getAgendas: () => {
        console.log("getAgendas");
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch("https://playground.4geeks.com/contact/agendas", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.agendas);
            setStore({ agendas: data.agendas });
          })
          .catch((error) => console.error(error));
      },
      postContact: (titulo, data) => {
        console.log("agenda name:", titulo);
        console.log("data", data);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(data);

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          `https://playground.4geeks.com/contact/agendas/${titulo}/contacts`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
      },
    },
  };
};

export default getState;

/*

  */
