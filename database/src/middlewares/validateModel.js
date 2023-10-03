const { ClientError } = require("../utils/errors");


module.exports = (req, res, next) => {
    const { model } = req.params;
    if (["Character", "Films", "Planet"].includes(model)) {
        return next();
    } else {
        throw new ClientError("Invalid model", 401);
    }
};