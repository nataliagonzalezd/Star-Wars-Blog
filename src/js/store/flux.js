const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            characters: [],
            planets: [],
            vehicles: [],
			favorites: [],
			planetsDetail: {},
			charactersDetail: {},
            vehiclesDetail: {},
        },
        actions: { // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
			
			getCharacters: () =>{
				fetch(`https://www.swapi.tech/api/people/`).then(res => res.json()).then(data => setStore({characters: data.results})).catch(err => console.error(err))
					 },
			
 		    getPlanets: () =>{
				fetch(`https://www.swapi.tech/api/planets/`).then((res) => res.json()).then((data) => setStore({planets: data.results})).catch(err => console.error(err))
					},
					
			getVehicles: () => {
				fetch(`https://www.swapi.tech/api/vehicles/`).then((res) => res.json()).then((data) => setStore({vehicles: data.results})).catch(err => console.error(err))
				    },

			getDetailsPl: (id) => {
					fetch("https://www.swapi.tech/api/planets/"+ id)
					.then(res => res.json())
					.then(data => setStore({planetsDetail: data.result}))
					.catch(err => console.error(err))
            },

			getDetailsCh: (id) => {
				fetch("https://www.swapi.tech/api/people/"+ id)
				.then(res => res.json())
				.then(data => setStore({charactersDetail: data.result}))
				.catch(err => console.error(err))
			},

			getDetailsVe: (id) =>{
				fetch("https://www.swapi.tech/api/vehicles/"+id)
				.then(res => res.json())
				.then(data => setStore({vehiclesDetail: data.result}))
				.catch(err => console.error(err))
			},

			addFavorites: (name) =>{
                 console.log("funciona")
				 setStore({favorites: name})
			},

            changeColor: (index, color) => { // get the store
                const store = getStore();

                // we have to loop the entire demo array to look for the respective index
                // and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) 
                        elm.background = color;

                    return elm;
                });

                // reset the global store
                setStore({demo: demo});
            }
        }
    };
};

export default getState;
