const { catchedAsync } = require("../utils");

module.exports = {
    getModels: catchedAsync(require("./getModels")),
    getModelsId: catchedAsync(require("./getModelsId")),
};