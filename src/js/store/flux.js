const getState = ({
    getStore,
    getActions,
    setStore
}) => {
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

            getCharacters: () => {
                fetch(`https://www.swapi.tech/api/people/`).then(res => res.json()).then(data => setStore({
                    characters: data.results
                })).catch(err => console.error(err))
            },

            getPlanets: () => {
                fetch(`https://www.swapi.tech/api/planets/`).then((res) => res.json()).then((data) => setStore({
                    planets: data.results
                })).catch(err => console.error(err))
            },

            getVehicles: () => {
                fetch(`https://www.swapi.tech/api/vehicles/`).then((res) => res.json()).then((data) => setStore({
                    vehicles: data.results
                })).catch(err => console.error(err))
            },

            getDetailsPl: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        planetsDetail: data.result
                    }))
                    .catch(err => console.error(err))
            },

            getDetailsCh: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        charactersDetail: data.result
                    }))
                    .catch(err => console.error(err))
            },

            getDetailsVe: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        vehiclesDetail: data.result
                    }))
                    .catch(err => console.error(err))
            },

            addFavorites: (name) => {
                console.log("funciona")
                const store = getStore();
                setStore({
                    favorites: [...store.favorites, name]
                });
            },

            deleteFavorites: (name) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter((elm, i) => elm !== name);
                setStore({
                    favorites: updatedFavorites
                });
            },
            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    auth: false
                })
            },
            login: (userName, userPassword) => {
                fetch('https://3000-nataliagonz-sistemadeau-q1f84irwjcj.ws-us84.gitpod.io/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "username": userName,
                            "password": userPassword
                        })
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "Bad user or password") {
                            alert(data.msg)
                        }
                        console.log(data.access_token)
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
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
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;