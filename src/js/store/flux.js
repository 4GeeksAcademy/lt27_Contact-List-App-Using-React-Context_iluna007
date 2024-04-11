const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			contacts: [
				{
					name: "Pedro",
					phone: "8486851515",
					address: "calle 123",
					email: "ppp@asdasd.com"
				},
				{
					name: "Alejandor",
					phone: "841321315",
					address: "calle 123124 ",
					email: "aaa@asdasd.com"
				},
				{
					name: "Carlos",
					phone: "84136551",
					address: "calle luci 124 ",
					email: "dsd@hotmail.com"
				},
				
			],
			titulo: 'Este es el titulo desde flux'
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			printText: () => {
				console.log('Hola desde flux');
			},
			eliminar:(indexToDelete) => {
				const store = getStore();
				console.log("eliminado", indexToDelete);
				setStore({ contacts: 
					store.contacts.filter(
						(contact, contactIndex) => 
						contactIndex !== indexToDelete) });
			},
			editar:() => {
				console.log("editando");
			},
			updateTitle: () => {
				console.log('confirmando accion');
				setStore({ titulo: 'nuevotitulo'});
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('cargando datos');
				/**
				 fetch('')
				 .then((response)=>response.json())
				 .then((data)=>console.log(data.contacts))
				 setStore({ contacts: data.contacts });
				 */
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
			}
		}
	};
};

export default getState;
