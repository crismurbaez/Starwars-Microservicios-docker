// const characters = require("./characters.json");
const axios = require("axios");

module.exports = {
    list: async () => {
        const results = await axios.get("http://database:8004/database/Character");
        return results.data;
    },


    //crear el CRUD completo
    create: async () => {
        return "Creando un personaje";
    },
}