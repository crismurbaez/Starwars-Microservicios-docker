const axios = require('axios');
const planets = require("./planets.json");

module.exports = {
    list: async () => {
        const results = await axios.get('http://database:8004/database/Planet')
        return results.data;
    },

    create: async () => {
        return "Creando planeta";
    },
};